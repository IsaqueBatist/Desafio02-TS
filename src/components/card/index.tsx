import { ChakraProvider, Box, Center, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { login } from "../../services/login";
import { MyButon } from "../Buton";
import { Layout } from "../layout";
import { ICard, IUserData } from "./type";
import { api } from "../../api";


export const Card = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState<IUserData>({} as IUserData)

  useEffect(() =>{
    const getData = async () => {
      const data: IUserData = await api as IUserData
      if(data) setUserData(data)
    }
    getData()
  }, [])

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