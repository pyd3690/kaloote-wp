import Head from 'next/head'
import Link from 'next/link'
//import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import Card from '../../../components/card/card.js'
import PeopleProfile from '../../../components/profile/peopleProfile.js'
import CompanyProfile from '../../../components/profile/companyProfile.js'
import CoachingProfile from '../../../components/profile/coachingProfile.js'
import BookProfile from '../../../components/profile/bookProfile.js'
import BookProfileSM from '../../../components/profile/bookProfileSM.js'
import CoachingProfileSM from '../../../components/profile/coachingProfileSM.js'
import {icons} from '../../../data/iconLinks.js'
import {productManagementData} from '../../../data/productManagement.js'
import TabsMenu from '../../../components/tabbar/tabbar.js'
import SeeMoreWindow from '../../../components/seeMore/seeMore.js'
import BlogSuggestion from '../../../components/suggestions/blog.js'
import BlogSuggestionSM from '../../../components/suggestions/blogSM.js'
//import BestBlogsuggestion from '../../../components/suggestions/training.js'
import {Avatar,
        Text, 
        Image, 
        Box, 
        //Tabs, TabList, TabPanels, Tab, TabPanel,
        Flex,         
        Center,
        Grid, GridItem, 
        WrapItem, Wrap,
        Tooltip,
        useDisclosure,
        HStack, VStack} from '@chakra-ui/react';

const skills = ['Empathy', 'Leadership', 'Curiosity', 'Problem Solving', 'Communication']
const roleData = {
  name: productManagementData["name"],
  industry: productManagementData["industry"],
  summary: productManagementData["summary"],
  coaching: productManagementData["interview"]["coaching"],
  books: productManagementData["interview"]["books"], 
}
var roleSlug = "product-management"

