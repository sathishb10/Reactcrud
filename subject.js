import React, { Component } from 'react';
//import logo from './logo.svg'; //from folder
import { Row, Button, Col } from 'react-bootstrap';
import Addsubject from './Addsubject'
import SubjectTile from './SubjectTile'
import axios from 'axios';
import './App.css';



class Subject extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            _id: '',
            subject: '',
            subjects: []
        }
    }

    
    componentDidMount() {
        axios.get('http://localhost:4000/subjects')
            .then(res => {
                //  alert(console.log(response.data));
                //  this.setState({students:response.data});
                const subjects = res.data;
                this.setState({ subjects });
            })
    }
     
    
    createSubject = () => {
        const subject = {
            id: (new Date()).getTime(),
            subject: this.state.subject
        }
        axios.post('http://localhost:4000/subjects', subject)
           .then(res => {
                this.setState({
                    Subjects: res.data,
                    subject: '',
                    show: false
                });
            })
    }
     updateSubject = () => {
         const editSubject = { 
         id: this.state.editId,
       subject: this.state.subject
        
     }
         axios.put(`http://localhost:4000/subjects/${this.state.editId}`, editSubject)
             
         .then(res=>{
         this.setState({ 
         Subjects:res.data,
         subject: '',
         editId: undefined,
         show: false
         });
         })
         }
        
    



    editSubject=(event)=>{

        const editSubject=this.state.subjects.find(subject=>(event.target.id) === subject._id);
      this.setState({
    show:true, 
    subject:editSubject.subject,
    editId:editSubject._id
 })
    }

    
    deleteSubject = (event) => {
        const subjects = this.state.subjects.filter(sub => sub._id !== (event.target.id))
        axios.delete(`http://localhost:4000/subjects/${event.target.id}`, subjects)
        this.setState({ subjects })
    }


    showForm = () => {
         this.setState({ show: true });
    }
   
    handleClose = () => {
        this.setState({ show: false });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }



    render() {
        return (                                                                                                                  //it has only one child
            <div>
                <h2>subjects datails</h2>
                <Row>
                    <Button onClick={this.showForm}>addsubject</Button>
                    <Addsubject
                       show={this.state.show}
                        Close={this.handleClose}
                        subject={this.state.subject}
                        handleChange={this.handleChange}
                        create={this.createSubject}
                        update={this.updateSubject}

                    />
                    </Row>




                <Row>

                    {
                        this.state.subjects.map(subject =>
                         <Col lg={4} style={{ border: '1px solid' }}>
                                <SubjectTile
                                    createSubject={subject}
                                    delete={this.deleteSubject}
                                    edit={this.editSubject}

                                />

                            </Col>
                        )

                    }

                </Row>

            </div>
        );
    }
}

export default Subject;