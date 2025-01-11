import mongoose from "mongoose";

const ConnectDb = () => {
  if (mongoose.connection[0].readyState) return;
  mongoose.connect(process.env.MONGO_URI);
  console.log("connected to DB");
};

export default ConnectDb;
