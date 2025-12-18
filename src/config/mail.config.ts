import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: true,
  auth: {
    user: "thulungtufan16@gmail.com",
    pass: process.env.Google_App_Password ?? "",
  },
});

export default transporter;
