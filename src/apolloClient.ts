// src/apolloClient.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Use environment variables to get the API base URL
const client = new ApolloClient({
  uri: `${import.meta.env.VITE_API_BASE_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
