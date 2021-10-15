import React, { useState, useMemo } from 'react';
import Pagination from '../pagination/Pagination.js';

import { 
    HStack, VStack, Center, Circle,
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

export default function SeeMoreWindowC(props){
    const { isOpen, onOpen, onClose } = useDisclosure()
    let PageSize = (props.pageSize !== undefined && props.pageSize !== null && props.pageSize !== '')?props.pageSize:8
    //var pageNumbers = [ "2", "3"]
    const [currentPage, setCurrentPage] = useState(1);
    const children = React.Children.toArray(props.children)
    const numberOfPages = Math.ceil(children.length/PageSize)
    //console.log("Seemore total: ", children.length)

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return children.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    //console.log("seemore displayed: ", currentTableData.length)
    return (
        <div style={{padding: '10px'}}>
            <Text color='kalooteBlue.100' 
                    onClick={onOpen}
                    style={{textDecoration: 'underline', textAlign: 'right', cursor: 'pointer'}}>See More</Text>
            
            <Modal isOpen={isOpen} onClose={onClose} size='5xl' /*h={["80vh", "70vh", "60vh", "50vh"]}*/>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader bg='kalooteBlue.100' color='white'><Text isTruncated w={"85%"} fontSize={["sm", "md", "md", "lg" ]}>{props.title} ({children.length} found)</Text></ModalHeader>
                    <ModalCloseButton color='white'/>
                    <ModalBody>
                        {/* <Text textStyle="profileSubContent" m={3}>
                            {currentTableData.length} displayed on this page
                        </Text> */}
                        <VStack style={{padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} spacing={5}
                             h="auto"
                             //minH = {["62vh", "60vh", "55vh", "55vh"]} 
                             mt={2} w={["100%","100%","90%", "90%"]} 
                             align={'strech'}
                             
                             //justify={'center'}
                             >
                            <HStack justify="space-between" align="flex-start" >
                                {
                                    (Array.from(Array(3).keys())).map((i, k) => 
                                        <VStack key={k} align="flex-start" spacing={3} >
                                            {
                                                (i==0)?(currentTableData.slice(i*5, (i+1)*5)):(currentTableData.slice(i*5 + 1, (i+1)*5))
                                            }
                                        </VStack>
                                    )
                                }   
                            </HStack>  
                            { /*currentTableData props.children*/ }
                        </VStack>
                    </ModalBody>
            
                    <ModalFooter >
                        <HStack w="100%" justify="center">
                            <Pagination
                                //className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={children.length}
                                pageSize={PageSize}
                                onPageChange={page => {
                                    //console.log("Current Page:", currentPage);
                                    if(page > numberOfPages)
                                        {
                                            page = numberOfPages;
                                            setCurrentPage(numberOfPages);
                                        }
                                    else if(page < 1)                                    
                                        {
                                            page = 1;
                                            setCurrentPage(1);
                                        }
                                    else
                                        {setCurrentPage(page);}
                                }}
                            />
                            {/* <Circle w="20px" h="20px" bg="kalooteBlue.100" color="white" fontSize="sm">
                                  1
                            </Circle>
                            {
                                pageNumbers.map((number,i) => 
                                <Circle key={i} w="20px" h="20px" bg="#F0F0F0" color="kalooteBlue.100" fontSize="sm">
                                  {number}
                                </Circle>)
                            } */}
                        </HStack>
                    </ModalFooter>
                </ModalContent>
          </Modal>
        </div>
    )
}