export default function Role() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Kaloote - Product Management Career Path</title>
        <meta name="description" content="As a Product Manager you will be tasked with creating products or features and sheperding them from inception to implementation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{minHeight: '90vh', height: 'auto', backgroundColor: '#f1f1f6'}}>
        <Box /* className={styles.dataContainer} */ w={['100%', "95%", "85%", "80%"]} style={{
                    marginTop: '40px', 
                    height: 'auto', 
                    marginLeft: 'auto', 
                    marginRight: 'auto', 
                     }}>
          
          <Text color='kalooteBlue.100' style={{fontWeight: 'bold', paddingLeft: '25px', paddingRight: '25px'}}>&#60; <a style={{textDecoration: 'none'}}>Back</a></Text>
          
          <div style={{backgroundColor: '#f1f1f6',
                      borderRadius: '10px',                       
                      padding: '25px', 
                      marginTop: '10px',
                      height: 'auto',
                      //height: '150vh',
                      }}>
            
            <Flex  w={['95%', "67%", "67%"]} alignItems={'center'} justifyContent={'space-between'} mb={'15px'}>
              <Text textStyle="h2">{roleData["name"]}</Text>
              <Text textStyle="h2">{roleData['industry']}</Text>
            </Flex>
            
            <Grid
              h="100%"
              templateRows="repeat(2, 0.75fr)"
              templateColumns="repeat(10, 1fr)"
              gap={4}
              autoFlow={['row', 'row', 'column', 'column']}
            >
              <GridItem rowSpan={[1,1,1,1]} colSpan={[10, 10, 7, 7]} /* colSpan={7} */ >
                <Card cw="100%" ch="100%" >
                  <VStack h={'auto'} align="stretch" justify="space-between">
                    <HStack h='auto'  align="center" fontSize={["3vw", "2.5vw", '2vw', "0.75vw"]} id="roleSummarySection">
                      <Box w={'45%'} h={'auto'} justify="center" align="center">
                        <Image 
                          id="roleImage"
                          src={icons.pmrole} 
                          objectFit="cover"
                        />
                      </Box>
  
                      <VStack h='auto' spacing={5} align="stretch" justify="center" p={["15px", "15px", "10px", "10px"]}
                        id="roleSummarydata">
                        <HStack spacing={4} > 
                          <Box>
                            <Image src={icons.salary} h="25px" w="25px"></Image>
                          </Box> 
                          <Text id="roleSalary" textStyle="subContent">${roleData["summary"]["salary"][0] + " - " + roleData["summary"]["salary"][1]}</Text>
                        </HStack>
                        <HStack spacing={4} > 
                          <Box>
                            <Image src={icons.workload} h="25px" w="25px"></Image>
                          </Box> 
                          <Text id="roleWorkload" textStyle="subContent">{roleData["summary"]["workload"]} Hrs/Week</Text>
                        </HStack>
                        <HStack spacing={4} > 
                          <Box>
                            <Image src={icons.travel} h="25px" w="25px"></Image>
                          </Box> 
                          <Text id="roleTravel" textStyle="subContent">{roleData["summary"]["travel"]} Travel Requirements</Text>
                        </HStack>
                        <HStack spacing={4} > 
                          <Box>
                            <Image src={icons.steps} h="25px" w="25px"></Image>
                          </Box> 
                          <Text id="roleSteps"  textStyle="subContent" color='kalooteBlue.100' style={{textDecoration: 'underline'}}>Steps to become a PM</Text>
                        </HStack>
                      </VStack>
                    </HStack>
  
                    <Box mt={'5px'}>
                      <TabsMenu selection={5} isIndex={false} />
                    </Box> 
                  </VStack>
                </Card>
              </GridItem>             
              
              <GridItem rowSpan={[1,1,1,1]} /* rowSpan={2} */ /* colSpan={7} */ colSpan={[10, 10, 7, 7]}>
                <Card cw="100%" ch="100%">                  
                  <Text textStyle='h3' my={3}>Interview Resources</Text>
                  <hr
                      style={{
                          color: "lightgray",
                          backgroundColor: "lightgray",
                          height: 0.5,
                          marginTop: "10px",
                          marginBottom: "10px",
                      }}
                  />
                  <Wrap spacing={5} align="center" w={["100%","100%","50%","50%"]} justify="center" id="interviewMenu" h={["auto","auto","70%","70%"]} mt="10%" mx="auto">
                      
                      <Link href={"/interview-guide/tips/" + roleSlug}>
                        <VStack w={"40%"} justify="center" spacing={2} style={{cursor: 'pointer'}}>
                          <HStack justify="left" w="100%">
                              <Tooltip hasArrow label={"Interview Tips"} placement="top" bg="white" color="black">
                                  <Image src={icons.tips} alt={"Interview Tips"} h="20px" w="20px"></Image>
                              </Tooltip>
                              <Text textStyle="profileTitle">Tips</Text>
                          </HStack>
                          <Text textStyle="profileSubContent">
                          Explore thousands of real interview questions asked by companies
                          </Text>
                        </VStack>
                      </Link>
                      
                      <Link  href={"/interview-guide/process/" + roleSlug}>
                        <VStack w={"40%"} justify="center" spacing={2} style={{cursor: 'pointer'}}>
                          <HStack justify="left" w="100%">
                              <Tooltip hasArrow label={"Interview Process"} placement="top" bg="white" color="black">
                                  <Image src={icons.process} alt={"Interview Process"} h="20px" w="20px"></Image>
                              </Tooltip>
                              <Text textStyle="profileTitle">Process</Text>
                          </HStack>
                          <Text textStyle="profileSubContent">
                          Explore thousands of real interview questions asked by companies
                          </Text>
                        </VStack>
                      </Link>
                      
                      <Link href={"/interview-guide/studyguides/" + roleSlug}>
                        <VStack w={"40%"} justify="center" spacing={2} style={{cursor: 'pointer'}}>
                          <HStack justify="left" w="100%">
                              <Tooltip hasArrow label={"Interview Study Guide"} placement="top" bg="white" color="black">
                                  <Image src={icons.studyGuide} alt={"Interview Study Guide"} h="20px" w="20px"></Image>
                              </Tooltip>
                              <Text textStyle="profileTitle">Study Guide</Text>
                          </HStack>
                          <Text textStyle="profileSubContent">
                          Explore thousands of real interview questions asked by companies
                          </Text>
                        </VStack>
                      </Link>
                      
                      <Link href={"/interview-guide/questions/" + roleSlug}>
                        <VStack w={"40%"} justify="center" spacing={2} style={{cursor: 'pointer'}}>
                          <HStack justify="left" w="100%">
                              <Tooltip hasArrow label={"Interview Questions"} placement="top" bg="white" color="black">
                                  <Image src={icons.questions} alt={"Interview Question"} h="20px" w="20px"></Image>
                              </Tooltip>
                              <Text textStyle="profileTitle">Questions</Text>
                          </HStack>
                          <Text textStyle="profileSubContent">
                          Explore thousands of real interview questions asked by companies
                          </Text>
                        </VStack>
                      </Link>
                  </Wrap>
                </Card>
              </GridItem>           
              
              <GridItem rowSpan={[1,1, 1,1]} /* rowSpan={2} */ /* colSpan={7} */ colSpan={[10, 10, 7, 7]}>
                <Card cw="100%" ch="100%">                  
                  <Text textStyle='h3' my={3}>Interview Prep Platforms</Text>
                  <hr
                      style={{
                          color: "lightgray",
                          backgroundColor: "lightgray",
                          height: 0.5,
                          marginTop: "10px",
                          marginBottom: "10px",
                      }}
                  />
                  <VStack w={["100%", "100%", "90%", "90%"]} p='10px' style={{overflowX: 'hidden', overflowY: 'auto'}} h={["70%", "70%", "75%", "70%"]} mt={4}
                    align={'stretch'}
                    spacing={4}
                  >
                    {
                      roleData["coaching"].slice(0, 3).map((platform, i)=>
                      <CoachingProfile key={i} 
                          name={platform.name} 
                          pricem={platform.pricem}
                          pricey={platform.pricey}
                          likes = {platform.likes}
                          avatar = {platform.avatar}
                          link = {platform.link}
                      />
                      )
                    }
                  </VStack>
                                        
                  <SeeMoreWindow title='Interview Prep Platforms'>        
                      {
                        roleData["coaching"].map((platform, i)=>
                        <CoachingProfileSM key={i} 
                            name={platform.name} 
                            pricem={platform.pricem}
                            pricey={platform.pricey}
                            likes = {platform.likes}
                            avatar = {platform.avatar}
                            link = {platform.link}
                        />
                        )
                      }             
                  </SeeMoreWindow >
                </Card>
              </GridItem>

              <GridItem rowSpan={[1,1,1,1]} /* rowSpan={2} */ /* colSpan={7} */ colSpan={[10, 10, 7, 7]}>
                <Card cw="100%" ch="auto">                  
                  <Text textStyle='h3' mt={3}>Recommended Books to Ace your interview</Text>                       
                  <hr
                      style={{
                          color: "lightgray",
                          backgroundColor: "lightgray",
                          height: 0.5,
                          marginTop: "10px",
                          marginBottom: "10px",
                          //width: "60%",
                      }}
                  />                              
                  <VStack style={{padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} h={["70%", "70%", "75%", "75%"]} mt={4}
                    align={'stretch'}
                    w={["100%", "100%", "90%", "90%"]}
                    spacing={4}
                  >
                    {
                      roleData["books"].slice(0, 3).map((book, i)=>
                        <BookProfile key={i} 
                            title={book.title} 
                            author={book.author}
                            likes = {book.likes}
                            avatar = {book.avatar}
                            link = {book.link}
                        />
                      )
                    }
                    <HStack justify="left" w={'100%'}>
                    <Text as="sup" color="kalooteBlue.100">AD</Text>
                      <Text textStyle={'subContentBold'} style={{cursor: 'pointer'}} w={['100%','100%','70%','70%']}>
                          Transitioning to Product from a functional role?
                      </Text>
                    </HStack>

                  </VStack>
                                        
                  <SeeMoreWindow title='Recommended Books to Ace your interview'>              
                  {
                      roleData["books"].map((book, i)=>
                      <BookProfileSM key={i} 
                          title={book.title} 
                          author={book.author}
                          likes = {book.likes}
                          avatar = {book.avatar}
                          link = {book.link}
                      />
                      )
                    }
                  </SeeMoreWindow >
                </Card>
              </GridItem>             
            </Grid>
          </div>
        </Box>

      </main>

      
    </div>
  )
}
