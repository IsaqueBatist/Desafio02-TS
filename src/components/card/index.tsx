import { ChakraProvider, Box, Center, Input } from "@chakra-ui/react";
import React from "react";
import { login } from "../../services/login";
import { MyButon } from "../Buton";
import { Layout } from "../layout";
import { ICard } from "./type";

export const Card = ({ id, paragraph, details }: ICard) => {
  return (
    <ChakraProvider>
    <Layout>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='5px'>
        <Box backgroundColor='#fff' borderRadius='25px' padding='15px'>
          <Center>
            <h1>Faça o Login</h1>
          </Center>
          <Input placeholder='Insira o email' />
          <Input placeholder='Insira a senha' type='password' />
          <Center>
            <MyButon onClick={login} title='Button' />
          </Center>
        </Box>
      </Box>
    </Layout>
  </ChakraProvider>
  )
}