import Head from 'next/head'
//import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Card from '../../components/card/card.js'
import PeopleProfile from '../../components/profile/peopleProfile.js'
import CompanyProfile from '../../components/profile/companyProfile.js'
import TabsMenu from '../../components/tabbar/tabbar.js'
import SeeMoreWindow from '../../components/seemore/seeMore.js'
import {Avatar,
        Text, 
        Image, 
        Box, 
        //Tabs, TabList, TabPanels, Tab, TabPanel,
        Flex, 
        Modal,
        Center,
        Grid, GridItem, 
        WrapItem, Wrap,
        useDisclosure,
        Lorem,
        HStack, VStack} from '@chakra-ui/react';

const skills = ['Empathy', 'Leadership', 'Curiosity', 'Problem Solving', 'Communication']


export default function Role() {
  //console.log(skills)

  return (
    <div className={styles.container}>
      <Head>
        <title>Kaloote - Product Management Role</title>
        <meta name="description" content="As a Product Manager you will be tasked with creating products or features and sheperding them from inception to implementation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{minHeight: '90vh', height: 'auto', backgroundColor: '#f1f1f6'}}>
        <Box /* className={styles.dataContainer} */ w={['100%', "95%", "85%", "75%"]} style={{
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
              templateRows="repeat(6, 1fr)"
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
                          <Text id="roleSalary">$50k - 100k</Text>
                        </HStack>
                        <HStack spacing={4} > 
                          <Box>
                            <Image src='https://res.cloudinary.com/ignitouch/image/upload/v1629731070/Kaloote/employee-workplace-5-486228_jhbe44.png' h="25px" w="25px"></Image>
                          </Box> 
                          <Text id="roleWorkload">60 Hrs/Week</Text>
                        </HStack>
                        <HStack spacing={4} > 
                          <Box>
                            <Image src='https://res.cloudinary.com/ignitouch/image/upload/v1629731031/Kaloote/travel_qsatbn.png' h="25px" w="25px"></Image>
                          </Box> 
                          <Text id="roleTravel">Low Travel Requirements</Text>
                        </HStack>
                        <HStack spacing={4} > 
                          <Box>
                            <Image src='https://res.cloudinary.com/ignitouch/image/upload/v1629731157/Kaloote/log_mlt2xs.png' h="25px" w="25px"></Image>
                          </Box> 
                          <Text id="roleSteps" color='kalooteBlue.100' style={{textDecoration: 'underline'}}>Steps to become a PM</Text>
                        </HStack>
                      </VStack>
                    </HStack>
  
                    <Box h={'30%'} mt={'5px'}>
                      <TabsMenu />
                    </Box> 
                  </VStack>
                </Card>
              </GridItem>

              <GridItem rowSpan={[1,1, 1,2]}  /* colSpan={3} */ colSpan={[10, 4, 3, 3]}  >
                <Card cw="100%" ch="100%">
                  <Text textStyle='tabs' mb={'10px'}>Events</Text>
                  <div style={{height: '82%', padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} mt={'10px'} >List</div>                        
                  <SeeMoreWindow title='Longer Listing'>              
                      <Center>Longer List of Elements</Center>                
                  </SeeMoreWindow >
                  {/* <Text color='kalooteBlue.100' 
                    //onClick={onOpen}
                    style={{textDecoration: 'underline', textAlign: 'right'}}>See More</Text> */}
                </Card>
              </GridItem>
              
              <GridItem rowSpan={[1,1, 2,4]} /* rowSpan={2} */ /* colSpan={7} */ colSpan={[10, 6, 7, 7]}>
                <Card cw="100%" ch="100%">
                  <Wrap my={'4'}>
                    <WrapItem>
                      <Text textStyle='skills' color="gray" mr={2}>
                        Skills:
                      </Text>
                    </WrapItem>
                    {skills.map((skill) => 
                        <WrapItem key={skill}>
                          <Text textStyle='skills' color="kalooteBlue.100" mr={2}>
                            {skill} &bull;
                          </Text>
                      </WrapItem> 
                    )}                                       
                  </Wrap>
                  <hr
                      style={{
                          color: "lightgray",
                          backgroundColor: "lightgray",
                          height: 0.5,
                          marginTop: "10px",
                          marginBottom: "10px",
                      }}
                  />
                  <Text textStyle='tabs' mt={3}>What does a Product Manager do?</Text>
                  <Text textStyle='subContent' mt={3}>
                    As a Product Manager you will be tasked with creating products or features and sheperding them from inception to implementation.
                  </Text>
                </Card>
              </GridItem>
              
              <GridItem rowSpan={[1,1, 1,2]} /* colSpan={3} */ colSpan={[10, 4, 3, 3]} >
                <Card cw="100%" ch="100%">
                  <Text textStyle='tabs' mb={'10px'}>Top Employers</Text>
                  <div style={{height: '82%', padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} mt={'10px'} >
                      <CompanyProfile 
                        avatar="https://media-exp1.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_200_200/0/1612205615891?e=2159024400&v=beta&t=J9qbDyzP2uv1lE1Xb_ieBaWwgeT-u52Mf-4ACuHP_p8"
                        source="https://logos-world.net/wp-content/uploads/2021/02/Indeed-Logo.png"
                        jobs="1,000+"
                        name="Amazon"
                      />
                      <CompanyProfile 
                        avatar="https://pic.clubic.com/v1/images/1501430/raw"
                        source="https://logos-world.net/wp-content/uploads/2021/02/Indeed-Logo.png"
                        jobs="900+"
                        name="VMWare"
                      />
                      <CompanyProfile 
                        avatar="https://hashedhealth.com/wp-content/uploads/2017/07/HH_News_change-healthcare-15.png"
                        source="https://res.cloudinary.com/ignitouch/image/upload/v1629761865/Kaloote/linkedin_yzu9nm.png"
                        jobs="900+"
                        name="Change Healthcare"
                      />                    
                  </div>                        
                  <SeeMoreWindow title='Longer Listing'>              
                      <Center>Longer List of Elements</Center>                
                  </SeeMoreWindow >
                  {/* <Text color='kalooteBlue.100' 
                    //onClick={onOpen}
                    style={{textDecoration: 'underline', textAlign: 'right'}}>See More</Text> */}
                </Card>
              </GridItem>
              
              <GridItem rowSpan={[1,1, 1,2]} /* colSpan={3} */ colSpan={[10, 4, 3, 3]} >
                <Card cw="100%" ch="100%">
                  <Text textStyle='tabs' mb={'10px'}>Top Profiles</Text>
                  <div style={{height: '82%', padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} mt={'10px'} >
                      <PeopleProfile 
                        avatar="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
                        name="Eddie Blue"
                        title="Co-Founder @ Sundial, Author of THE MAKING OF A MANAGER"
                        likes = "10K"
                      />
                      <PeopleProfile 
                        avatar="https://thumbs.dreamstime.com/b/young-woman-avatar-cartoon-character-profile-picture-young-brunette-woman-short-hair-avatar-cartoon-character-vector-149728784.jpg"
                        name="Lola Bay"
                        title="Product Management Trainer, Consultant, and Author"
                        likes="9K"
                      />
                      <PeopleProfile 
                        avatar="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/83221961/original/425127947f0688643bcefba40b83c767b13e2a6a/illustrate-your-cartoon-avatar.jpg"
                        name="John Doe"
                        title="Product Management Trainer, Consultant, and Author"
                        likes="8K"
                      />
                  </div>                        
                  <SeeMoreWindow title='Longer Listing'>              
                      <Center>Longer List of Elements</Center>                
                  </SeeMoreWindow >
                  {/* <Text color='kalooteBlue.100' 
                    //onClick={onOpen}
                    style={{textDecoration: 'underline', textAlign: 'right'}}>See More</Text> */}
                </Card>
              </GridItem>
            </Grid>
          </div>
        </Box>

      </main>

      
    </div>
  )
}
