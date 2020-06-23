import {
  makeExecutableSchema,
  IResolvers,
  ITypeDefinitions,
} from "apollo-server-express";
import {
  AppSchema,
  BookSchema,
} from "./index";

const typeDefs: ITypeDefinitions = [
  AppSchema.typeDefs,
  BookSchema.typeDefs,
];
const resolvers: IResolvers[] = [
  AppSchema.resolver,
  BookSchema.resolver,
];

export const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
