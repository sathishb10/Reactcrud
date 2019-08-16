import React,{ Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import MarksTile from './MarksTile';
import Addmarks from './Addmarks';
import axios from 'axios';
import './App.css'; 

class Marks extends Component{

    constructor(){
        super();
        this.state={
        show:false,
        _id:'',
        nameddl:'',
        subjddl:'',
        mark:'',
        marks:[ ],
       subject:[]

     }
}

componentDidMount(){

axios.get('http://localhost:4000/marks')
.then(res=>{
const marks=res.data;
this.setState({ marks });
console.log(marks);
})
}

getnames=()=>{
    axios.get("http://localhost:4000/students/getnames")
   .then(res=>{

    const names=res.data;
    this.setState({ names});
   } )

}

getsubject=()=>{
 axios.get("http://localhost:4000/students/getnames")
 .then(res=>{
     const subject=res.data;
     this.setState({subject});
 })


}

    showForm = () => {
       
    this.setState({ show: true });
    }
    
    handleClose = () => {
    this.setState({ show: false });
    }
    
    handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
    }


render(){

    return(
<div>
<span>
<i class="fas fa-plus" onClick={this.showForm}></i> 
</span>

<Row>
{
  this.state.subject.map(subj =>

<Addmarks
addsubject={subj}
show={this.state.show}
onClose={this.handleClose}
handleChange={this.handleChange}
/>
)
}

</Row>


<Row>
    {

this.state.marks.map(mark=>
    <Col lg={4} style={{ border: '1px solid'}}>
    
<MarksTile
createMarks={mark}
edit={this.editMarks}
delete={this.deleteMarks}

/>
</Col>
    )
    }
    </Row>


</div>


)
}}

export default Marks;