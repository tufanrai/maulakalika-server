import { Router } from "express";
import upload from "../middleware/upload.middleware";
import {
  deleteFile,
  getAllFiles,
  getSpecificFile,
  updateFile,
  uploadFile,
} from "../controller/events.controller";
import authAdmin from "../middleware/authenticate.middleware";
import { Roles } from "../interface/Role.enum";

const eventsRouter = Router();

eventsRouter.get("/", getAllFiles);
eventsRouter.get("/:id", getSpecificFile);

eventsRouter.post(
  "/upload",
  authAdmin([Roles.admin]),
  upload.single("file"),
  uploadFile
);

eventsRouter.put(
  "/upload/:id",
  authAdmin([Roles.admin]),
  upload.single("file"),
  updateFile
);

eventsRouter.delete("/upload/:id", authAdmin([Roles.admin]), deleteFile);

export default eventsRouter;
