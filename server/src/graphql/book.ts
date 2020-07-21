import {
  IResolvers,
  gql,
} from "apollo-server-express"

const typeDefs = gql`
  type Book {
    title: String
  }
  extend type Query {
    getBook: Book
  }
`;

const resolver: IResolvers = {
  Query: {
    getBook: () => ({ title: "hello" })
  },
};

export const BookSchema = {
  typeDefs,
  resolver,
};
