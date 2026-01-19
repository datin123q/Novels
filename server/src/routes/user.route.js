import express from "express";
import {
  getPublicProfile,
  checkUsers,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.delete("/:id", deleteUser);

router.get("/checkUsers", checkUsers);
router.get("/:nameTag", getPublicProfile);

export default router;
