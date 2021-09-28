import {
  Box,
  VStack,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Card(props) {
  return (
    <Box 
    bg={useColorModeValue('white', 'gray.900')}
    boxShadow={'2xl'}
    rounded={'xl'}
    py='15px'
    px={(props.cPx === undefined|| props.cPx===null)?'15px': props.cPx}
    w={props.cw}
    h={["100%", "100%", props.ch, props.ch]}
    overflow={'hidden'}>
      <Box h="100%" fontSize={["3.8vw", "2.3vw", '1vw', "0.85vw"]}>
            { props.children }
      </Box>
    </Box>
  );
}