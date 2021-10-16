import Head from 'next/head'
import Link from 'next/link'
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
import SeeMoreWindowR from '../../../components/seeMore/seeMoreR.js'
import BlogSuggestion from '../../../components/suggestions/blog.js'
import Resource from '../../../components/suggestions/resourcesIG.js'
import React, {useState} from 'react'
import {Avatar,
        Text, 
        Image, Button,
        Box, 
        //Tabs, TabList, TabPanels, Tab, TabPanel,
        Flex, 
        Menu,
        MenuButton,
        MenuList,
        MenuItem,
        MenuGroup,
        MenuDivider,
        MenuOptionGroup,
        MenuItemOption,
        Stack,
        Checkbox,
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
  top_employers: productManagementData["about"]["top_employers"],
  interviewGuide: productManagementData["interview"]["guides"]
}
var role = "Product Management"
const questions = roleData["interviewGuide"].filter(resource => resource.category.toLowerCase().includes("question"));
const videos = questions.filter(resource => (resource.type.toLowerCase() === "video" && resource.category.toLowerCase() === "question"))
export default function InterviewGuide() {
  //console.log(skills)

  const [resources, setResources] = useState(questions);
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
                    <Stack justify="center" spacing={5} >
                        <InputGroup p={0} 
                                    w={["100%", "100%", "70%", "70%"]} 
                                    m={"auto"} mt={["20px", "20px", "50px", "50px"]}>                      
                            <Input 
                                placeholder="Search a Role" 
                                size="lg"        
                                w={["100%", "100%", "60%", "60%"]}                        
                                style={{border: "0.5px solid lightgray", borderTopRightRadius: "0px", borderBottomRightRadius: "0px"}} 
                                defaultValue = {role}
                                
                            />      
                            <Input 
                                placeholder="Company" 
                                size="lg"           
                                w={["100%", "100%", "40%", "40%"]}                      
                                style={{border: "0.5px solid lightgray", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px"}}
                            />
                        </InputGroup>
                        <Wrap justify="center">
                          <TabsMenuIG selection={0}  search='product-management' ></TabsMenuIG>
                        </Wrap>
                        <Center>
                          <Text textStyle={'subContentBold'} color="kalooteBlue.100" mr="10px"><Link href="/roles/product-management">Product Management</Link></Text>
                          <Text textStyle={'profileContent'} color="gray"> - Interviews Questions ({resources.length} found)</Text>
                        </Center>
                        <Center w={["100%", "100%", "100%", "100%"]} mx='auto'>
                          <HStack justify="space-around" w={["100%", "100%", "100%", "100%"]}>
                            
                            <Checkbox 
                              onChange={
                                (e)=> {                                  
                                  if(e.target.checked)
                                  {
                                    setResources(videos);
                                  }
                                  else
                                  {
                                    setResources(questions);
                                  }
                                }
                              }
                            >
                              <Text textStyle={'profileContent'} color="gray">Videos Only</Text>
                            </Checkbox>
                            <Menu>
                              <MenuButton as={Button}  bg="kalooteBlue.100" color="white" w={["30%","30%","10%","10%"]}>
                                <Wrap justify="space-between">
                                  <Text textStyle={'profileContent'}>All </Text>
                                  <Text textStyle={'profileContent'} as="b">&#8964;</Text>
                                </Wrap>
                              </MenuButton>
                              <MenuList>
                                <MenuItem>Technical</MenuItem>
                                <MenuItem>Behavioral</MenuItem>
                              </MenuList>
                            </Menu>
                          </HStack>
                        </Center>
                        <Center >
                          <VStack id="rcontent" w={["100%", "100%", "70%", "70%"]} spacing={4} mt='50px' mb='30px'>
                              {
                                (resources.length !== 0)?resources.slice(0,3).map((resource, i) => 
                                <Resource key={i} 
                                  title = {resource.title}
                                  category = {resource.category}
                                  type = {resource.type}
                                  link={resource.link}
                                  company = {resource.company}
                                  likes = {resource.likes}
                                  views = {resource.views}
                                />
                              ):
                              <Text>Nothing to display</Text>
                              }
                          </VStack> 
                        </Center>
                                                               
                        <Center >
                            <SeeMoreWindowR title='Product Management - Interviews Questions'  pageSize={5}>              
                            {
                                  resources.map((resource, i) => 
                                    <Resource key={i} 
                                      title = {resource.title}
                                      category = {resource.category}
                                      type = {resource.type}
                                      link={resource.link}
                                      company = {resource.company}
                                      likes = {resource.likes}
                                      views = {resource.views}
                                    />
                                  )
                                }
                            </SeeMoreWindowR >
                          </Center>
                    </Stack>
                </Card>
            
            </div>
        </Box>
      </main>

      
    </div>
  )
}