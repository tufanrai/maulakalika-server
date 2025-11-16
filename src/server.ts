import "dotenv/config";
import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middleware/error.middleware";

const PORT = process.env.PORT ?? "";

const app = express();

// inbuild middlewares
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.urlencoded());
app.use(express.json());

// custom error response
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`server started at port: ${PORT}🚀`);
});
