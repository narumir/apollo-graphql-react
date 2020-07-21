import {
  makeExecutableSchema,
  IResolvers,
  ITypeDefinitions,
} from "apollo-server-express";
import {
  BaseSchema,
  TodoSchema,
} from "./index";

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
