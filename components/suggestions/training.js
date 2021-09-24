import {
    Avatar,
    Box,
    Flex,
    HStack,
    Image,
    VStack,
    Text,
    Wrap,
  } from '@chakra-ui/react';

export default function TrainingSuggestion(props){
    return (        
          <VStack  mb={4} align="stretch" justify="left" w={'75%'}>
                <Wrap justify="left" >
                    <Text textStyle={'subContentBold'} style={{cursor: 'pointer'}} w={'100%'}>
                        {props.title}
                    </Text>
                </Wrap>
                <Wrap justify="space-between">
                    <Text textStyle={'profileContent'}>
                        @ . <Text color="kalooteBlue.100" as="u" style={{cursor: 'pointer'}}>{props.name}</Text> . ${props.price}
                    </Text>
                    <Text textStyle={'profileContent'}>
                        {props.likes} likes
                    </Text>
                </Wrap>               
          </VStack>
    )

}