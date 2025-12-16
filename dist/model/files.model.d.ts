import { Schema } from "mongoose";
import { EStatus } from "../interface/FileTypes.enum";
declare const Project: import("mongoose").Model<{
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
    fullDescription: string;
    status: EStatus;
    location: string;
    startYear: string;
    capacity: string;
    features: string;
    technicalSpecs: import("mongoose").Types.DocumentArray<{
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }> & {
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }>;
    timeline: string;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
    fullDescription: string;
    status: EStatus;
    location: string;
    startYear: string;
    capacity: string;
    features: string;
    technicalSpecs: import("mongoose").Types.DocumentArray<{
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }> & {
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }>;
    timeline: string;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
    fullDescription: string;
    status: EStatus;
    location: string;
    startYear: string;
    capacity: string;
    features: string;
    technicalSpecs: import("mongoose").Types.DocumentArray<{
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }> & {
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }>;
    timeline: string;
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
    fullDescription: string;
    status: EStatus;
    location: string;
    startYear: string;
    capacity: string;
    features: string;
    technicalSpecs: import("mongoose").Types.DocumentArray<{
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }> & {
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }>;
    timeline: string;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
    fullDescription: string;
    status: EStatus;
    location: string;
    startYear: string;
    capacity: string;
    features: string;
    technicalSpecs: import("mongoose").Types.DocumentArray<{
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }> & {
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }>;
    timeline: string;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    user: string;
    description: string;
    url: string;
    public_id: string;
    title: string;
    fullDescription: string;
    status: EStatus;
    location: string;
    startYear: string;
    capacity: string;
    features: string;
    technicalSpecs: import("mongoose").Types.DocumentArray<{
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }> & {
        Type: string;
        headHeight: string;
        turbineType: string;
        annualGeneration: string;
        gridConnection?: string | null;
    }>;
    timeline: string;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export default Project;
//# sourceMappingURL=files.model.d.ts.map