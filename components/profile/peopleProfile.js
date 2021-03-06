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
import PeopleProfileSM from './peopleProfileSeeMore.js'

export default function PeopleProfile(props){
    return (        
      <HStack p={2}> 
        <Avatar
          style={{marginRight: '10px', marginLeft: '10px'}}
          size={['md']}
          
          //src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
          src={props.avatar}
        />
      <VStack h='auto' spacing={0} align="stretch" justify="center" >
      <Flex  align='center' justify="space-between">
          <Wrap justify="space-between" w='100%' mb={1} align="flex-end">
            <Text textStyle={'profileTitle'}>{props.name}</Text>
            <HStack justify="center" align="flex-end">
              <Box>
                  <Image src={icons.like} alt='Duration' h="auto" w="15px"></Image>
              </Box>
              <Text textStyle={'profileSubContent'} >{props.likes}  </Text>
            </HStack>
          </Wrap>
        </Flex>
        <Wrap justify="space-between" align='flex-end' >
            <Text textStyle={'profileContent'} noOfLines={[4,4,4,2]} w={["100%", "100%", "70%", "65%"]} >
              {props.title}
            </Text>
          <HStack align='flex-end'> 
            <a target="_blank" href={props.linkedIn} rel="noopener noreferrer">
              <Box>
                <Image src={icons.linkedin} h="12px" w="12px"></Image>
              </Box>
            </a>
            <a target="_blank" href={props.twitter} rel="noopener noreferrer">
              <Box>
                <Image src={icons.twitter} h="12px" w="12px"></Image>
              </Box>
            </a>
          </HStack>
        </Wrap>


        {/* <Flex  align='center' justify="space-between">
          <HStack>
            <a target="_blank" href={props.linkedIn} rel="noopener noreferrer">
              <Box>
                <Image src={icons.linkedin} h="12px" w="12px"></Image>
              </Box>
            </a>
            <a target="_blank" href={props.twitter} rel="noopener noreferrer">
              <Box>
                <Image src={icons.twitter} h="12px" w="12px"></Image>
              </Box>
            </a>
          </HStack>
        </Flex>
        <Wrap>
            <Text textStyle={'profileContent'} noOfLines={2}>
              {props.title}
            </Text>
        </Wrap> */}
        
      </VStack>
    </HStack>
    )

}/* 

<HStack mb={3}>
        <Box>
          <Avatar
            style={{marginRight: '10px', marginLeft: '10px'}}
            size={'md'}
            //src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
            src={props.avatar}
          />
        </Box>
        <VStack h='100%' spacing={0} align="stretch" justify="center">
          <Flex  align='center' justify="space-between">
            <HStack>
              <Text style={{fontSize: '16px', fontWeight: '450'}}>{props.name}</Text>
              <Box>
                <Image src='https://res.cloudinary.com/ignitouch/image/upload/v1629761865/Kaloote/linkedin_yzu9nm.png' h="15px" w="15px"></Image>
              </Box>
              <Box>
                <Image src='https://res.cloudinary.com/ignitouch/image/upload/v1629761865/Kaloote/twitter_xxfd1j.png' h="15px" w="15px"></Image>
              </Box>
            </HStack>
            <Text style={{fontSize: '11px'}} >{props.likes} Likes</Text>
          </Flex>
          <Wrap>
              <Text style={{fontSize: '12px', fontWeight: '250',}}>
                {props.title}
              </Text>
          </Wrap>
          
        </VStack>
      </HStack> */