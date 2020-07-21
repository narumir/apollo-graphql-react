import express from "express";
import {
  apollo,
} from "src/graphql/client";
import {
  rootRouter,
} from "./routers";
import type {
  ServerRegistration,
} from "apollo-server-express";

const app = express();
app.use(rootRouter);

const registration: ServerRegistration = {
  app: app,
  path: "/graph",
};
apollo.applyMiddleware(registration);

export {
  app,
};
