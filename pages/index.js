import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/card/card.js'
import PeopleProfile from '../components/profile/peopleProfile.js'
import CompanyProfile from '../components/profile/companyProfile.js'
import TabsMenu from '../components/tabbar/tabbar.js'
import {Avatar,
        Text, 
        Image, 
        Box, 
        Tabs, TabList, TabPanels, Tab, TabPanel,
        Flex, 
        Grid, GridItem, 
        WrapItem, Wrap,
        HStack, VStack} from '@chakra-ui/react';

const skills = ['Empathy', 'Leadership', 'Curiosity', 'Problem Solving', 'Communication']


export default function Home() {
  //console.log(skills)
  return (
    <div className={styles.container}>
      <Head>
        <title>Kaloote</title>
        <meta name="description" content="Be Career Wise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{minHeight: '90vh'}}>
        <div style={{width: '75%',
                    marginTop: '40px', 
                    //height: '90%', 
                    marginLeft: 'auto', 
                    marginRight: 'auto', 
                    marginBottom: 'auto', }}>
                    
          <div style={{backgroundColor: '#f1f1f6',
                      borderRadius: '10px',                       
                      padding: '25px', 
                      marginTop: '10px',
                      //height: '150vh',
                      minHeight: '70vh'}}>
            

          </div>
        </div>
      </main>

      
    </div>
  )
}
