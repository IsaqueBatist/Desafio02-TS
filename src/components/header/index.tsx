import React, {useContext} from "react";
import {
  ChakraProvider,
  Box,
  Image,
  Text,
  Center
} from '@chakra-ui/react'
import logo from '../../assets/logo.png'
import { AppContext } from "../../context/AppContext";


export const Header = () => {
  const context = useContext(AppContext)
  return (
    <ChakraProvider>
      <Box padding='10px' display='flex' alignItems="center" backgroundColor='#fff'>
        <Image src={logo} alt='Dan Abramov' width='100px' borderRadius='full' />
        <Center flex='1'>
          <Text fontSize='30px'>Sistema Login</Text>
        </Center>
      </Box>
    </ChakraProvider>
  )


}