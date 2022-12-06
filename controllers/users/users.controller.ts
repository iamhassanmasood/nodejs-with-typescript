import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/user.schema";

const SECRET_KEY: String = "SECRET_KEY";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "Success", success: true, data: users });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// export const createUser = async (req: Request, res: Response) => {
//   const { name } = req.body;
//   try {
//     const post = await User.create({ name });
//     res
//       .status(201)
//       .json({ message: "User Created Successfuly", success: true, data: post });
//   } catch (error) {
//     res.status(400).json({ success: false });
//   }
// };

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

export const userSignUp = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: `User with ${email} already exist ☹️` });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const createdUser = await User.create({
      username,
      email,
      password: encryptedPassword,
    });
    const token = jwt.sign(
      {
        email: createdUser.email,
        userId: createdUser._id,
      },
      "SECRET_KEY",
      {
        expiresIn: "2 days",
      }
    );

    res.status(201).json({
      message: "User Created Successfuly 😊",
      success: true,
      user: createdUser,
      token,
    });
  } catch (error) {
    console.log(error, "error is hare");
    res.status(500).json({ message: `Something went wrong 🙃` });
  }
};
