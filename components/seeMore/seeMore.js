import { React } from 'react';
import { 
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

    return (
        <div>
            <Text color='kalooteBlue.100' 
                    onClick={onOpen}
                    style={{textDecoration: 'underline', textAlign: 'right', cursor: 'pointer'}}>See More</Text>
            
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>{props.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box>{ props.children }</Box>
                </ModalBody>
        
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                    </Button>
                </ModalFooter>
                </ModalContent>
          </Modal>
        </div>
    )
}
