import express from 'express'; //import express files which serves as the backend server.using(npm i express)
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then (() => {
    console.log("Connected to MongoDB!");

}).catch((err) => {
    console.log(err);
});

const app=express();

app.listen(3000, () => {
    console.log("Grish server is running on this port: 3000");
}
);
