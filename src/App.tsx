import React from 'react';
import { Layout } from './components/layout';
import {
  ChakraProvider,
  Input,
  Box,
  Center,
  Button
} from '@chakra-ui/react'
import { login } from './services/login';
import { MyButon } from './components/Buton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cont from './pages/Cont';
import ContaInfo from './pages/ContaInfo';


function App() {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/conta/:id' element={<Cont />} />
              <Route path='/infoconta' element={<ContaInfo />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
