import {
  gql,
} from "apollo-server-express";
import type {
  IResolvers,
} from "apollo-server-express"

const typeDefs = gql`
  type Query {
    version: String
  }
  type Mutation {
    _empty: String
  }
  type Subscription {
    _empty: String
  }
`;

const resolver: IResolvers = {
  Query: {
    version: () => "1.0.0"
  },
  Mutation: {
    _empty: () => "",
  },
  Subscription: {
    _empty: () => "",
  }
};

export const BaseSchema = {
  typeDefs,
  resolver,
};
