import { React } from 'react';
import {IGTabsNames} from '../../data/tabs.js'
import { Tabs, TabList, TabPanels, Tab, TabPanel, propNames } from "@chakra-ui/react"
import Link from 'next/link'
import styles from './tabbar.module.css'
//"product-management/" +
export default function TabsMenuIG(props){
    var base = "/interview-guide/" //(props.search !== undefined && props.search !== null && props.search !== "") ? "/interview-guide/":"/interview-guide/"
    return (
    <Tabs p={["5px", "5px", "10px", "10px"]}  defaultIndex={props.selection} variant="soft-rounded" className={styles.tabbar}>
        <TabList>
            {
                IGTabsNames.map((tabName) => 
                    <Link key={"link-" + tabName} href={base + tabName.replace(/\s/g, '').replace(/&/g, '').toLowerCase() + ((props.search !== undefined && props.search !== null && props.search !== "")?("/" + props.search):"")} passHref>
                        <Tab bg='kalooteGray.100' key={tabName} mx={4} /* textStyle={'tabs'} */ fontWeight={"bold"} textAlign={'center'} fontSize={["3vw", "2.5vw", '1.5vw', "0.95vw"]} >{tabName}</Tab>
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