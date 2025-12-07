import { Router } from "express";
import upload from "../middleware/upload.middleware";
import {
  deleteFile,
  getAllFiles,
  getSpecificFile,
  updateFile,
  uploadFile,
} from "../controller/reports.controller";
import authAdmin from "../middleware/authenticate.middleware";
import { Roles } from "../interface/Role.enum";

const reportsRouter = Router();

reportsRouter.get("/", getAllFiles);
reportsRouter.get("/:id", getSpecificFile);

reportsRouter.post(
  "/upload",
  authAdmin([Roles.admin, Roles.superAdmin]),
  upload.single("file"),
  uploadFile
);

reportsRouter.put(
  "/update/:id",
  authAdmin([Roles.admin, Roles.superAdmin]),
  upload.single("file"),
  updateFile
);

reportsRouter.delete(
  "/update/:id",
  authAdmin([Roles.admin, Roles.superAdmin]),
  deleteFile
);

export default reportsRouter;
