import {
  gql,
} from "apollo-boost";

export const APPLICATION_VERSION = gql`
  query {
    version
  }
`;

export type ApplicationVersion = {
  version: string;
}
