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
import TabsMenuIG from '../../../components/tabbar/tabbarIG.js'
import SeeMoreWindow from '../../../components/seeMore/seeMore.js'
import BlogSuggestion from '../../../components/suggestions/blog.js'
import {Avatar,
        Text, 
        Image, 
        Box, 
        //Tabs, TabList, TabPanels, Tab, TabPanel,
        Flex, 
        Stack,        
        Center,
        Grid, GridItem, 
        Input, InputGroup, InputLeftAddon, InputRightAddon,
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

export default function InterviewGuide() {
  //console.log(skills)

  return (
    <div className={styles.container}>
      <Head>
        <title>Kaloote - Interview Guide - Product Management</title>
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
                 
            <div style={{backgroundColor: '#f1f1f6',
                      borderRadius: '10px',                       
                      padding: '25px', 
                      marginTop: '10px',
                      height: 'auto',
                      //height: '150vh',
                      }}>
                <Text textStyle="h2" color="kalooteBlue.100" align="center" mb={7}>Interview Guide</Text>
                <Card >
                    <Stack justify="center" spacing={5}>
                        <InputGroup p={0} 
                                    w={["100%", "100%", "70%", "70%"]} 
                                    m={"auto"} mt={["20px", "20px", "50px", "50px"]}>                      
                            <Input 
                                placeholder="Search a Role" 
                                size="lg"        
                                w={["100%", "100%", "60%", "60%"]}                        
                                style={{border: "0.5px solid lightgray", borderTopRightRadius: "0px", borderBottomRightRadius: "0px"}} 
                            />      
                            <Input 
                                placeholder="Company" 
                                size="lg"           
                                w={["100%", "100%", "40%", "40%"]}                      
                                style={{border: "0.5px solid lightgray", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px"}}
                            />
                        </InputGroup>
                        <Wrap justify="center">
                            <TabsMenuIG selection={3} isIndex={false} ></TabsMenuIG>
                        </Wrap>
                        <Center>
                            <Image w={["100%", "100%", "50%", "50%"]} src={icons.interviewGuide}></Image>
                        </Center>
                        <Wrap color="gray" justify="center" mb="20px">
                            <Wrap w={["100%", "100%", "60%", "60%"]} justify="center">
                              <Text>Search for a company and/or a role and learn everything about the</Text> <Text color="kalooteBlue.100" as='b'>interview process</Text>, 
                              <Text>follow an</Text> <Text  color="kalooteBlue.100" as='b'>interview study guide</Text><Text > to better prepare, explore hundred of </Text><Text  color="kalooteBlue.100" as='b'>interview questions</Text> <Text>and get relevant</Text> <Text  color="kalooteBlue.100" as='b'>interview tips</Text>
                            </Wrap>
                        </Wrap>
                    </Stack>
                </Card>
            
            </div>
        </Box>
      </main>

      
    </div>
  )
}