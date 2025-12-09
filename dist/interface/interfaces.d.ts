import mongoose from "mongoose";
import { Roles } from "./Role.enum";
import { EReports, EStatus } from "./FileTypes.enum";
export interface IPayload {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    contact: number;
    password: string;
    role: Roles;
}
export interface IUser {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    contact: number;
    role: Roles;
}
export interface IRegisterValue {
    name: string;
    email: string;
    contact: number;
    password: string;
    role: Roles;
    about: string;
}
export interface ILogin {
    email: string;
    password: string;
}
export interface ITechSpecs {
    Type: string;
    headHeight: string;
    turbineType: string;
    annualGeneration: string;
    gridConnection: string;
}
export interface ITimeline {
    year: string;
    milestone: string;
}
export interface IFiles {
    title: string;
    description: string;
    capacity: string;
    status: EStatus;
    location: string;
    startYear: string;
    features: string[];
    fullDescription: string;
    technicalSpecs: ITechSpecs;
    timeline: ITimeline[];
}
export interface INews {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    description: string;
}
export interface IReports {
    title: string;
    type: EReports;
    date: string;
    pages: string;
}
export interface IImage {
    category: string;
    alt: string;
}
//# sourceMappingURL=interfaces.d.ts.map