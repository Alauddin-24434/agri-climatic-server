import { NextFunction, Request, Response } from "express";

export const handleAsyncErrors = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next); // catch any error and pass it to the error handler
  };
};
