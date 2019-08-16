import React from 'react'
import {Modal, Button} from 'react-bootstrap'




class Addsubject extends React.Component{

    render(){

return(
<Modal show={this.props.show} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div>
                            <label>Name:</label>
                            <input type="text" name="subject" onChange={this.props.handleChange} value={this.props.subject} />
                        </div>
                        
                        
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    {  <Button onClick={this.props.create}>Save</Button> }
                    {   <Button onClick={this.props.update}>Update</Button> }
                </Modal.Footer>
            </Modal>
        )
    }
}



export default Addsubject;









