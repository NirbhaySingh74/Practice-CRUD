import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/hotels")
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log("mongodb connection error", err));

const db = mongoose.connection;

export { db };
