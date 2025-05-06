import { Router } from "express";
import { getWeatherData } from "./weather.controller";


const  router= Router();

router.get("/weather/:city", getWeatherData);

export const weatherRoute = router;
