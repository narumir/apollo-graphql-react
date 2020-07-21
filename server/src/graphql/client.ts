import {
  ApolloServerExpressConfig,
  ApolloServer,
} from "apollo-server-express";
import {
  schema,
} from "./schema";
import type {
  Request,
  Response,
} from "express";

const apolloContext = async (
  req: Request,
  res: Response,
) => {
  try {
    return {
      headers: req.headers,
    };
  } catch (e) {
    return {};
  }
};
const apolloConfig: ApolloServerExpressConfig = {
  schema: schema,
  playground: process.env.NODE_ENV !== "production",
  context: apolloContext,
};
export const apollo = new ApolloServer(apolloConfig);

export type ApolloContext = ReturnType<typeof apolloContext>;
