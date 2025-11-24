import { Request, Response, NextFunction } from "express";
import { Roles } from "../interface/Role.enum";
declare const authAdmin: (role: Roles[]) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default authAdmin;
//# sourceMappingURL=authenticate.middleware.d.ts.map