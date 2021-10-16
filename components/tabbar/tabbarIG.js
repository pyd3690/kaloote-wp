import { React } from 'react';
import {IGTabsNames} from '../../data/tabs.js'
import { Tabs, TabList, TabPanels, Tab, TabPanel, propNames } from "@chakra-ui/react"
import Link from 'next/link'
import styles from './tabbar.module.css'
//"product-management/" +
export default function TabsMenuIG(props){
    var base = (props.isIndex) ?"interview-guide/":"";
    return (
    <Tabs p={["15px", "15px", "10px", "10px"]}  defaultIndex={props.selection} variant="soft-rounded" className={styles.tabbar}>
        <TabList>
            {
                IGTabsNames.map((tabName) => 
                    <Link key={"link-" + tabName} href={base + tabName.replace(/\s/g, '').replace(/&/g, '').toLowerCase()} passHref>
                        <Tab bg='kalooteGray.100' key={tabName} mx={4} /* textStyle={'tabs'} */ fontWeight={"bold"} textAlign={'center'} fontSize={["3.5vw", "3vw", '1.5vw', "0.95vw"]} >{tabName}</Tab>
                    </Link>
                )
            }
        </TabList>
        <TabPanels>
            {
                IGTabsNames.map((tabName) => {
                    <TabPanel key={"tab-" + tabName}></TabPanel>
                })
            }
        </TabPanels>
    </Tabs>
  )
}