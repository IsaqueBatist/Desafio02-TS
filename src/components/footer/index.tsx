import { 
  ChakraProvider,
  Box,
  Text
} from "@chakra-ui/react";
import React from "react";
export const Footer = () => {
  return (
    <ChakraProvider>
      <Box padding='10px' display='flex' alignItems="center" justifyContent='center' backgroundColor='#fff'>
        <Text opacity='0.8'>
          &copy; Desevolvido por Isaque
        </Text>
      </Box>
    </ChakraProvider>
  )


}