import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
// import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client';
import client from './client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

