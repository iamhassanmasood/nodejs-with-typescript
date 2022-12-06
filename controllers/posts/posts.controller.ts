import { Request, Response } from "express";
import Post from "../../models/post.schema";

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ message: "Success", success: true, data: posts });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const getPost = async (req: Request, res: Response) => {
  const _id = req.params.id;
  try {
    const requestedPost = await Post.findById(_id);
    res
      .status(200)
      .json({ message: "Success", success: true, data: requestedPost });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const createPost = async (req: Request, res: Response) => {
  const { title, body } = req.body;
  try {
    const post = await Post.create({ title, body });
    res
      .status(201)
      .json({ message: "Post Created Successfuly", success: true, data: post });
  } catch (error) {
    console.log(error, "errpr");
    res.status(400).json({ success: false });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  const _id = req.params.id;
  const { title, body } = req.body;
  try {
    const updatePost = await Post.findByIdAndUpdate(_id, { title, body });
    res.status(200).json({
      message: "Post Updated Successfuly",
      success: true,
      data: updatePost,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  const _id = req.params.id;
  try {
    await Post.findByIdAndRemove(_id);
    res.status(200).json({
      message: "Post Deleted Successfuly",
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
