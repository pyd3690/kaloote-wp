import Head from 'next/head'
//import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import Card from '../../../components/card/card.js'
import PeopleProfile from '../../../components/profile/peopleProfile.js'
import CompanyProfile from '../../../components/profile/companyProfile.js'
import {icons} from '../../../data/iconLinks.js'
import {productManagementData} from '../../../data/productManagement.js'
import TabsMenu from '../../../components/tabbar/tabbar.js'
import SeeMoreWindow from '../../../components/seeMore/seeMore.js'
import BlogSuggestion from '../../../components/suggestions/blog.js'
import TrainingSuggestion from '../../../components/suggestions/training.js'
import TrainingSuggestionSM from '../../../components/suggestions/trainingSM.js'
import {Avatar,
        Text, 
        Image, 
        Box, 
        //Tabs, TabList, TabPanels, Tab, TabPanel,
        Flex, 
        
        Center,
        Grid, GridItem, 
        WrapItem, Wrap,
        useDisclosure,
        HStack, VStack} from '@chakra-ui/react';

const skills = ['Empathy', 'Leadership', 'Curiosity', 'Problem Solving', 'Communication']
const roleData = {
  name: productManagementData["name"],
  industry: productManagementData["industry"],
  summary: productManagementData["summary"],
  trainings: productManagementData["careerPath"]["trainings"],
  becoming_suggestions: productManagementData["careerPath"]["becoming_suggestions"], 
  similar_jobs: productManagementData["careerPath"]["similar_jobs"],
  transition_suggestions: productManagementData["careerPath"]["transition_suggestions"],
  experience_suggestions: productManagementData["careerPath"]["experience_suggestions"],
}

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
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(10, 1fr)"
              gap={4}
            >
              <GridItem rowSpan={[1,1,1,1]} colSpan={[10, 10, 7, 7]} /* colSpan={7} */ >
                <Card cw="100%" ch="auto" >
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
                      <TabsMenu selection={1} isIndex={false} />
                    </Box> 
                  </VStack>
                </Card>
              </GridItem>

              <GridItem rowSpan={[1,1, 1,1]}  /* colSpan={3} */ colSpan={[10, 10, 3, 3]}  >
                <Card cw="100%" ch="100%" /*{["auto", "auto", "100%", "100%"]}*/
                >
                  <Text textStyle='h3' mb={'10px'}>Training</Text>
                  <hr
                      style={{
                          color: "lightgray",
                          backgroundColor: "lightgray",
                          height: 0.5,
                          marginTop: "10px",
                          marginBottom: "10px",
                          width: '80%'
                      }}
                  />
                  <VStack style={{height: '75%', padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} mt={'10px'} spacing={[5,5, 5,7]} align={'strech'}>
                    {roleData["trainings"].slice(0, 3).map((training, index) => 
                        <TrainingSuggestion key={index}
                          name={training.name}
                          title={training.title}
                          price={training.price}
                          likes={training.likes}
                          link= {training.link}
                          duration ={training.duration}
                        />
                    )}                    
                  </VStack>                        
                  <SeeMoreWindow title='Training'>     
                    {roleData["trainings"].map((training, index) => 
                          <TrainingSuggestionSM key={index}
                            name={training.name}
                            title={training.title}
                            price={training.price}
                            likes={training.likes}
                            link= {training.link}
                            duration ={training.duration}
                          />
                      )}                                       
                  </SeeMoreWindow >
                  {/* <Text color='kalooteBlue.100' 
                    //onClick={onOpen}
                    style={{textDecoration: 'underline', textAlign: 'right'}}>See More</Text> */}
                </Card>
              </GridItem>
              
              <GridItem rowSpan={[1,1, 1,1]} /* rowSpan={2} */ /* colSpan={7} */ colSpan={[10, 10, 7, 7]}>
                <Card cw="100%" ch="auto">                  
                  <Text textStyle='h3' my={3}>Becoming a product manager after school</Text>
                  <hr
                      style={{
                          color: "lightgray",
                          backgroundColor: "lightgray",
                          height: 0.5,
                          marginTop: "10px",
                          marginBottom: "10px",
                      }}
                  />
                  <VStack w={["100%", "100%", "90%", "90%"]} p='10px' style={{overflowX: 'hidden', overflowY: 'auto'}} h={["70%", "70%", "75%", "75%"]} mt={4}
                    align={'stretch'}
                    spacing={4}
                  >
                    {
                      roleData["becoming_suggestions"].slice(0, 3).map((suggestion, i)=>
                        <BlogSuggestion key={i} 
                            name={suggestion.name} 
                            title={suggestion.title}
                            likes = {suggestion.likes}
                            views = {suggestion.views}
                            link = {suggestion.link}
                            author = {suggestion.author}
                            type ={suggestion.type}
                        />
                      )
                    }
                  </VStack>
                                        
                  <SeeMoreWindow title='Becoming a product manager after school'>        
                      {
                        roleData["becoming_suggestions"].map((suggestion, i)=>
                          <BlogSuggestion key={i} 
                              name={suggestion.name} 
                              title={suggestion.title}
                              likes = {suggestion.likes}
                              views = {suggestion.views}
                              link = {suggestion.link}
                              author = {suggestion.author}
                              type ={suggestion.type}
                          />
                        )
                      }             
                  </SeeMoreWindow >
                </Card>
              </GridItem>
              
              <GridItem rowSpan={[1,1, 1,1]} /* colSpan={3} */ colSpan={[10, 10, 3, 3]} >
                <Card cw="100%" ch={["auto", "auto", "100%", "100%"]}>
                  <Text textStyle='h3' mb={'10px'}>Similar Jobs</Text>
                  <hr
                      style={{
                          color: "lightgray",
                          backgroundColor: "lightgray",
                          height: 0.5,
                          marginTop: "10px",
                          marginBottom: "10px",
                          width: '80%'
                      }}
                  />
                  <Box h={["auto", "auto", "70%", "65%"]} style={{padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} mt={'10px'} >
                      <VStack align="stretch" justify="left" w={'90%'} spacing={[3,3, 5,5]} >
                        {
                          roleData["similar_jobs"].slice(0, 3).map((job, i) => 
                          <Wrap key={i} >
                            <Text textStyle={'subContentBold'} style={{cursor: 'pointer'}} w={'100%'}>
                              <a target="_blank" href={(job.link !== "")?job.link: "https://www.google.com/search?q=" + job.name.replace(/\s/g, '+')} rel="noopener noreferrer"> 
                                {job.name}
                              </a> 
                            </Text>
                          </Wrap>
                          )
                        }                        
                      </VStack>        
                  </Box>                        
                  <SeeMoreWindow title='Similar Jobs'>              
                      {
                          roleData["similar_jobs"].map((job, i) => 
                          <Wrap key={i} >
                            <Text textStyle={'subContentBold'} style={{cursor: 'pointer'}} w={'100%'} mb={2} >
                              <a target="_blank" href={(job.link !== "")?job.link: "https://www.google.com/search?q=" + job.name.replace(/\s/g, '+')} rel="noopener noreferrer"> 
                                {job.name}
                              </a> 
                            </Text>
                          </Wrap>
                          )
                        } 
                  </SeeMoreWindow >
                  {/* <Text color='kalooteBlue.100' 
                    //onClick={onOpen}
                    style={{textDecoration: 'underline', textAlign: 'right'}}>See More</Text> */}
                </Card>
              </GridItem>

              <GridItem rowSpan={[1,1, 1,1]} /* rowSpan={2} */ /* colSpan={7} */ colSpan={[10, 10, 7, 7]}>
                <Card cw="100%" ch="auto">                  
                  <Text textStyle='h3' mt={3}>Transitioning into Product Management</Text>                       
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
                      roleData["transition_suggestions"].slice(0, 3).map((suggestion, i)=>
                        <BlogSuggestion key={i} 
                            name={suggestion.name} 
                            title={suggestion.title}
                            likes = {suggestion.likes}
                            views = {suggestion.views}
                            link = {suggestion.link}
                            author = {suggestion.author}
                            type ={suggestion.type}
                        />
                      )
                    }
                    <HStack justify="left" w={'75%'} style={{cursor: 'pointer'}}>
                    <Text as="sup" color="kalooteBlue.100">AD</Text>
                      <Text textStyle={'subContentBold'} style={{cursor: 'pointer'}} w={['100%','100%','70%','70%']}>
                          Transitioning to Product from a functional role?
                      </Text>
                    </HStack>

                  </VStack>
                                        
                  <SeeMoreWindow title='Transitioning into Product Management'>              
                  {
                      roleData["transition_suggestions"].map((suggestion, i)=>
                        <BlogSuggestion key={i} 
                            name={suggestion.name} 
                            title={suggestion.title}
                            likes = {suggestion.likes}
                            views = {suggestion.views}
                            link = {suggestion.link}
                            author = {suggestion.author}
                            type ={suggestion.type}
                        />
                      )
                    }
                  </SeeMoreWindow >
                </Card>
              </GridItem>
              
              <GridItem rowSpan={[1,1, 1,1]} /* colSpan={3} */ colSpan={[10, 10, 3, 3]} >
                <Card cw="100%" ch="100%">
                  <Text textStyle='h3' mb={'10px'}>Sponsored</Text>
                  <div style={{height: '82%', padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} mt={'10px'} >
                      <HStack justify="center" align="stretch">
                        <Box >
                          <Image src='https://res.cloudinary.com/ignitouch/image/upload/v1632446597/Kaloote/Ads_zzwmnd.png' h={"auto"} w={'100%'}></Image>
                        </Box>
                        
                        
                      </HStack>
                  </div>                        
                  
                  {/* <Text color='kalooteBlue.100' 
                    //onClick={onOpen}
                    style={{textDecoration: 'underline', textAlign: 'right'}}>See More</Text> */}
                </Card>
              </GridItem>

              <GridItem rowSpan={[1,1, 1,1]} /* rowSpan={2} */ /* colSpan={7} */ colSpan={[10, 10, 7, 7]}>
                <Card cw="100%" ch="auto">
                  <Text textStyle='h3' mt={3}>What do you do with PM experience?</Text>
                  <hr
                      style={{
                          color: "lightgray",
                          backgroundColor: "lightgray",
                          height: 0.5,
                          marginTop: "10px",
                          marginBottom: "10px",
                      }}
                  />
                  <VStack style={{padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} h={["70%", "70%", "75%", "75%"]} mt={4}
                    align={'stretch'}
                    w={["100%", "100%", "90%", "90%"]}
                    spacing={4}
                  >
                    {
                      roleData["experience_suggestions"].slice(0, 3).map((suggestion, i)=>
                        <BlogSuggestion key={i} 
                            name={suggestion.name} 
                            title={suggestion.title}
                            likes = {suggestion.likes}
                            views = {suggestion.views}
                            link = {suggestion.link}
                            author = {suggestion.author}
                            type ={suggestion.type}
                        />
                      )
                    }
                  </VStack>
                                        
                  <SeeMoreWindow title='What do you do with PM experience?'>              
                  {
                      roleData["experience_suggestions"].map((suggestion, i)=>
                        <BlogSuggestion key={i} 
                            name={suggestion.name} 
                            title={suggestion.title}
                            likes = {suggestion.likes}
                            views = {suggestion.views}
                            link = {suggestion.link}
                            author = {suggestion.author}
                            type ={suggestion.type}
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
