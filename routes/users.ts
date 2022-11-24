import express from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users/users.controller";

const userRoutes = express.Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/", createUser);
userRoutes.get("/:id", getUser);
userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);

export default userRoutes;
