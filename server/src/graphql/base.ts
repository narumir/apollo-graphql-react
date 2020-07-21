import {
  IResolvers,
  gql,
} from "apollo-server-express"

const typeDefs = gql`
  type Query {
    version: String
  }
  type Mutation {
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
};

export const BaseSchema = {
  typeDefs,
  resolver,
};
