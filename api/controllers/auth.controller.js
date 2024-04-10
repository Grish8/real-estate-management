import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';


export const signup =  async (req, res, next) => {

  const { username, email, password } = req.body;
 const hashedPassword = bcryptjs.hashSync(password, 10);
   const newUser = new User({ username, email, password: hashedPassword});
      

    
    try {
    await newUser.save();
    res.status(201).json('User created successfully!');
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.username === 1) {
      // Duplicate username error
      res.status(400).json({ error: 'Username already exists' });
    }
     if (error.code === 11000 && error.keyPattern.password === 1) {
      // Duplicate password error
      res.status(400).json({ error: 'Password already exists' });
    }
     if (error.code === 11000 && error.keyPattern.email === 1) {
      // Duplicate email error
      res.status(400).json({ error: 'Email already exists' });
    } else {
      // Other error
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

}; 

//Triggers the server to ouput on the console and save in the database 


export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'User not found!'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Wrong password!'));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc; //pass removes the password from being leaked back by user
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
}; //create a cookie
//go to insomnia server and also create a sign in

// backend of continue with google
export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    res.clearCookie('access_token');
    res.status(200).json('User has been logged out!');
  } catch (error) {
    next(error);
  }
};



//install jsonwebtoken in route directory
//import the token at the top