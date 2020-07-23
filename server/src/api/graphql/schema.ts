import {
  makeExecutableSchema,
} from "apollo-server-express";
import {
  BaseSchema,
  TodoSchema,
} from "./index";
import type {
  IResolvers,
  ITypeDefinitions,
} from "apollo-server-express";

const typeDefs: ITypeDefinitions = [
  BaseSchema.typeDefs,
  TodoSchema.typeDefs,
];
const resolvers: IResolvers[] = [
  BaseSchema.resolver,
  TodoSchema.resolver,
];

export const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
