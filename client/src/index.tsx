import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import {
  App,
} from "./app";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_URI,
  cache: new InMemoryCache(),
});
const element = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
const container = document.getElementById("root");

ReactDOM.render(element, container);
