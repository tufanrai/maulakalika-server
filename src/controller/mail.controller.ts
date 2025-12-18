import { Request, Response } from "express";
import customError from "../utils/customerror.utils";
import asyncHandler from "../utils/asyncHandler.utils";
import { IMail } from "../interface/interfaces";
import transporter from "../config/mail.config";

// receive mail
export const sendMail = asyncHandler(async (req: Request, res: Response) => {
  const message: IMail = req.body;

  if (!message) {
    throw new customError("Please pass all the required details", 400);
  }

  const resp = await transporter.sendMail({
    from: `${message.email}`,
    to: process.env.Google_Email,
    subject: message.subject,
    text: message.message,
    html: `<div>
        <a href="mailto:${message.email}">${message.email}</a>
        <p>${message.message}</p>
    </div>`,
  });
});
