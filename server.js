import express from "express";
import { db } from "./db/db.js";
import bodyParser from "body-parser";
import route from "./routes/route.js";
import menurouter from "./routes/menuRouter.js";
const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/details", route);
app.use("/menu", menurouter);
