import { Router } from "express";
import { sendMail } from "../controller/mail.controller";

const mailRouter = Router();

mailRouter.post("/", sendMail);

export default mailRouter;
