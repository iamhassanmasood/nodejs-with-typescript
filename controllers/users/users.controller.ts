import { Request, Response } from "express";
import User from "../../models/user.schema";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "Success", success: true, data: users });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const post = await User.create({ name });
    res
      .status(201)
      .json({ message: "User Created Successfuly", success: true, data: post });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    res.status(200).json({ message: "Success", success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const _id = req.params.id;
  const { name } = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(_id, { name });
    res.status(200).json({
      message: "User Updated Successfuly",
      success: true,
      data: updateUser,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const _id = req.params.id;
  try {
    await User.findByIdAndRemove(_id);
    res.status(200).json({
      message: "User Deleted Successfuly",
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
