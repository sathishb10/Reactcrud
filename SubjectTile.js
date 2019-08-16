import React from 'react';

class SubjectTile extends React.Component{
    render(){
        const subject=this.props.createSubject;

       // console.log(subject)
return(
<div>
<div style={{right:0, position:'absolute', padding:'5px'}}>

<i id={subject._id} onClick={this.props.delete} class="fas fa-trash"></i>
<i id={subject._id} onClick={this.props.edit} class="fas fa-edit"></i>
</div>

<table>
<tbody>
<tr>
    <th>Id</th>
<td>{subject._id}</td>
</tr>
<tr>
<th>subject</th>
<td>
{subject.subject}
</td>


</tr>



</tbody>



</table>

</div>
)
   }




}


export default SubjectTile