import { Router } from "express";
import upload from "../middleware/upload.middleware";
import {
  deleteFile,
  getAllFiles,
  getSpecificFile,
  updateFile,
  uploadFile,
} from "../controller/uploads.controller";
import authAdmin from "../middleware/authenticate.middleware";
import { Roles } from "../interface/Role.enum";

const uploadRouter = Router();

uploadRouter.post(
  "/upload",
  authAdmin([Roles.admin, Roles.superAdmin]),
  upload.single("file"),
  uploadFile
);
uploadRouter.get("/", getAllFiles);
uploadRouter.get("/:id", getSpecificFile);

uploadRouter.put(
  "/upload/:id",
  // authAdmin([Roles.admin, Roles.superAdmin]),
  upload.single("file"),
  updateFile
);

uploadRouter.delete(
  "/upload/:id",
  authAdmin([Roles.admin, Roles.superAdmin]),
  deleteFile
);

export default uploadRouter;
