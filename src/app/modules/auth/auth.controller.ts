import { NextFunction, Request, Response } from "express";
import { registerIntoDB } from "./auth.service";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;

    const result = await registerIntoDB(name, email, password);
    console.log("User data:", result);
    res.status(200).json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
