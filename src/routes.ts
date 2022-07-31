import express from "express";
import emotion from "./emotion";

const router = express.Router();

router.get("/health", (req, res) => {
  res.send(200);
});

router.post("/emotions", emotion.translator().getEmotions);

export default router;
