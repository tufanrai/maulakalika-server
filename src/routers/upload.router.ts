import { Router } from "express";
import upload from "../middleware/upload.middleware";
import {
  deleteFile,
  updateFile,
  uploadFile,
} from "../controller/uploads.controller";
import authAdmin from "../middleware/authenticate.middleware";
import { Roles } from "../interface/Role.enum";

const uploadRouter = Router();

uploadRouter.post(
  "/upload",
  authAdmin([Roles.admin]),
  upload.single("file"),
  uploadFile
);
uploadRouter.put(
  "/upload/:id",
  authAdmin([Roles.admin]),
  upload.single("file"),
  updateFile
);
uploadRouter.delete("/upload/:id", authAdmin([Roles.admin]), deleteFile);

export default uploadRouter;
