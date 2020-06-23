import {
  Router,
} from "express";
import {
  HealthController,
} from "../controllers";

const rootRouter = Router();

rootRouter
  .use("/", HealthController.check);

export {
  rootRouter,
};
