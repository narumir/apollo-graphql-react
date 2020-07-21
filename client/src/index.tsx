import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import {
  ApolloProvider,
} from "@apollo/react-hooks";
import {
  App,
} from "./app";

const client = new ApolloClient({
  uri: "http://localhost:4000/graph",
});
const element = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
const container = document.getElementById("root");

ReactDOM.render(element, container);
