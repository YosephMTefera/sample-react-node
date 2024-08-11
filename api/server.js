import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import mongoose from 'mongoose';
import connectDB from './config/DB.js';
import userRoute from './routes/userRoutes.js'
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000

connectDB();
app.use(cors())
app.use(express.static("Media"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("<h1>Welcome</h1>")
})


app.use("/api/users",userRoute);




mongoose.connection.once("open", () => {
    try {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
      console.log("Database connected successfully.");
    } catch (error) {
      console.log(error?.message);
    }
  });
  