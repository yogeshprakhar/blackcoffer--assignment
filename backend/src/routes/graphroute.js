import { Router } from "express";
import { Graph } from "../models/graph.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await Graph.find().limit(30);
    res.status(200).json(data)
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "something went wrong" });
  }
});

export default router;
