import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/users";
import postRoutes from "./routes/posts";
import connect from "./db";

dotenv.config();

const db = process.env.MONGO_URI || "";
connect({ db });

const app: Express = express();

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};

app.use(logger);
app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
