import { Request, Response, NextFunction } from "express";

// response with custom error
export const errorMiddleware = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode ?? 500;
  const status = err.status ?? "error";
  const message = err.message ?? "server side error";
  const success = err.success ?? false;

  res.status(statusCode).json({
    message,
    status,
    success,
  });
};
