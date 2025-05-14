import { NextFunction, Request, Response } from "express";
import { getWeatherDataFormApi } from "./weather.services";
import { handleAsyncErrors } from "../../middleware/handleAsyncErrors";

export const getWeatherData = handleAsyncErrors(async (req: Request, res: Response) => {
  const result = await getWeatherDataFormApi(req.params.city);
  console.log("Weather data:", result);
  res.status(200).json({
    success: true,
    message: "Weather data fetched successfully",
    data: result,
  });
});
