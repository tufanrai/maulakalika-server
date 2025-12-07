import { Router } from "express";
import upload from "../middleware/upload.middleware";
import {
  getAllCollectionsImage,
  getSpecificImage,
  uploadImage,
  updateImage,
  deleteImage,
} from "../controller/gallery.controller";
import authAdmin from "../middleware/authenticate.middleware";
import { Roles } from "../interface/Role.enum";

const galleryRouter = Router();

galleryRouter.get("/", getAllCollectionsImage);
galleryRouter.get("/:id", getSpecificImage);

galleryRouter.post(
  "/upload",
  authAdmin([Roles.admin, Roles.superAdmin]),
  upload.single("image"),
  uploadImage
);

galleryRouter.put(
  "/upload/:id",
  authAdmin([Roles.admin, Roles.superAdmin]),
  upload.single("image"),
  updateImage
);

galleryRouter.delete(
  "/upload/:id",
  authAdmin([Roles.admin, Roles.superAdmin]),
  deleteImage
);

export default galleryRouter;
