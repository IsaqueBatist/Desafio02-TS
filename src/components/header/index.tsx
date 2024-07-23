import React, { useContext } from "react";
import {
  ChakraProvider,
  Box,
  Image,
  Text,
  Button,
  Flex,
  Spacer
} from '@chakra-ui/react'
import logo from '../../assets/logo.png'
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";


export const Header = () => {

  const { setlsLogedIn, islogedIn } = useContext(AppContext)
  const context = useContext(AppContext)
  const navigate = useNavigate()

  const handleLogOut = () => {
    setlsLogedIn(false)
    navigate('/')
  }
  return (
    <ChakraProvider>
      <Flex backgroundColor='#fff' alignItems="center" padding="5px">
        <Box>
          <Image src={logo} alt='Dan Abramov' width='100px' borderRadius='full' />
        </Box>
        <Spacer />
        <Box display='flex' alignItems="center" >
          <Text fontSize='30px'>Dio Bank</Text>
        </Box>
        {islogedIn ? (
          <>
            <Spacer />
            <Button onClick={() => handleLogOut()}>Sair</Button>
          </>
        ) : ""}
      </Flex>
    </ChakraProvider>
  )


}