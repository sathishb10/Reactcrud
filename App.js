import React, { Component } from 'react';
import logo from './logo.svg'; //from folder
import './App.css'; //it is commponet
import AnotherApp from './anotherApp';

class App extends Component {                                                                                                       //createing class app from component i
  constructor(){
    super();
    this.state={
      textchange:"firstdiv",
      textchange2:"senddiv"

    }
  }
  changeText=(event)=>{
    this.setState({textchange2:event.target.value});
    this.setState({textchange:event.target.value});
  }
  
  render() {     
    return (                                                                                                                  //it has only one child
  
<div>

  <div className="App">
      name:<input type="text"  onChange={this.changeText}></input>
      <row>
<col-sm-5>
<h1 >{this.state.textchange}</h1>
<h1>{this.state.textchange2}</h1>
</col-sm-5>

      </row>
      
    </div>
    <AnotherApp/>
    </div>
  
         );
  }
}

export default App; //we can use this component any where 
