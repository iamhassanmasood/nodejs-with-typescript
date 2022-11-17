import express from "express";
import { getAllPosts, getPost } from "../controllers/posts/posts.controller";

const postRoutes = express.Router();

postRoutes.get("/", getAllPosts);

postRoutes.get("/:id", getPost);

export default postRoutes;
