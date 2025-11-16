class customError extends Error {
  statusCode: number;
  status: "success" | "error" | "fail";
  success: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode ?? 500;
    this.status = statusCode >= 400 && statusCode < 500 ? "fail" : "error";
    this.success = false;
    Error.captureStackTrace(this, customError);
  }
}

export default customError;
