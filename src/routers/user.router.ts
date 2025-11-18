import { Router } from "express";
import {
  updateAdmin,
  removeAdmin,
  getUserData,
} from "../controller/user.controller";
import authAdmin from "../middleware/authenticate.middleware";
import { Roles } from "../interface/Role.enum";

const userRouter = Router();

userRouter.get("/:id", authAdmin([Roles.admin]), getUserData);
userRouter.put("/update/:id", authAdmin([Roles.admin]), updateAdmin);
userRouter.delete("/:id", authAdmin([Roles.admin]), removeAdmin);

export default userRouter;
