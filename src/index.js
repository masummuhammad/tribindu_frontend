import React from 'react';
import ReactDOM from 'react-dom';
import{ApolloClient,ApolloProvider,InMemoryCache} from '@apollo/client';
import './index.css';
import App from './App';

const client=new ApolloClient({
  uri:'https://sheltered-springs-54896.herokuapp.com/graphql',
  cache:new InMemoryCache(),
})



ReactDOM.render(
  <React.StrictMode>
    
      <ApolloProvider client={client}>
      <App/>
      </ApolloProvider>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

