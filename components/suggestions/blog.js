import Link from 'next/link'
import {
    Button,
    Avatar,
    Box,
    Flex,
    HStack,
    Image,
    VStack,
    Text,
    Wrap,    
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Textarea,
    ModalCloseButton
  } from '@chakra-ui/react';
  //import {Editor, EditorState} from 'draft-js'
import { useState } from 'react';
import {icons} from '../../data/iconLinks.js'


const videoIcon = {
    link: icons.video, 
    alt: "Video", 
}
const blogIcon = {
    link: icons.blog, 
    alt: "Blog", 
}
const wikihowIcon = {
    link: icons.wikihow, 
    alt: "WikiHow", 
}

export default function BlogSuggestion(props){
    const { isOpen, onOpen, onClose } = useDisclosure()
    //const [editorState, setEditorState] = useState(()=> EditorState.createEmpty())
    const icon = (props.type === "video")? videoIcon: ((props.type === "blog")? blogIcon: wikihowIcon)

    return (        
          <VStack align="stretch" justify="left" >
                <Wrap justify="space-between" >
                    <HStack justify="left" /* w={['100%','100%','80%','80%']} */>
                        <Box mr={2}>
                            <Image src={icon.link} alt={icon.alt} h="15px" w="15px"></Image>
                        </Box>
                        <Text textStyle={'subContentBold'} style={{cursor: 'pointer'}} /* w={['100%','100%','80%','80%']} */ onClick={onOpen} >
                            {props.title}
                        </Text>
                    </HStack>
                    <HStack justify='left'>
                        <HStack /* w={'50%'} */ mr={1}>
                            <Box>
                                <Image src={icons.view} h="15px" w="15px"></Image>
                            </Box>
                            <Text textStyle={'subContent'}>
                                {props.views}
                            </Text>
                        </HStack>
                        <HStack >
                            <Box>
                                <Image src={icons.like} h="15px" w="15px"></Image>
                            </Box>
                            <Text textStyle={'subContent'}>
                                {props.likes}
                            </Text>
                        </HStack>
                    </HStack>
                </Wrap>
                {(props.name !== undefined && props.name !== null && props.name !== '') && <Text textStyle={'profileSubContent'}>
                    Suggested by  <Text color="kalooteBlue.100" fontWeight='300' as="i" style={{cursor: 'pointer'}}>{props.name}</Text>
                </Text>} 
                
                <Modal isOpen={isOpen} onClose={onClose} size='3xl'>
                    <ModalOverlay />
                    <ModalContent >
                        <ModalHeader bg='kalooteBlue.100' color='white'><Text isTruncated w={"85%"} fontSize={["sm", "md", "md", "md" ]}>{props.title}</Text></ModalHeader>
                        <ModalCloseButton color='white'/>
                        <ModalBody>
                            <Box>
                                <VStack align="stretch" justify="center" align-content="center" spacing={4}>
                                    <HStack justify="right">
                                        <Box>
                                            <Image src={icons.report} alt='Report This Suggestion' h="20px" w="20px"></Image>
                                        </Box>
                                    </HStack>
                                    <Wrap w={['100%', '100%', '90%', '90%']} justify='space-between' align='center' > 
                                        <VStack align="stretch" justify='left'  w={['78%','78%','70%','70%']}>
                                            <Text textStyle={'subContentBold'} style={{cursor: 'pointer'}} >
                                                {props.title}
                                            </Text>
                                            <HStack justify="left">
                                                {(props.author !== undefined && props.author !== null) && <Text textStyle={'subContent'}>
                                                    Author:  <Text color="black" as="b" style={{cursor: 'pointer'}}>{props.author}</Text>
                                                </Text>}
                                            </HStack>
                                            <HStack justify="left">
                                                {(props.name !== undefined && props.name !== null) && <Text textStyle={'subContent'}>
                                                    Suggested by  <Text color="kalooteBlue.100" as="u" style={{cursor: 'pointer'}}>{props.name}</Text>
                                                </Text>}  
                                            </HStack>
                                        </VStack>
                                        <a target="_blank" href={props.link} rel="noopener noreferrer">
                                            <Wrap borderRadius={'md'} p={2} bg="kalooteBlue.100" color='white' fontSize={["10px", "md", "md", "md" ]} ><Text >View</Text> <Text>Content</Text></Wrap>
                                        </a>
                                    </Wrap>
                                
                                    <HStack justify='left'>
                                        <HStack mr={3}>
                                            <Box>
                                                <Image src={icons.view} h="15px" w="15px"></Image>
                                            </Box>
                                            <Text textStyle={'subContent'}>
                                                {props.views}
                                            </Text>
                                        </HStack>
                                        <HStack >
                                            <Box>
                                                <Image src={icons.like} h="15px" w="15px"></Image>
                                            </Box>
                                            <Text textStyle={'subContent'}>
                                                {props.likes}
                                            </Text>
                                        </HStack>
                                    </HStack>
                                    <hr
                                        style={{
                                            color: "lightgray",
                                            backgroundColor: "lightgray",
                                            height: 0.5,
                                            marginTop: "10px",
                                            marginBottom: "10px",
                                        }}
                                    />
                                    <Box borderRadius='md' p="10px"  h={['60vh','60vh','58vh','58vh']} mb={4} bg='#F8F8F8'>
                                        <VStack align="stretch" justify="center" align-content="center" spacing={3}>
                                            <Text textStyle={'h3eb'}>Comments (2)</Text>
                                            <VStack align="stretch" justify="center" align-content="center" maxH={['34vh','34vh','32vh','32vh']} spacing={2} style={{padding: '10px', overflowX: 'hidden', overflowY: 'auto'}}>
                                                <VStack align="stretch" justify="left" align-content="center" spacing={1}>
                                                    <HStack justify='left' >                                            
                                                        <Box>
                                                            <Image src={icons.avatarm} h="20px" w="20px"></Image>
                                                        </Box>
                                                        <Text textStyle={'profileTitle'}>@Tony</Text>
                                                        <Text textStyle={'profileSubContent'}>14 min</Text>
                                                    </HStack>
                                                    <Wrap >
                                                        <Text textStyle={'profileContent'}>
                                                        That&apos;s a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback
                                                        </Text>
                                                    </Wrap>
                                                </VStack>

                                                <VStack align="stretch" justify="left" align-content="center" spacing={1}>
                                                    <HStack justify='left' >                                            
                                                        <Box>
                                                            <Image src={icons.avatarw} h="20px" w="20px"></Image>
                                                        </Box>
                                                        <Text textStyle={'profileTitle'}>@Abla</Text>
                                                        <Text textStyle={'profileSubContent'}>2 Hours</Text>
                                                    </HStack>
                                                    <Wrap >
                                                        <Text textStyle={'profileContent'}>
                                                        That&apos;s a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback
                                                        </Text>
                                                    </Wrap>
                                                </VStack>
                                                <VStack align="stretch" justify="left" align-content="center" spacing={1}>
                                                    <HStack justify='left' >                                            
                                                        <Box>
                                                            <Image src={icons.avatarm} h="20px" w="20px"></Image>
                                                        </Box>
                                                        <Text textStyle={'profileTitle'}>@Tony</Text>
                                                        <Text textStyle={'profileSubContent'}>14 min</Text>
                                                    </HStack>
                                                    <Wrap >
                                                        <Text textStyle={'profileContent'}>
                                                        That&apos;s a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback
                                                        </Text>
                                                    </Wrap>
                                                </VStack>

                                                <VStack align="stretch" justify="left" align-content="center" spacing={1}>
                                                    <HStack justify='left' >                                            
                                                        <Box>
                                                            <Image src={icons.avatarw} h="20px" w="20px"></Image>
                                                        </Box>
                                                        <Text textStyle={'profileTitle'}>@Abla</Text>
                                                        <Text textStyle={'profileSubContent'}>2 Hours</Text>
                                                    </HStack>
                                                    <Wrap >
                                                        <Text textStyle={'profileContent'}>
                                                        That&apos;s a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback
                                                        </Text>
                                                    </Wrap>
                                                </VStack>
                                            </VStack>
                                            <Textarea placeholder="Type your comment here..." bg="white" />
                                            <Button bg="kalooteBlue.100" color='white' fontSize={["10px", "md", "md", "md" ]} w={['16%','16%','25%','25%']}>Send</Button>

                                        </VStack>
                                    </Box>
                                    <Box h="2vh"></Box>
                                </VStack>
                            </Box>
                        </ModalBody>
                    </ModalContent>
            </Modal>         
          </VStack>
    )

}