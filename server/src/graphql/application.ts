import {
  IResolvers,
  gql,
} from "apollo-server-express"

const typeDefs = gql`
  type App {
    version: String
  }
  type Query {
    getVersion: App
  }
  type Mutation {
    _empty: String
  }
`;

const resolver: IResolvers = {
  Query: {
    getVersion: () => ({ version: "1.0.0" })
  },
  Mutation: {
    _empty: () => "",
  },
};

export const AppSchema = {
  typeDefs,
  resolver,
};
