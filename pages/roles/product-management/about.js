import Head from 'next/head'
//import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import Card from '../../../components/card/card.js'
import {productManagementData} from '../../../data/productManagement.js'
import {icons} from '../../../data/iconLinks.js'
import PeopleProfile from '../../../components/profile/peopleProfile.js'
import PeopleProfileSM from '../../../components/profile/peopleProfileSeeMore.js'
import CompanyProfile from '../../../components/profile/companyProfile.js'
import TabsMenu from '../../../components/tabbar/tabbar.js'
import SeeMoreWindow from '../../../components/seeMore/seeMore.js'
import SeeMoreWindowC from '../../../components/seeMore/seeMoreCol.js'
import BlogSuggestion from '../../../components/suggestions/blog.js'
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
  description_suggestions: productManagementData["about"]["description_suggestions"],
  top_profiles: productManagementData["about"]["top_profiles"],
  top_employers: productManagementData["about"]["top_employers"]
}

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
              <Text textStyle="h2">{roleData["industry"]}</Text>
            </Flex>
            
            <Grid
              h="100%"
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(10, 1fr)"
              gap={4}
            >
              <GridItem rowSpan={[1,1, 1,1]} colSpan={[10, 10, 7, 7]} /* colSpan={7} */ >
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
  
                    <Box h={'auto'} mt={'5px'}>
                      <TabsMenu selection={0} isIndex={false} />
                    </Box> 
                  </VStack>
                </Card>
              </GridItem>

              <GridItem rowSpan={[1,1, 1,1]}  /* colSpan={3} */ colSpan={[10, 10, 3, 3]}  >
                <Card cw="100%" ch="100%">
                  <Text textStyle='h3' mb={'10px'}>Events</Text>
                  <div style={{height: '82%', padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} mt={'10px'} >List</div>                        
                  <SeeMoreWindow title='Longer Listing'>              
                      <Center>Longer List of Elements</Center>                
                  </SeeMoreWindow >
                  {/* <Text color='kalooteBlue.100' 
                    //onClick={onOpen}
                    style={{textDecoration: 'underline', textAlign: 'right'}}>See More</Text> */}
                </Card>
              </GridItem>
              
              <GridItem rowSpan={[1,1, 2,2]} /* rowSpan={2} */ /* colSpan={7} */ colSpan={[10, 10, 7, 7]}>
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
                  <Text textStyle='h3' mt={3}>What does a Product Manager do?</Text>
                 {/*  <Text textStyle='subContent' mt={3}>
                    As a Product Manager you will be tasked with creating products or features and sheperding them from inception to implementation.
                  </Text> */}
                  <VStack w={["100%", "100%", "90%", "90%"]} p='10px' style={{overflowX: 'hidden', overflowY: 'auto'}} h={["80%", "70%", "90%", "90%"]} mt={4}
                    align={'stretch'}
                    spacing={4}
                  >
                    {
                      roleData["description_suggestions"].slice(0, 10).map((suggestion, i)=>
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

                      <HStack justify="space-between" align="stretch" h={["auto", "auto", "20%", "20%"]} mt={5}>
                        <Box >
                          <Image src='https://res.cloudinary.com/ignitouch/image/upload/v1632446597/Kaloote/Ads_zzwmnd.png' h={"auto"} w={'100%'}></Image>
                        </Box>
                        
                        <Box >
                          <Image src='https://res.cloudinary.com/ignitouch/image/upload/v1632446597/Kaloote/Ads_zzwmnd.png' h={"auto"} w={'100%'}></Image>
                        </Box>
                        
                      </HStack>
                  </VStack>
                                        
                  {/* <SeeMoreWindow title='What does a Product Manager do?'>        
                      {
                        roleData["description_suggestions"].map((suggestion, i)=>
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
                  </SeeMoreWindow > */}
                </Card>
              </GridItem>
              
              <GridItem rowSpan={[1,1, 1,1]} /* colSpan={3} */ colSpan={[10, 10, 3, 3]} >
                <Card cw="100%" ch="100%">
                  <Text textStyle='h3' mb={'10px'}>Top Employers</Text>
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
                    {roleData["top_employers"].slice(0, 3).map((employer, index) => 
                      <CompanyProfile key={index}
                        avatar={employer.avatar}
                        source={employer.source}
                        jobs={employer.jobs}
                        name={employer.name}
                      />
                    )}                    
                  </VStack>                        
                  <SeeMoreWindowC title='Top Employers'>     
                    {roleData["top_employers"].map((employer, index) => 
                        <CompanyProfile key={index}
                          avatar={employer.avatar}
                          source={employer.source}
                          jobs={employer.jobs}
                          name={employer.name}
                        />
                      )}                                       
                  </SeeMoreWindowC >


                  {/* <div style={{height: '82%', padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} mt={'10px'} >
                      <CompanyProfile 
                        avatar="https://cdn.iconscout.com/icon/free/png-128/amazon-65-675861.png"
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
                  </SeeMoreWindow > */}
                  {/* <Text color='kalooteBlue.100' 
                    //onClick={onOpen}
                    style={{textDecoration: 'underline', textAlign: 'right'}}>See More</Text> */}
                </Card>
              </GridItem>
              
              <GridItem rowSpan={[1,1, 1,1]} /* colSpan={3} */ colSpan={[10, 10, 3, 3]} >
                <Card cw="100%" ch="100%">
                  <Text textStyle='h3' mb={'10px'}>Top Profiles</Text>
                  <VStack style={{height: '75%', padding: '10px', overflowX: 'hidden', overflowY: 'auto'}} mt={'10px'} spacing={[2,2, 3,3]} align={'strech'}>
                    {roleData["top_profiles"].slice(0, 3).map((profile, index) => 
                        <PeopleProfile key={index}
                          avatar={icons.avatar} //to update later
                          name={profile.name}
                          title={profile.title}
                          likes = {profile.likes}
                          twitter = {profile.twitter}
                          linkedIn = {profile.linkedIn}
                        />
                    )}                    
                  </VStack>                        
                  <SeeMoreWindow title='Top Profiles' pageSize="8">     
                    {roleData["top_profiles"].map((profile, index) => 
                        <PeopleProfileSM key={index}
                          avatar={icons.avatar} // to update the avatar
                          name={profile.name}
                          title={profile.title}
                          likes = {profile.likes}
                          twitter = {profile.twitter}
                          linkedIn = {profile.linkedIn}
                        />
                        /* <PeopleProfile key={index}
                          avatar={icons.avatar} // to update the avatar
                          name={profile.name}
                          title={profile.title}
                          likes = {profile.likes}
                          twitter = {profile.twitter}
                          linkedIn = {profile.linkedIn}
                        /> */
                      )}                                       
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


/* 
<br/>                  
<br/>
<Text fontSize = {["4vw", "2.5vw", '1.5vw', "1.25vw"]}
      fontWeight = "620"
      lineHeight = "120%"
      letterSpacing = "1.5px"
      style={{cursor: 'pointer'}} w={'100%'}>
    New Card title thickness <br/> <br/>
</Text>
<Text fontSize = {["4vw", "2.5vw", '1.5vw', "1.25vw"]}
      fontWeight = "620"
      lineHeight = "120%"
      letterSpacing = "0.5px"
      style={{cursor: 'pointer'}} w={'100%'}>
    New Card title thickness #2 <br/> <br/>
</Text>
<Text fontSize = {["3vw", "2.1vw", '1.2vw', "1vw"]}
      fontWeight = "380"
      lineHeight = "110%"
      letterSpacing = "1px"
      style={{cursor: 'pointer'}} w={'100%'}>
    #1 <br/>
    This is the text that I am using to test the new thickness of the font. So thicker of less? <br/>
    This is the text that I am using to test the new thickness of the font. So thicker of less? <br/>
</Text><br/>
<Text fontSize = {["3vw", "2.1vw", '1.2vw', "1vw"]}
      fontWeight = "470"
      lineHeight = "110%"
      letterSpacing = "1px"
      style={{cursor: 'pointer'}} w={'100%'}>
    #2 <br/>
    This is the text that I am using to test the new thickness of the font. So thicker of less? <br/>
    This is the text that I am using to test the new thickness of the font. So thicker of less? <br/>
</Text><br/>
<Text fontSize = {["3vw", "2.1vw", '1.2vw', "1vw"]}
      fontWeight = "500"
      lineHeight = "110%"
      letterSpacing = "1px"
      style={{cursor: 'pointer'}} w={'100%'}>
    #3 <br/>
    This is the text that I am using to test the new thickness of the font. So thicker of less? <br/>
    This is the text that I am using to test the new thickness of the font. So thicker of less? <br/>
</Text><br/>
<Text fontSize = {["3vw", "2.1vw", '1.2vw', "1vw"]}
      fontWeight = "500"
      lineHeight = "110%"
      letterSpacing = "-1px"
      style={{cursor: 'pointer'}} w={'100%'}>
    #4 <br/>
    This is the text that I am using to test the new thickness of the font. So thicker of less? <br/>
    This is the text that I am using to test the new thickness of the font. So thicker of less? <br/>
</Text> */