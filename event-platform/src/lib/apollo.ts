import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oq9ho80yzt01w7b87l183n/master',
  cache: new InMemoryCache(),
});
