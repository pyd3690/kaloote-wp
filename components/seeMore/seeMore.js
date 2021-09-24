import { React } from 'react';
import { 
    HStack, Center, Circle,
    Button,
    Text,
    Box,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton } from "@chakra-ui/react"

export default function SeeMoreWindow(props){
    const { isOpen, onOpen, onClose } = useDisclosure()
    var pageNumbers = [ "2", "3"]
    return (
        <div>
            <Text color='kalooteBlue.100' 
                    onClick={onOpen}
                    style={{textDecoration: 'underline', textAlign: 'right', cursor: 'pointer'}}>See More</Text>
            
            <Modal isOpen={isOpen} onClose={onClose} size='3xl'>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader bg='kalooteBlue.100' color='white'><Text isTruncated w={"85%"} fontSize={["sm", "md", "md", "md" ]}>{props.title}</Text></ModalHeader>
                    <ModalCloseButton color='white'/>
                    <ModalBody>
                        <Box>{ props.children }</Box>
                    </ModalBody>
            
                    <ModalFooter >
                        <HStack w="100%" justify="center">
                            <Circle w="20px" h="20px" bg="kalooteBlue.100" color="white" fontSize="sm">
                                  1
                            </Circle>
                            {
                                pageNumbers.map((number,i) => 
                                <Circle key={i} w="20px" h="20px" bg="#F0F0F0" color="kalooteBlue.100" fontSize="sm">
                                  {number}
                                </Circle>)
                            }
                        </HStack>
                    </ModalFooter>
                </ModalContent>
          </Modal>
        </div>
    )
}
