import React from 'react';

class MarksTile extends React.Component{
render(){
const marks =this.props.createMarks;
//console.log("******",marks)
return(
<div>
<div style={{right:0, position:'absolute', padding:'5px'}}>
   <i id={marks._id} onClick={this.props.edit} class="fas fa-edit"></i>
   <i id={marks._id} onClick={this.props.delete} class="fas fa-trash"></i>
</div>
<table>
<tbody>
<tr>
<th>Id:</th>
<td>{marks.id}</td>
</tr>
<tr>
<th>name</th>
<td>{marks.student}</td>
</tr>
<tr>
<th>subject</th>
<td>{marks.subject}</td>
</tr>
<tr>
<th>marks</th>
<td>{marks.marks}</td>
</tr>


</tbody>
</table>



</div>


)

}
}

export default MarksTile;