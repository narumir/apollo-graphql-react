import {
  apolloContext,
} from "src/api/middlewares";

type StringMap = {
  [name: string]: string;
};

type UnWrap<T> = T extends Promise<infer U> ? U : T;

type ApolloContext = UnWrap<ReturnType<typeof apolloContext>>;

export type {
  ApolloContext,
  StringMap,
  UnWrap,
};
