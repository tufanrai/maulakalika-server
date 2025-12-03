import { Router } from "express";
import {
  updateAdmin,
  removeAdmin,
  getUserData,
  getAllUsersData,
} from "../controller/user.controller";
import authAdmin from "../middleware/authenticate.middleware";
import { Roles } from "../interface/Role.enum";

const userRouter = Router();

userRouter.get("/", authAdmin([Roles.superAdmin]), getAllUsersData);
userRouter.get("/:id", authAdmin([Roles.admin, Roles.superAdmin]), getUserData);
userRouter.put(
  "/update/:id",
  authAdmin([Roles.admin, Roles.superAdmin]),
  updateAdmin
);
userRouter.delete(
  "/:id",
  authAdmin([Roles.admin, Roles.superAdmin]),
  removeAdmin
);

export default userRouter;
