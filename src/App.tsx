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


function App() {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/conta' element={<Cont />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
