import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';

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

{/* Triggers the server to ouput on the console and save in the database */}
