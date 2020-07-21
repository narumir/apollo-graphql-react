import {
  Router,
} from "express";
import {
  HealthController,
} from "../controllers";
import {
  asyncHandler,
} from "../middlewares";

const rootRouter = Router();

rootRouter
  .get("/", asyncHandler(HealthController.check));

export {
  rootRouter,
};
