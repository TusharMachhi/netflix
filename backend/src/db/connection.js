import mongoose from "mongoose";

const connectDB = async () => {
  console.log(process.env.MONGO_URL)
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected succesfully");
  } catch (err) {
    console.error(err.message)
  }
};
export default connectDB;
