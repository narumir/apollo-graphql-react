import express from "express";
import {
  ApolloServer,
  ServerRegistration,
  ApolloServerExpressConfig,
} from "apollo-server-express";
import {
  rootRouter,
} from "./routers";
import {
  schema,
} from "src/graphql";

const app = express();
app.use("/", rootRouter);

const apolloConfig: ApolloServerExpressConfig = {
  schema: schema,
  playground: process.env.NODE_ENV !== "production",
};
const registeration: ServerRegistration = {
  app: app,
  path: "/graph",
};
const apollo = new ApolloServer(apolloConfig);
apollo.applyMiddleware(registeration);

export {
  app,
};
