import { Schema } from "mongoose";
declare const Gallery: import("mongoose").Model<{
    user: string;
    url: string;
    public_id: string;
    file_type: string;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    user: string;
    url: string;
    public_id: string;
    file_type: string;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    user: string;
    url: string;
    public_id: string;
    file_type: string;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    user: string;
    url: string;
    public_id: string;
    file_type: string;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    user: string;
    url: string;
    public_id: string;
    file_type: string;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    user: string;
    url: string;
    public_id: string;
    file_type: string;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export default Gallery;
//# sourceMappingURL=gallery.model.d.ts.map