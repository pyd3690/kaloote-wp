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
          <VStack align="stretch"  w={'85%'}>
                <Wrap justify="left" >
                    <Text textStyle={'subContentBold'} style={{cursor: 'pointer'}} w={'100%'} isTruncated>
                        {props.title}
                    </Text>
                </Wrap>
                <Wrap justify="space-between">
                    <Text textStyle={'profileContent'}>
                        @ . 
                        <Text color="kalooteBlue.100" as="u" style={{cursor: 'pointer'}}>
                            <a target="_blank" href={props.link} rel="noopener noreferrer">
                                {props.name}
                            </a>
                        </Text> 
                        . ${props.price}
                    </Text>
                    <Text textStyle={'profileContent'}>
                        {props.likes} likes
                    </Text>                    
                    <Text textStyle={'profileContent'} style={{cursor: 'pointer'}} w={'100%'}>
                        Duration: {props.duration}
                    </Text>
                </Wrap>               
          </VStack>
    )

}