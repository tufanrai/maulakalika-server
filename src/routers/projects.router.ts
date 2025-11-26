import { Router } from "express";
import upload from "../middleware/upload.middleware";
import {
  deleteFile,
  getAllFiles,
  getSpecificFile,
  updateFile,
  uploadFile,
} from "../controller/projects.controller";
import authAdmin from "../middleware/authenticate.middleware";
import { Roles } from "../interface/Role.enum";

const projectsRouter = Router();

projectsRouter.get("/", getAllFiles);
projectsRouter.get("/:id", getSpecificFile);

projectsRouter.post(
  "/upload",
  authAdmin([Roles.admin]),
  upload.single("file"),
  uploadFile
);

projectsRouter.put(
  "/upload/:id",
  authAdmin([Roles.admin]),
  upload.single("file"),
  updateFile
);

projectsRouter.delete("/upload/:id", authAdmin([Roles.admin]), deleteFile);

export default projectsRouter;
