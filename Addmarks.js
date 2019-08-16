import React from 'react'
import {Modal,Button} from 'react-bootstrap'

class Addmarks extends React.Component{
    
render(){
    //const student =this.props.addsubject;

return(
    <div>
<Modal show={this.props.show} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>

                        <select id="subjt">
                                        <option value="--Select--">--Select--</option>
                                    </select>
                        </label>
                        <label>
                        <select id="subjt">
                                        <option value="--Select--">--Select--</option>
                                    </select> </label>

                                    <label>Name:</label>
                            <input type="text" name="mark" onChange={this.props.handleChange} value={this.props.subject} />
                     
                        
                            
                       

                        
                        
                        
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    {  <Button onClick={this.props.create}>Save</Button> }
                    {   <Button onClick={this.props.update}>Update</Button> }
                </Modal.Footer>
            </Modal></div>


)

}



}
export default Addmarks