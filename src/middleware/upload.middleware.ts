// src/middlewares/upload.middleware.ts
import multer from "multer";

const upload = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 10 * 1024 * 1024 }, // optional: 10 MB
});

export default upload;
