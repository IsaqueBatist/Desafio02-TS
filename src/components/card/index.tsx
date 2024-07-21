import { ChakraProvider, Box, Center, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { login } from "../../services/login";
import { MyButon } from "../Buton";
import { Layout } from "../layout";
import { ICard } from "./type";

export const Card = ({ id, paragraph, details }: ICard) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')


  return (
    <ChakraProvider>
      <Layout>
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='5px'>
          <Box backgroundColor='#fff' borderRadius='25px' padding='15px'>
            <Center>
              <h1>Faça o Login</h1>
            </Center>
            <Input placeholder='Insira o email' onChange={(event) => setEmail(event.target.value)} type="email"/>
            <Input placeholder='Insira a senha' onChange={(event) => setPassword(event.target.value)} type='password' />
            <Center>
              <MyButon onClick={() => login(email)} title='Button' />
            </Center>
          </Box>

        </Box>
      </Layout>
    </ChakraProvider>
  )
}