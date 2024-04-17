import express from "express";
import { createMenu, getMenu } from "../controllers/menu.controllers.js";

const router = express.Router();

router.post("/", createMenu);
router.get("/", getMenu);

export default router;
