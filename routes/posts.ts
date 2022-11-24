import express, { Express } from "express";
import {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts/posts.controller";

const postRoutes = express.Router();

postRoutes.get("/", getAllPosts);
postRoutes.post("/", createPost);
postRoutes.get("/:id", getPost);
postRoutes.put("/:id", updatePost);
postRoutes.delete("/:id", deletePost);

export default postRoutes;
