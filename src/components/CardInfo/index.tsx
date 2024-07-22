import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { ICardInfo } from './type';

const CardInfo = ({ mainContent, content }: ICardInfo) => {
  return (
    <Box backgroundColor="#fff" minHeight='120px' padding={8} borderRadius="25px">
      <Text fontSize='2xl' fontWeight='bold'> {mainContent}</Text>
      <Text fontSize='xl'>{content}</Text>
    </Box>
  );
}
export default CardInfo