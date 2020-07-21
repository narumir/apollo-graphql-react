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
  uri: process.env.REACT_APP_GRAPH_URI,
});
const element = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
const container = document.getElementById("root");

ReactDOM.render(element, container);
