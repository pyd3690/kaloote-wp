import { React } from 'react';
import {tabsNames} from '../../data/tabs.js'
import { Tabs, TabList, TabPanels, Tab, TabPanel, propNames } from "@chakra-ui/react"


export default function TabsMenu(props){
    return (
    <Tabs >
        <TabList>
            {
                tabsNames.map((tabName) => 
                    <Tab key={tabName}>{tabName}</Tab>
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