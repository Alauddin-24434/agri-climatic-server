import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import { loginIntoDB, registerIntoDB } from "./auth.service";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;

    // hash the password before saving it to the database

    const hasedPassword = await bcrypt.hash(password, 10);

    const result = await registerIntoDB(name, email, hasedPassword);
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

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const result = await loginIntoDB(email, password);
    console.log("User data:", result);
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

