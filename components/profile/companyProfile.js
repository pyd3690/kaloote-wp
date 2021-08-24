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

export default function CompanyProfile(props){
    return (        
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
        <Text style={{fontSize: '16px', fontWeight: '550'}}>{props.name}</Text>
          <Flex  align='center' justify="space-between">
            <HStack>
              <Text style={{fontSize: '13px', fontWeight: '400'}} color='kalooteBlue.100'>{props.jobs} <span style={{color: 'black'}}> job posts</span></Text>
            </HStack>
          </Flex>
          <Wrap>             
            <HStack align='center'>
              <Text style={{fontSize: '13px', fontWeight: '400'}}>More jobs on </Text>
              <Box>
                <Image src={props.source} h="20px" w="auto"></Image>
              </Box>
            </HStack>
          </Wrap>
          
        </VStack>
      </HStack>
    )

}