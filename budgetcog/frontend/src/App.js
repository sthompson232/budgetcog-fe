import React from 'react';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  HttpLink, 
  from 
} from "@apollo/client";
import { onError } from '@apollo/client/link/error';
import GetUsers from './components/GetUsers';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "http://localhost:8000/graphql/",
    fetchOptions: {
      mode: 'no-cors',
    },
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
  <ApolloProvider client={client}>
    <div>
      <h1>Hello, World!</h1>
    </div>
    <GetUsers />
  </ApolloProvider>
  );
}

export default App;
