import express, { Request, Response } from "express";

const userRoutes = express.Router();

const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Haseeb" },
  { id: 3, name: "Shariq" },
  { id: 4, name: "Fahad" },
  { id: 5, name: "Mubin" },
  { id: 6, name: "Hassan" },
];

userRoutes.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Success", success: true, data: users });
});

userRoutes.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const selectedUser = users.filter((user) => user.id === Number(id));
  if (!selectedUser.length) {
    res.status(404).json({ message: "No user found", success: false });
  } else {
    res
      .status(200)
      .json({ message: "Success", success: true, data: selectedUser });
  }
});

export default userRoutes;
