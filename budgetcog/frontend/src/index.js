import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  HttpLink, 
  from 
} from "@apollo/client";
import { onError } from '@apollo/client/link/error';


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
    credentials: 'same-origin',
    uri: "http://localhost:8000/graphql/",
    fetchOptions: {
      mode: 'no-cors',
    },
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
  connectToDevTools: true,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <React.StrictMode>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </React.StrictMode>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'));
