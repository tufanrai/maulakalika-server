import "dotenv/config";
import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middleware/error.middleware";
import dbConfig from "./config/database.config";
import authRouter from "./routers/auth.router";
import userRouter from "./routers/user.router";
import uploadRouter from "./routers/upload.router";
import galleryRouter from "./routers/gallery.router";

// environment variables
const PORT = process.env.PORT ?? "";
const DB_URI = process.env.DB_URI ?? "";

const app = express();

// connecting database
dbConfig(DB_URI);

// inbuild middlewares
app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.urlencoded());
app.use(express.json());

// routers
app.use("/api/auth", authRouter);
app.use("/user", userRouter);
app.use("/files", uploadRouter);
app.use("/gallery", galleryRouter);

// custom error response
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`server started at port: ${PORT} 🚀`));
