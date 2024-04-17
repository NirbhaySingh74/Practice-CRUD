import express from "express";
import {
  deletePerson,
  getAll,
  getPersonById,
  post,
  updatePerson,
} from "../controllers/controller.js";

const router = express.Router();

router.post("/", post);
router.get("/", getAll);
router.delete("/:id", deletePerson);
router.put("/:id", updatePerson);
router.get("/:id", getPersonById);

export default router;
