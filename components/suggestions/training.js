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
import {icons} from '../../data/iconLinks.js'


export default function TrainingSuggestion(props){
    return (        
          <VStack align="stretch"  w={'90%'}>
                <Wrap justify="left" >
                    <Text textStyle={'subContentBold'} fontWeight='450' style={{cursor: 'pointer'}} w={'100%'} isTruncated>
                        <a target="_blank" href={props.link} rel="noopener noreferrer">{props.title}</a>
                    </Text>
                </Wrap>
                <Wrap justify="space-between">
                    <Text textStyle={'profileSubContent'}>
                        <Text as="u" color="kalooteBlue.100" style={{cursor: 'pointer'}}>
                            <a target="_blank" href={props.link} rel="noopener noreferrer">
                                {props.name}
                            </a>
                        </Text> 
                        
                    </Text>
                    <Text textStyle={'profileContent'} fontWeight='385'>
                        ${props.price}
                    </Text>
                    <HStack >
                        <Box>
                            <Image src={icons.like} alt='Duration' h="auto" w="15px"></Image>
                        </Box>
                        <Text textStyle={'profileSubContent'}>
                            {props.likes}
                        </Text> 
                    </HStack>
                    <HStack >
                        <Box>
                            <Image src={icons.clock} alt='Duration' h="auto" w="25px"></Image>
                        </Box>
                        <Text textStyle={'profileSubContent'} style={{cursor: 'pointer'}} w={'100%'}>
                            {props.duration}
                        </Text>
                    </HStack>
                                   
                    
                </Wrap>               
          </VStack>
    )

}