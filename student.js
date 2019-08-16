import React, { Component } from 'react';
//import logo from './logo.svg'; //from folder
import { Row, Col } from 'react-bootstrap';
import StudentTile from './StudentTile';
import AddStudent from './AddStudent'
import axios from 'axios';
import './App.css'; 
import ReactTable from 'react-table'


class Student extends Component {                                                                                                       //createing class app from component i
constructor(){
super();
this.state={
show:false,
_id:'',
name:'',
age:'',
gender:'',
qualification:'',
students:[]
}}


componentDidMount(){
axios.get('http://localhost:4000/students')
.then(res=>{
//  alert(console.log(response.data));
//  this.setState({students:response.data});
const students = res.data;
this.setState({ students });
//console.log(students);

})
}


createStudent = ()=> {
const student = { 
id: (new Date()).getTime(),
name: this.state.name,
age: this.state.age,
gender: this.state.gender,
qualification: this.state.qualification
}


axios.post('http://localhost:4000/students',student)
.then(res=>{
this.setState({ 
students:res.data,
name:'',
age:'',
gender:'',
qualification:'',
show:false
}) 
});
}



updateStudent = () => {
const editStudent = { 
id: this.state.editId,
name: this.state.name,
age: this.state.age,
gender: this.state.gender,
qualification: this.state.qualification
}

// const students = this.state.students.map(student => student.id === editStudent.id ? editStudent : student);
    axios.put(`http://localhost:4000/students/${this.state.editId}`, editStudent)
.then(res=>{
this.setState({ 
students:res.data,
name: '',
age: '',
gender: '',
qualification: '',
editId: undefined,
show: false
});
})
}




editStudent=(event)=>{
const editStudent=this.state.students.find(student=> (event.target.id) === student._id);
this.setState({
show:true,
name:editStudent.name,
age:editStudent.age,
gender:editStudent.gender,
qualification:editStudent.qualification,
editId:editStudent._id

})
}

deleteStudent=(event) =>{
const students=this.state.students.filter(student => student._id !==(event.target.id))
alert("are you sure");
axios.delete(`http://localhost:4000/students/${event.target.id}`,students)
this.setState({ students });
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

render() {     
return (                                                                                                                  //it has only one child
<div>
<h2>students datails</h2>
<span>
<i class="fas fa-plus" onClick={this.showForm}></i> 
</span>

<Row >
<AddStudent
show={this.state.show}
name={this.state.name}
age={this.state.age}
gender={this.state.gender}
qualification={this.state.qualification}
onClose={this.handleClose}
handleChange={this.handleChange}
create={this.createStudent}
update={this.updateStudent}
id={this.state.editId}

/>



</Row>




{/* <Row>
{

this.state.students.map(student =>
<Col lg={4} style={{ border: '1px solid'}}>
<StudentTile 
createStudent={student} 
edit={this.editStudent}
delete={this.deleteStudent}
/>
</Col>
)
}

</Row> */}

<div>
       <ReactTable
            data={this.state.students}
            
            columns={[
              {
                Header: "id",
                accessor: "_id",
                Cell: this.renderEditable
              },
              {
                Header: "name",
                accessor: "name",
                Cell: this.renderEditable
              },
              {
                Header: "age",
                accessor: "age",
                Cell: this.renderEditable
              },{
                Header: "gender",
                accessor: "gender",
                Cell: this.renderEditable
              },
              {
                Header: "qualification",
                accessor: "qualification",
                Cell: this.renderEditable
              },
              {
                Header: "Full Name",
                id: "fullname",
                accessor: d => (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: d.firstname + " " + d.lastname
                    }}
                  />
                )
              }
            ]}
            defaultPageSize={1}
            style={{
              height: "100px" 
            }}
            className="-striped -highlight"
          /> 
        </div>


</div>

);
}
}

export default Student; //we can use this component any where 
