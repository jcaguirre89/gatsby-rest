import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

const URL = process.env.NODE_ENV === 'development' ?
  "http://172.25.201.32:9000/.netlify/functions/graphql" :
  "/.netlify/functions/graphql"

export const client = new ApolloClient({
  uri: URL,
  fetch,
});
