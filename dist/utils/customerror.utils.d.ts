declare class customError extends Error {
    statusCode: number;
    status: "success" | "error" | "fail";
    success: boolean;
    constructor(message: string, statusCode: number);
}
export default customError;
//# sourceMappingURL=customerror.utils.d.ts.map