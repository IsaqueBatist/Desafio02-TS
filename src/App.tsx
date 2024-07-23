import React from 'react';
import { Layout } from './components/layout';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import MainRoutes from './routes/routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <ChakraProvider>
            <Layout>
              <MainRoutes />
            </Layout>
          </ChakraProvider>
        </AppContextProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
