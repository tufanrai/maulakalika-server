import { IUser } from "../interface/interfaces";

declare global {
  namespace Express {
    interface Request {
      user: IUser;
    }
  }
}
