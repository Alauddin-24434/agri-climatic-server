import express, { Application, Request, Response } from "express";
import status from "http-status";

import cors from "cors";
import { weatherRoute } from "./app/modules/weather/weather.route";
import { authRoute } from "./app/modules/auth/auth.route";
import { globalErrorHandler } from "./app/middleware/globalErrorHandeller";

const app: Application = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// Your API routes
app.use("/api/v1", weatherRoute);
app.use("/api/v1", authRoute);

// Not found route handler
app.use((req: Request, res: Response) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: "Not Found",
  });
});


// Global error handler
app.use(globalErrorHandler);

export default app;