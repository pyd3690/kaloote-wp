import { React } from 'react';
import {tabsNames} from '../../data/tabs.js'
import { Tabs, TabList, TabPanels, Tab, TabPanel, propNames } from "@chakra-ui/react"
import Link from 'next/link'
import styles from './tabbar.module.css'
//"product-management/" +
export default function TabsMenu(props){
    var base = (props.isIndex) ?"product-management/":"";
    return (
    <Tabs p={["15px", "15px", "5px", "5px"]}  defaultIndex={props.selection}
            
            className={styles.tabbar}>
        <TabList>
            {
                tabsNames.map((tabName) => 
                    <Link key={"link-" + tabName} href={base + tabName.replace(/\s/g, '').replace(/&/g, '').toLowerCase()} passHref>
                        <Tab key={tabName} /* textStyle={'tabs'} */ fontWeight={"bold"} textAlign={'center'} fontSize={["3.5vw", "3vw", '1.3vw', "0.92vw"]} >{tabName}</Tab>
                    </Link>
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