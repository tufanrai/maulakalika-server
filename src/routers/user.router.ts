import { Router } from "express";
import {
  updateAdmin,
  removeAdmin,
  getUserData,
} from "../controller/user.controller";

const userRouter = Router();

userRouter.get("/:id", getUserData);
userRouter.put("/:id", updateAdmin);
userRouter.delete("/:id", removeAdmin);

export default userRouter;
