import { Router } from "express";
import upload from "../middleware/upload.middleware";
import {
  removeNews,
  updateTheNews,
  getSpecificNews,
  getAllNews,
  createNewNews,
} from "../controller/news.controller";
import authAdmin from "../middleware/authenticate.middleware";
import { Roles } from "../interface/Role.enum";

const newsRouter = Router();

newsRouter.get("/", getAllNews);
newsRouter.get("/:id", getSpecificNews);

newsRouter.post(
  "/upload",
  authAdmin([Roles.admin, Roles.superAdmin]),
  upload.single("file"),
  createNewNews
);

newsRouter.put(
  "/update/:id",
  authAdmin([Roles.admin, Roles.superAdmin]),
  upload.single("file"),
  updateTheNews
);

newsRouter.delete(
  "/update/:id",
  authAdmin([Roles.admin, Roles.superAdmin]),
  removeNews
);

export default newsRouter;
