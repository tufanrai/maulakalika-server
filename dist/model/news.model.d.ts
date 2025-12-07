import { Schema } from "mongoose";
declare const News: import("mongoose").Model<{
    date: string;
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
    category: string;
    excerpt: string;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    date: string;
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
    category: string;
    excerpt: string;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    date: string;
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
    category: string;
    excerpt: string;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    date: string;
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
    category: string;
    excerpt: string;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    date: string;
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
    category: string;
    excerpt: string;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    date: string;
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
    category: string;
    excerpt: string;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export default News;
//# sourceMappingURL=news.model.d.ts.map