import {
  AuthenticationError,
} from "apollo-server-express";
import type {
  Request,
  Response,
} from "express";
import type {
  UnWrap,
} from "src/types";

export const apolloContext = async (
  req: Request,
  res: Response,
) => {
  try {
    return {
      headers: req.headers,
    };
  } catch (e) {
    throw new AuthenticationError("auth error");
  }
};

export type ApolloContext = UnWrap<ReturnType<typeof apolloContext>>;
