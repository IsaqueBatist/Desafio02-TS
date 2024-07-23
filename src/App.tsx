import React, { createContext } from 'react';
import { Layout } from './components/layout';
import { ChakraProvider }  from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cont from './pages/Cont';
import ContaInfo from './pages/ContaInfo';
import { AppContextProvider } from './context/AppContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <ChakraProvider>
            <Layout>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/conta/:id' element={<Cont />} />
                <Route path='/infoconta' element={<ContaInfo />} />
              </Routes>
            </Layout>
          </ChakraProvider>
        </AppContextProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
