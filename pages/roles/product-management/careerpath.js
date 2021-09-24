import Head from 'next/head'
//import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import Card from '../../../components/card/card.js'
import PeopleProfile from '../../../components/profile/peopleProfile.js'
import CompanyProfile from '../../../components/profile/companyProfile.js'
import TabsMenu from '../../../components/tabbar/tabbar.js'
import SeeMoreWindow from '../../../components/seeMore/seeMore.js'
import BlogSuggestion from '../../../components/suggestions/blog.js'
import TrainingSuggestion from '../../../components/suggestions/training.js'
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


export default function Role() {
  //console.log(skills)

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
              <Text textStyle="h2">Product Management</Text>
              <Text textStyle="h2">Tech</Text>
            </Flex>
            
            <Grid
              h="100%"
              templateRows="repeat(8, 1fr)"
              templateColumns="repeat(10, 1fr)"
              gap={4}
            >
              <GridItem rowSpan={[1,1, 1,2]} colSpan={[10, 6, 7, 7]} /* colSpan={7} */ >
                <Card cw="100%" ch="100%" >
                  <VStack h={'100%'} align="stretch" justify="space-between">
                    <HStack h={['60%', '60%', '50%', '80%']}  align="center" fontSize={["3vw", "2.5vw", '2vw', "0.75vw"]} id="roleSummarySection">
                      <Box w={'45%'} h={'auto'} justify="center" align="center">
                        <Image 
                          id="roleImage"
                          src='https://res.cloudinary.com/ignitouch/image/upload/v1629728940/Kaloote/product_manager_oha9rv.png' 
                          objectFit="cover"
                        />
                      </Box>
  
                      <VStack h='100%' spacing={5} align="stretch" justify="center" p={["15px", "15px", "10px", "10px"]}
                        id="roleSummarydata">
                        <HStack spacing={4} > 
                          <Box>
                            <Image src='https://res.cloudinary.com/ignitouch/image/upload/v1629730987/Kaloote/salary_rm7u5c.jpg' h="25px" w="25px"></Image>
                          </Box> 
                          <Text id="roleSalary" textStyle="subContent">$50k - 100k</Text>
                        </HStack>
                        <HStack spacing={4} > 
                          <Box>
                            <Image src='https://res.cloudinary.com/ignitouch/image/upload/v1629731070/Kaloote/employee-workplace-5-486228_jhbe44.png' h="25px" w="25px"></Image>
                          </Box> 
                          <Text id="roleWorkload" textStyle="subContent">60 Hrs/Week</Text>
                        </HStack>
                        <HStack spacing={4} > 
                          <Box>
                            <Image src='https://res.cloudinary.com/ignitouch/image/upload/v1629731031/Kaloote/travel_qsatbn.png' h="25px" w="25px"></Image>
                          </Box> 
                          <Text id="roleTravel" textStyle="subContent">Low Travel Requirements</Text>
                        </HStack>
                        <HStack spacing={4} > 
                          <Box>
                            <Image src='https://res.cloudinary.com/ignitouch/image/upload/v1629731157/Kaloote/log_mlt2xs.png' h="25px" w="25px"></Image>
                          </Box> 
                          <Text id="roleSteps"  textStyle="subContent" color='kalooteBlue.100' style={{textDecoration: 'underline'}}>Steps to become a PM</Text>
                        </HStack>
                      </VStack>
                    </HStack>
  
                    <Box h={'30%'} mt={'5px'}>
                      <TabsMenu selection={1} isIndex={false} />
                    </Box> 
                  </VStack>
                </Card>
              </GridItem>

              <GridItem rowSpan={[1,1, 1,2]}  /* colSpan={3} */ colSpan={[10, 4, 3, 3]}  >
                <Card cw="100%" ch="100%">
                  <Text textStyle='h3' mb={'10px'}>Training</Text>
                  <Box style={{height: '82%', padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} mt={'10px'} >
                    <TrainingSuggestion 
                      name="Udemy"
                      title="Master the Product Manager Interview"
                      price="24.99"
                      likes="2,867"
                    />
                    <TrainingSuggestion 
                      name="Udemy"
                      title="Product Management First Steps"
                      price="24.99"
                      likes="2,867"
                    />
                  </Box>                        
                  <SeeMoreWindow title='Training'>     
                    <Box style={{height: '82%', padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} mt={'10px'} >
                      <TrainingSuggestion 
                        name="Udemy"
                        title="Master the Product Manager Interview"
                        price="24.99"
                        likes="2,867"
                      />
                      <TrainingSuggestion 
                        name="Udemy"
                        title="Product Management First Steps"
                        price="24.99"
                        likes="2,867"
                      />
                    </Box>                                        
                  </SeeMoreWindow >
                  {/* <Text color='kalooteBlue.100' 
                    //onClick={onOpen}
                    style={{textDecoration: 'underline', textAlign: 'right'}}>See More</Text> */}
                </Card>
              </GridItem>
              
              <GridItem rowSpan={[1,1, 2,2]} /* rowSpan={2} */ /* colSpan={7} */ colSpan={[10, 6, 7, 7]}>
                <Card cw="100%" ch="100%">                  
                  <Text textStyle='h3' my={3}>Becoming a product manager after school</Text>
                  <Box style={{padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} h={["75%", "75%", "75%", "75%"]} mt={4}>
                    <BlogSuggestion 
                        name="@Abla"
                        title="Product Management job straight out of college"
                        likes = "10K"
                        views = "132K"
                    />
                    <BlogSuggestion 
                        name="@Yannick"
                        title="How to become a Product Manager out of college"
                        likes = "8K"
                        views = "99K"
                    />
                    <BlogSuggestion 
                        name="@Abla"
                        title="How to become a Product Manager out of college"
                        likes = "7K"
                        views = "80K"
                    />
                    
                    <BlogSuggestion 
                        name="@Abla"
                        title="Product Management job straight out of college"
                        likes = "10K"
                        views = "132K"
                    />
                  </Box>
                                        
                  <SeeMoreWindow title='Becoming a product manager after school'>              
                    <Box style={{padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} h={["60vh", "60vh", "55vh", "50vh"]} mt={4}>
                      <BlogSuggestion 
                          name="@Abla"
                          title="Product Management job straight out of college"
                          likes = "10K"
                          views = "132K"
                      />
                      <BlogSuggestion 
                          name="@Abla"
                          title="Product Management job straight out of college"
                          likes = "10K"
                          views = "132K"
                      />
                      <BlogSuggestion 
                          name="@Abla"
                          title="Product Management job straight out of college"
                          likes = "10K"
                          views = "132K"
                      />
                      
                      <BlogSuggestion 
                          name="@Abla"
                          title="Product Management job straight out of college"
                          likes = "10K"
                          views = "132K"
                      />
                      <BlogSuggestion 
                          name="@Abla"
                          title="Product Management job straight out of college"
                          likes = "10K"
                          views = "132K"
                      />
                      
                      <BlogSuggestion 
                          name="@Abla"
                          title="Product Management job straight out of college"
                          likes = "10K"
                          views = "132K"
                      />
                      <BlogSuggestion 
                          name="@Abla"
                          title="Product Management job straight out of college"
                          likes = "10K"
                          views = "132K"
                      />
                      
                      <BlogSuggestion 
                          name="@Abla"
                          title="Product Management job straight out of college"
                          likes = "10K"
                          views = "132K"
                      />
                    </Box>                
                  </SeeMoreWindow >
                </Card>
              </GridItem>
              
              <GridItem rowSpan={[1,1, 1,2]} /* colSpan={3} */ colSpan={[10, 4, 3, 3]} >
                <Card cw="100%" ch="100%">
                  <Text textStyle='h3' mb={'10px'}>Similar Jobs</Text>
                  <div style={{height: '82%', padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} mt={'10px'} >
                      <VStack mb={4} align="stretch" justify="left" w={'90%'} spacing={4} >
                        <Wrap>
                          <Text textStyle={'subContentBold'} style={{cursor: 'pointer'}} w={'100%'}>Program Management </Text>
                        </Wrap>
                        <Wrap>
                          <Text textStyle={'subContentBold'} style={{cursor: 'pointer'}} w={'100%'}>Project Management </Text>
                        </Wrap>
                      </VStack>        
                  </div>                        
                  <SeeMoreWindow title='Similar Jobs'>              
                      <VStack mb={4} align="stretch" justify="left" w={'90%'} spacing={4} >
                        <Wrap>
                          <Text textStyle={'subContentBold'} style={{cursor: 'pointer'}} w={'100%'}>Program Management </Text>
                        </Wrap>
                        <Wrap>
                          <Text textStyle={'subContentBold'} style={{cursor: 'pointer'}} w={'100%'}>Project Management </Text>
                        </Wrap>
                      </VStack>                 
                  </SeeMoreWindow >
                  {/* <Text color='kalooteBlue.100' 
                    //onClick={onOpen}
                    style={{textDecoration: 'underline', textAlign: 'right'}}>See More</Text> */}
                </Card>
              </GridItem>

              <GridItem rowSpan={[1,1, 2,2]} /* rowSpan={2} */ /* colSpan={7} */ colSpan={[10, 6, 7, 7]}>
                <Card cw="100%" ch="100%">                  
                  <Text textStyle='h3' mt={3}>Transitioning into Product Management</Text>
                  
                  <Box style={{padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} h={["75%", "75%", "75%", "75%"]} mt={4}>
                    <BlogSuggestion 
                        name="@Abla"
                        title="How to get a job as a Product Manager?"
                        likes = "10K"
                        views = "132K"
                    />
                    <BlogSuggestion 
                        name="@Yannick"
                        title="How to get product experience without being a PM?"
                        likes = "8K"
                        views = "99K"
                    />
                    <HStack justify="left" w={'75%'}>
                    <Text as="sup" color="kalooteBlue.100">AD</Text>
                      <Text textStyle={'subContentBold'} style={{cursor: 'pointer'}} w={['100%','100%','70%','70%']}>
                          Transitioning to Product from a functional role?
                      </Text>
                    </HStack>

                  </Box>
                                        
                  <SeeMoreWindow title='Transitioning into Product Management'>              
                    <Box style={{padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} h={["60vh", "60vh", "55vh", "50vh"]} mt={4}>
                    <BlogSuggestion 
                        name="@Abla"
                        title="How to get a job as a Product Manager?"
                        likes = "10K"
                        views = "132K"
                    />
                    <BlogSuggestion 
                        name="@Yannick"
                        title="How to get product experience without being a PM?"
                        likes = "8K"
                        views = "99K"
                    />
                    <BlogSuggestion 
                        name="@Abla"
                        title="How to get a job as a Product Manager?"
                        likes = "10K"
                        views = "132K"
                    />
                    <BlogSuggestion 
                        name="@Yannick"
                        title="How to get product experience without being a PM?"
                        likes = "8K"
                        views = "99K"
                    />
                    </Box>                
                  </SeeMoreWindow >
                </Card>
              </GridItem>
              
              <GridItem rowSpan={[1,1, 1,2]} /* colSpan={3} */ colSpan={[10, 4, 3, 3]} >
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

              <GridItem rowSpan={[1,1, 2,2]} /* rowSpan={2} */ /* colSpan={7} */ colSpan={[10, 6, 7, 7]}>
                <Card cw="100%" ch="100%">
                  <Text textStyle='h3' mt={3}>What do you do with PM experience?</Text>
                  <Box style={{padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} h={["75%", "75%", "75%", "75%"]} mt={4}>
                    <BlogSuggestion 
                        title="Start your own business"
                        likes = "2K"
                        views = "80K"
                    />
                  </Box>
                                        
                  <SeeMoreWindow title='What do you do with PM experience?'>              
                    <Box style={{padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} h={["60vh", "60vh", "55vh", "50vh"]} mt={4}>
                    <BlogSuggestion 
                        title="Start your own business"
                        likes = "2K"
                        views = "80K"
                    />
                    </Box>                
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
