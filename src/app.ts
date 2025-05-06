import express, { Application, NextFunction, Request } from "express";
import status from "http-status";
import { weatherRoute } from "./app/modules/weather/weather.route";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api/v1', weatherRoute);

// not found route handler
app.use((req: Request, res: express.Response) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: "Not Found",
  });
});

// global error handler
app.use(
  (err: Error, req: Request, res: express.Response) => {
    res.status(status.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message,
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
  }
);

export default app;
