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
          <Wrap justify="space-between"  w={'100%'}>
                <Text textStyle={'subContentBold'} fontWeight='450' style={{cursor: 'pointer'}} noOfLines={2}>
                        <a target="_blank" href={props.link} rel="noopener noreferrer">{props.title}</a>
                    </Text>
                <Wrap justify="space-between">
                    
                    <Text textStyle={'profileSubContent'}>
                        <Text as="i" color="kalooteBlue.100" fontWeight="300" style={{cursor: 'pointer'}}>
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
                    <HStack justify="center">
                        <Box>
                            <Image src={icons.clock} alt='Duration' h="auto" w="25px"></Image>
                        </Box>
                        <Text textStyle={'profileSubContent'} style={{cursor: 'pointer'}} w={'100%'}>
                            {props.duration}
                        </Text>
                    </HStack>
                                   
                    
                </Wrap>               
          </Wrap>
    )

}