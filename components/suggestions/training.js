//import Image from 'next/image'
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
          <Wrap justify="space-between"  w={'100%'} spacing={1}>
                <Text textStyle={'subContentBold'} fontWeight='450' style={{cursor: 'pointer'}} noOfLines={2} w={"80%"}>
                    <a target="_blank" href={props.link} rel="noopener noreferrer">{props.title}</a>
                </Text>   
                <HStack spacing={0} align="flex-end">
                    <Box mr={1}>
                        <Image src={icons.like} alt='Likes' height="auto" width="15px"></Image>
                    </Box>
                    <Text textStyle={'profileSubContent'}>
                        {props.likes}
                    </Text> 
                </HStack>
                <Wrap justify="space-between" align="flex-end" w={'100%'} color='KalooteGray.200'>
                    
                    <Text textStyle={'profileSubContent'}>
                        <Text as="i" fontWeight="300" style={{cursor: 'pointer'}}>
                            {props.name}
                        </Text>                    
                    </Text>   
                        &bull;  
                    <Text textStyle={'profileSubContent'} fontWeight='300'>
                        ${props.price}
                    </Text>    
                        &bull;  
                    <HStack justify="center" spacing={0}>
                        <Box>
                            <Image src={icons.clock} alt='Duration' height="auto" width="25px"></Image>
                        </Box>
                        <Text textStyle={'profileSubContent'} style={{cursor: 'pointer'}} w={'100%'}>
                            {props.duration}
                        </Text>
                    </HStack>                                 
                    
                </Wrap>               
          </Wrap>
    )

}