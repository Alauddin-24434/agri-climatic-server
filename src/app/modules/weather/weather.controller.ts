import { NextFunction, Request, Response } from "express";
import { getWeatherDataFormApi } from "./weather.services";
import { handleAsyncErrors } from "../../middleware/handleAsyncErrors";
import { logger } from "../../utils/logger";

export const getWeatherData = handleAsyncErrors(
  async (req: Request, res: Response) => {
    const result = await getWeatherDataFormApi(req.params.city);

    logger.debug("Weather data:", result); // Log the weather data for debugging
    res.status(200).json({
      success: true,
      message: "Weather data fetched successfully",
      data: result,
    });
  }
);
