import {
  gql,
} from "apollo-boost";

export const TODOS = gql`
  query GetTodo($id: String!) {
    todo(id: $id){
      id
      title
      isComplete
    }
  }
`;
