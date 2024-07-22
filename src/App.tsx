import React, { createContext } from 'react';
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
import { IAppContext } from './type';


export const AppContext = createContext({} as IAppContext)

const AppContextProvider = ({ children }: any) => {
  const user = 'Isaque'
  return (
    <AppContext.Provider value={{ user }}>
      {children}
    </AppContext.Provider>
  )
}

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
