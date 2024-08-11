import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DBURL}`, { family: 4 });
  } catch (error) {
    console.error("Database Error: ", error?.message);
  }
};

export default connectDB;
