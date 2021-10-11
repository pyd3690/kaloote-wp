import {
    Avatar,
    Box,
    Flex,
    HStack,
    Image,
    VStack,
    Tooltip,
    Text,
    Wrap,
  } from '@chakra-ui/react';
import {icons} from '../../data/iconLinks.js'


export default function BookProfile(props){

   
    return (        
        <HStack justify="left" >
        <Box>
          <Avatar
            style={{marginRight: '10px', marginLeft: '10px'}}
            size={'md'}
            //src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
            src={(props.avatar !== undefined && props.avatar !== null && props.avatar !== '')?props.avatar:icons.book}
          />
        </Box>
        <Wrap justify="space-between" spacing={1}>
              <a target="_blank" href={props.link} rel="noopener noreferrer">
                <Text textStyle={'profileTitle'} color="black" noOfLines={2}>{props.title} </Text>
              </a>
              <HStack justify="space-between" w="100%">
                {(props.author !== undefined && props.author !== null && props.author !== '') && <Text textStyle={'profileContent'} noOfLines={1}>{props.author} </Text>}
                
                <HStack spacing={0}>
                    <Box mr={1}>
                        <Image src={icons.like} alt='Likes' height="auto" width="15px"></Image>
                    </Box>
                    <Text textStyle={'profileSubContent'}>
                        {props.likes}
                    </Text> 
                </HStack> 
              </HStack> 
        </Wrap>
      </HStack>
    )

}