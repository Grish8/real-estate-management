import express from 'express'; //import express files which serves as the backend server.using(npm i express)
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
dotenv.config();

mongoose.connect(process.env.MONGO).then (() => {
    console.log("Connected to MongoDB!");

}).catch((err) => {
    console.log(err);
});

const app=express();

app.use(express.json());  {/* allows json as input of the server */}

app.listen(3000, () => {
    console.log("Grish server is running on this port: 3000!!!");
}
);


app.use("/api/user",userRouter);
app.use('/api/auth', authRouter); {/*call the file authRouter */}


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});