import { NextFunction, Request, Response } from "express";

import { logger } from "../utils/logger";
import { AppError } from "../utils/appError/appError";

export const globalErrorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const message = err.message || "Internal Server Error";
  const stack = process.env.NODE_ENV === "production" ? null : err.stack;

 
  // Log the error
  logger.error(`Error: ${message}`, { stack });

  res.status(statusCode).json({
    success: false,
    message,
    stack,
  });
};
