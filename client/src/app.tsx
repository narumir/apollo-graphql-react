import React from 'react';
import {
  gql,
} from "apollo-boost";
import {
  useQuery,
} from "@apollo/react-hooks";

const query = gql`
  query {
    version
  }
`;

interface VersionQuery {
  version: string;
}

export const App = () => {
  console.log("render");
  const { data, loading, error,} = useQuery<VersionQuery>(query, {});
  return (
    <div>
      data
    </div>
  );
};
