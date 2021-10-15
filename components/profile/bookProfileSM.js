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


export default function BookProfileSM(props){

   
    return (        
      <Wrap justify="left" >
        <Box w='10%'>
          <Image src={(props.avatar !== undefined && props.avatar !== null && props.avatar !== '')?props.avatar:icons.book} 
            objectFit="fit" 
            borderRadius="2xl" h="50px" w="50px" ></Image>
          {/* <Avatar
            style={{marginRight: '10px', marginLeft: '10px'}}
            size={'md'}
            //src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
            src={(props.avatar !== undefined && props.avatar !== null && props.avatar !== '')?props.avatar:icons.book}
          /> */}
        </Box>
        <Wrap justify="left" spacing={1} w="85%" align="stretch">
              <a target="_blank" href={props.link} rel="noopener noreferrer">
                <Text textStyle={'profileTitle'} color="black" noOfLines={2} w={['100%', '100%', '100%', '100%']}>{props.title} </Text>
              </a>
              <HStack justify="left" w="100%">
                {(props.author !== undefined && props.author !== null && props.author !== '') && <Text textStyle={'profileContent'} noOfLines={1} mr={4}>{props.author} </Text>}
                
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
      </Wrap>
    )

}