import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

const queryClient = new QueryClient();

render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
