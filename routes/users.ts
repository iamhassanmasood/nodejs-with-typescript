import express from "express";
import { getAllUsers, getUser } from "../controllers/users/users.controller";

const userRoutes = express.Router();

userRoutes.get("/", getAllUsers);

userRoutes.get("/:id", getUser);

export default userRoutes;
