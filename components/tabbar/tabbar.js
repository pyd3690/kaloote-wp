import { React } from 'react';
import {tabsNames} from '../../data/tabs.js'
import { Tabs, TabList, TabPanels, Tab, TabPanel, propNames } from "@chakra-ui/react"
import styles from './tabbar.module.css'

export default function TabsMenu(props){
    return (
    <Tabs p={["15px", "15px", "10px", "10px"]} 
            
            className={styles.tabbar}>
        <TabList>
            {
                tabsNames.map((tabName) => 
                    <Tab key={tabName} /* textStyle={'tabs'} */ fontWeight={"bold"} textAlign={'center'} fontSize={["3.5vw", "3vw", '1.5vw', "0.9vw"]} >{tabName}</Tab>
                )
            }
            {/* <Tab key='About'>About</Tab>
            <Tab key='Career Path'>Career Path</Tab>
            <Tab key='On the Job'>On the Job</Tab>
            <Tab key='Recruit for PM'>Recruit for PM</Tab>
            <Tab key='Resume & Cover Letter'>Resume & Cover Letter</Tab>
            <Tab key='Interview Guide'>Interview Guide</Tab> */}
        </TabList>
        <TabPanels>
            {
                tabsNames.map((tabName) => {
                    <TabPanel key={"tab-" + tabName}></TabPanel>
                })
            }
        </TabPanels>
    </Tabs>
  )
}