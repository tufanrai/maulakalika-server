import { Schema } from "mongoose";
import { ETypes } from "../interface/FileTypes.enum";
declare const Files: import("mongoose").Model<{
    type: ETypes;
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    type: ETypes;
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    type: ETypes;
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    type: ETypes;
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    type: ETypes;
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    type: ETypes;
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export default Files;
//# sourceMappingURL=files.model.d.ts.map