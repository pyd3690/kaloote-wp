import {
  Box,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Card(props) {
  return (
    <Box 
    bg={useColorModeValue('white', 'gray.900')}
    boxShadow={'2xl'}
    rounded={'xl'}
    p={'15px'}
    w={props.cw}
    h={props.ch}
    overflow={'hidden'}>
      <Box h="100%">
            { props.children }
      </Box>
    </Box>
  );
}