import React from 'react';





class StudentTile extends React.Component{
    render(){
const student =this.props.createStudent;
return(
    
     <div>
        <div style={{right:0, position:'absolute', padding:'5px'}}>
   <i id={student._id} onClick={this.props.edit} class="fas fa-edit"></i>
   <i id={student._id} onClick={this.props.delete} class="fas fa-trash"></i>
</div>

    <table>
        <tbody>
            <tr>
                <th>Id:</th>
                <td>{student._id}</td>
            </tr>
            <tr>
                <th>Name:</th>
                <td>{student.name}</td>
            </tr>
            <tr>
                <th>Age:</th>
                <td>{student.age}</td>
            </tr>
            <tr>
                <th>Gender:</th>
                <td>{student.gender}</td>
            </tr>
            <tr>
                <th>Qualification:</th>
                <td>{student.qualification}</td>
            </tr>    
        </tbody>
    </table>



</div>
)
}
}

export default StudentTile;