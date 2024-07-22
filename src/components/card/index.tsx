import { Box, Center, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { login } from "../../services/login";
import { MyButon } from "../Buton";
import { IUserData } from "./type";
import { api } from "../../api";


export const Card = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState<null | IUserData>({} as IUserData)

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api
      if (data) setUserData(data)
    }
    getData()
  }, [])

  return (
    <Box minHeight='100vh' backgroundColor='#9413dc' padding='5px'>
      <Box backgroundColor='#fff' borderRadius='25px' padding='15px'>
        {/* {userData === null || userData === undefined || Object.keys(userData).length === 0 ? <h1>Loading...</h1> :
              <h1> Informações carregadas</h1>
            } */}
        <Center>
          <h1>Faça o Login</h1>
        </Center>
        <Input placeholder='Insira o email' onChange={(event) => setEmail(event.target.value)} type="email" />
        <Input placeholder='Insira a senha' onChange={(event) => setPassword(event.target.value)} type='password' />
        <Center>
          <MyButon onClick={() => login(email)} title='Button' />
        </Center>
      </Box>
    </Box>
  )
}