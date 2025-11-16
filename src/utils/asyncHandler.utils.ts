import { NextFunction, Request, Response } from "express";

type TAsyncHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

// custom async handler
const asyncHandler = async (fun: TAsyncHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fun(req, res, next)).catch((err) => next(err));
  };
};
