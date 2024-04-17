import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes/route.js";
import menurouter from "./routes/menuRouter.js";
import mongoose from "mongoose";
const app = express();
const PORT = process.env.PORT;
dotenv.config();
app.use(bodyParser.json());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("server connected");
    app.listen(PORT, () => {
      console.log(`server is running ${PORT}`);
    });
  })
  .catch((err) => console.log("server not connected", err));

app.use("/details", route);
app.use("/menu", menurouter);
