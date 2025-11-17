import { Router } from "express";
import { registerAdmin, loginAdmin } from "../controller/auth.controller";

const authRouter = Router();

authRouter.post("/register", registerAdmin);
authRouter.post("/login", loginAdmin);

export default authRouter;
