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
    Tooltip,
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
const podcastIcon = {
    link: icons.podcast,  
    alt: "Podcast", 
}

export default function BlogSuggestion(props){
    const { isOpen, onOpen, onClose } = useDisclosure()
    //const [editorState, setEditorState] = useState(()=> EditorState.createEmpty())
    var icon = {
        link: icons.resource,  
        alt: "Resource", 
    }

    if(props.type !== undefined && props.type !== null )
        {switch (props.type.toLowerCase()) {
            case 'blog':
                icon = blogIcon;
                break;
            case 'video':
                icon = videoIcon;
                break;
            case 'wikihow':
                icon = wikihowIcon;
                break;
            case 'podcast':
                icon = podcastIcon;
        }
    }

    return (        
          <VStack align="stretch" justify="left" spacing={0}>
                <Wrap justify="space-between" mb={1}>
                    <HStack justify="left"   >
                        {(props.type !== undefined && props.type !== null && props.type !== '') && <Box mr={2}>
                            <Tooltip hasArrow label={icon.alt} placement="top" bg="white" color="black">
                                <Image src={icon.link} alt={icon.alt} h="15px" w="15px"></Image>
                            </Tooltip>
                        </Box>}
                        <Text textStyle={'subContentBold'} style={{cursor: 'pointer'}} /*w={['100%','100%','100%','90%']} */  onClick={onOpen} isTruncated>
                            <Link href={"#" + props.title.replace(/\s/g, '-')}>{props.title}</Link>
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
                {(props.name !== undefined && props.name !== null && props.name !== '') && <Text textStyle={'suggested'} color='gray' mt={0}>
                    Suggested by  <Text fontWeight='300' as="i" style={{cursor: 'pointer'}}>{props.name}</Text>
                </Text>} 
                
                <Modal isOpen={isOpen} onClose={onClose} size='3xl' h='auto' id={props.title.replace(/\s/g, '-')}>
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
                                    <HStack w={['100%', '100%', '100%', '100%']} justify='space-between' align='flex-end' > 
                                        <VStack align="stretch" justify='left'  w={['78%','78%','70%','70%']}>
                                            <Text textStyle={'subContentBold'} style={{cursor: 'pointer'}} >
                                                {props.title}
                                            </Text>
                                            <HStack justify="left">
                                                {(props.author !== undefined && props.author !== null) && <Text textStyle={'subContent'}>
                                                    Author:  <Text color="black" as="b" style={{cursor: 'pointer'}}>{(props.author === '')?"---":props.author}</Text>
                                                </Text>}
                                            </HStack>
                                            <HStack justify="left">
                                                {(props.name !== undefined && props.name !== null) && <Text textStyle={'suggested'} color='gray'>
                                                    Suggested by  <Text as="i" fontWeight='300' style={{cursor: 'pointer'}}>{props.name}</Text>
                                                </Text>}  
                                            </HStack>                                
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
                                        </VStack>
                                        <a target="_blank" href={props.link} rel="noopener noreferrer">
                                            <Wrap borderRadius={'md'} p={2} bg="kalooteBlue.100" color='white' justify="center" fontSize={["10px", "md", "md", "md" ]} ><Text >View</Text> <Text>Content</Text></Wrap>
                                        </a>
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
                                    <Box borderRadius='md' p="10px"  h="auto" mb={4} bg='#F8F8F8'>
                                        <VStack align="stretch" justify="center" align-content="center" spacing={3}>
                                            <Text textStyle={'h3eb'}>Comments (2)</Text>
                                            <VStack align="stretch" justify="center" align-content="center" maxH={['35vh','35vh','33vh','33vh']} spacing={1} style={{padding: '10px', overflowX: 'hidden', overflowY: 'auto'}}>
                                                <VStack align="stretch" justify="left" align-content="center" spacing={1} mt={2}>
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
                                    <Box h="1vh"></Box>
                                </VStack>
                            </Box>
                        </ModalBody>
                    </ModalContent>
            </Modal>         
          </VStack>
    )

}