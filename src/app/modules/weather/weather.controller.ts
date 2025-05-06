import { NextFunction, Request, Response } from "express";
import { getWeatherDataFormApi } from "./weather.services";

export const getWeatherData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getWeatherDataFormApi(req.params.city);
    console.log("Weather data:", result);
    res.status(200).json({
      success: true,
      message: "Weather data fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error); // error handler e pathiye den
  }
};
