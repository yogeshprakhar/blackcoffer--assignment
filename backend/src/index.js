import express, { urlencoded } from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import graphRoute from "./routes/graphroute.js"

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log("Mongoose connection error - ", err));

const app = express();

app.use(
  cors({
    origin:["https://blackcoffer-assignment-omega.vercel.app","http://localhost:5174","http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.get("/ping", async (req, res) => {
  res.json({ message: "Server is ok" });
});

app.use("/data",graphRoute)

app.listen(8000, () => console.log("Server is running"));


// const initDB = async () => {
//   await Graph.deleteMany({});
//   await Graph.insertMany(initData);
//   console.log("data was initialized");
// };

// initDB();

