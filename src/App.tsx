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
import { Card } from './components/card';


function App() {
  return (
    <>
      <Card />
    </>
  );
}

export default App;
