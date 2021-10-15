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


export default function CompanyProfile(props){

    var source = {
      link: icons.indeed,  
      alt: "Indeed", 
  }

    if(props.source !== undefined && props.source !== null )
        {switch (props.source.trim().toLowerCase()) {
            case 'indeed':
                source = {
                    link: icons.indeed,  
                    alt: "Indeed", 
                }
                break;
            case 'linkedin':
                  source = {
                    link: icons.linkedin,   
                    alt: "LinkedIn", 
                }
        }
    }
    return (        
        <Wrap >
        <Box>
          <Image src={props.avatar} objectFit="fit" borderRadius="full" h="50px" w="50px"></Image>
         {/*  <Avatar
            style={{marginRight: '10px', marginLeft: '10px'}}
            size={'md'}
            //src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
            src={props.avatar}
          /> */}
        </Box>
        <VStack h='100%' spacing={0} align="stretch" justify="center">
        <Text textStyle={'profileTitle'}>{props.name}</Text>
          <Flex  align='center' justify="space-between">
            <HStack>
              <Text textStyle={'profileContent'} color='kalooteBlue.100'>{props.jobs} <span style={{color: 'black'}}> job posts</span></Text>
            </HStack>
          </Flex>
          <Wrap>             
            <HStack align='center' mt={'2px'}>
              <Text textStyle={'profileContent'}>More jobs on </Text>
              <Box >
                <Tooltip hasArrow label={source.alt} placement="top" bg="white" color="black">
                  <Image src={source.link} h="15px" w="auto"></Image>
                </Tooltip>
              </Box>
            </HStack>
          </Wrap>
          
        </VStack>
      </Wrap>
    )

}