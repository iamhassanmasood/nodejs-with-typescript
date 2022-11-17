import express, { Express } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/users";
import postRoutes from "./routes/posts";

dotenv.config();

const app: Express = express();

// Users Routes
app.use("/api/v1/users", userRoutes);

// Posts Routes
app.use("/api/v1/posts", postRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
