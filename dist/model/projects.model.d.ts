import { Schema } from "mongoose";
declare const Projects: import("mongoose").Model<{
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
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
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
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
export default Projects;
//# sourceMappingURL=projects.model.d.ts.map