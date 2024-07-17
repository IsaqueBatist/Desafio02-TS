import React from "react";
import {
  ChakraProvider,
  Box,
  Image,
  Text,
  Center
} from '@chakra-ui/react'
import logo from '../../assets/logo.png'

export const Header = () => {
  return (
    <ChakraProvider>
      <Box padding='10px' display='flex' alignItems="center">
        <Image src={logo} alt='Dan Abramov' width='100px' borderRadius='full' />
        <Center flex='1'>
          <Text fontSize='30px'>Sistema Login</Text>
        </Center>
      </Box>
    </ChakraProvider>
  )


}