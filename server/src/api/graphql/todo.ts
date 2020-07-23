import {
  gql,
} from "apollo-server-express"
import type {
  IResolvers,
} from "apollo-server-express";
import type {
  ApolloContext,
} from "src/types";

const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    isComplete: Boolean!
  }
  extend type Query {
    todo(id: String!): Todo
    todos: [Todo]
  }
`;

const resolver: IResolvers<any, ApolloContext> = {
  Query: {
    todo: (parent, args: TodoArgs, context, info) => {
      return {
        id: args.id,
        title: "hello todo",
        isComplete: true,
      }
    },
    todos: (parent, args: TodosArgs, context, info) => {
      return [
        {
          id: args.start,
          title: "hello start",
          isComplete: false
        },
        {
          id: args.end,
          title: "hello end",
          isComplete: true
        },
      ];
    }
  },
};

type TodoArgs = {
  id: string,
};

type TodosArgs = {
  start: string,
  end: string,
}

export const TodoSchema = {
  typeDefs,
  resolver,
};
