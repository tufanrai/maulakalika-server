import { NextFunction, Request, Response } from "express";
type TAsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>;
declare const asyncHandler: (fun: TAsyncHandler) => (req: Request, res: Response, next: NextFunction) => void;
export default asyncHandler;
//# sourceMappingURL=asyncHandler.utils.d.ts.map