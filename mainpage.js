import React, { Component } from 'react'
//import logo from './logo.svg'; //from folder

import {Tabs,Tab,TabList,TabPanel} from 'react-tabs'
import Student from './student'
import Subject from './subject'
import  Mark from './marks'
import Dropz from './dropz'
import Hjk from './hjk'
import Datagrid from './Datagrid'

import './App.css'


class Mainpage extends Component{

constructor(){
super();
this.state={
 show:false

}}

showStudent=() =>{
    this.setState({show:true});
    }
    
render(){
return(
<div>
<row >
    <col-sm-12>
<Tabs>
        <TabList>
          <Tab >Title 1
          

          </Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 3</Tab>
          <Tab>Title 4</Tab>
          <Tab>Title 5</Tab>
          <Tab>Title 6</Tab>
          
        </TabList>
        <TabPanel>
        <Dropz/>
        </TabPanel>
       
        <TabPanel>
        <Student/>
        </TabPanel>
        
        <TabPanel>
        <Subject/>
        </TabPanel>
        
        <TabPanel>
      
        <Mark/>
        </TabPanel>
        <TabPanel>
      
      <Datagrid/>
      </TabPanel>
      <TabPanel>
      
      <Datagrid/>
      </TabPanel>
    
      </Tabs>
      </col-sm-12>
</row>

</div>


)

}}

export default Mainpage