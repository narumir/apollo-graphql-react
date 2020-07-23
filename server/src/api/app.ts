import express from "express";
import {
  ApolloServer,
} from "apollo-server-express";
import {
  apolloContext,
} from "./middlewares";
import {
  rootRouter,
} from "./routers";
import {
  schema,
} from "./graphql";
import type {
  ServerRegistration,
  ApolloServerExpressConfig,
} from "apollo-server-express";

const app = express();
app.use(rootRouter);

const registration: ServerRegistration = {
  app: app,
  path: "/graph",
};
const apolloConfig: ApolloServerExpressConfig = {
  schema: schema,
  playground: process.env.NODE_ENV !== "production",
  context: apolloContext,
};
const apollo = new ApolloServer(apolloConfig);
apollo.applyMiddleware(registration);

export {
  app,
};
