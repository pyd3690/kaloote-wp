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


export default function TrainingSuggestionSM(props){
    return (        
          <Wrap justify="space-between"  w={'100%'} spacing={0}>
                <Text textStyle={'subContentBold'} fontWeight='450' style={{cursor: 'pointer'}} noOfLines={2}>
                    <a target="_blank" href={props.link} rel="noopener noreferrer">{props.title}</a>
                </Text>
                <Wrap justify="space-between" align="flex-end" w={["100%","100%",'50%','45%']} color='KalooteGray.200' spacing={0}>
                    
                    <HStack spacing={0} w={["40%","40%",'20%','20%']}>
                        <Box mr={1}>
                            <Image src={icons.like} alt='Likes' height="auto" width="15px"></Image>
                        </Box>
                        <Text textStyle={'profileSubContent'}>
                            {props.likes}
                        </Text> 
                    </HStack>   
                    <Text textStyle={'profileSubContent'} w={["40%","40%",'20%','20%']}>
                        <Text as="i" fontWeight="300" style={{cursor: 'pointer'}}>
                            {props.name}
                        </Text>                    
                    </Text>   
                    <Text textStyle={'profileSubContent'} fontWeight='300' w={["40%","40%",'20%','20%']}>
                        ${props.price}
                    </Text> 
                    <HStack justify="center" spacing={0} w={["40%","40%",'20%','20%']}>
                        <Box >
                            <Image src={icons.clock} alt='Duration' height="auto" width="25px"></Image>
                        </Box>
                        <Text  textStyle={'profileSubContent'} style={{cursor: 'pointer'}} w={'100%'}>
                            {props.duration}
                        </Text>
                    </HStack>                                 
                    
                </Wrap>               
          </Wrap>
    )

}