import React from 'react';
import { IButton } from './type';
import { ChakraProvider, Button } from '@chakra-ui/react';

export const MyButon = ({ onClick, title }: IButton) => {
  return (
    <ChakraProvider>
      <Button colorScheme='teal' size='sm' width='100%' marginTop='10px' onClick={onClick}>
        {title}
      </Button>
    </ChakraProvider>
  );
}