import {
  makeExecutableSchema,
  IResolvers,
  ITypeDefinitions,
} from "apollo-server-express";
import {
  BaseSchema,
  BookSchema,
} from "./index";

const typeDefs: ITypeDefinitions = [
  BaseSchema.typeDefs,
  BookSchema.typeDefs,
];
const resolvers: IResolvers[] = [
  BaseSchema.resolver,
  BookSchema.resolver,
];

export const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
