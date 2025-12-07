import { Schema } from "mongoose";
import { EReports } from "../interface/FileTypes.enum";
declare const Reports: import("mongoose").Model<{
    date: string;
    type: EReports;
    user: string;
    url: string;
    public_id: string;
    title: string;
    pages: string;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    date: string;
    type: EReports;
    user: string;
    url: string;
    public_id: string;
    title: string;
    pages: string;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    date: string;
    type: EReports;
    user: string;
    url: string;
    public_id: string;
    title: string;
    pages: string;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    date: string;
    type: EReports;
    user: string;
    url: string;
    public_id: string;
    title: string;
    pages: string;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    date: string;
    type: EReports;
    user: string;
    url: string;
    public_id: string;
    title: string;
    pages: string;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    date: string;
    type: EReports;
    user: string;
    url: string;
    public_id: string;
    title: string;
    pages: string;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export default Reports;
//# sourceMappingURL=reports.model.d.ts.map