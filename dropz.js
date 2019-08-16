import React, { Component } from 'react'
import  Dropzone  from 'react-dropzone'
import axios from 'axios';

const imageMaxSize =10000000
const acceptedFileTypes= 'image/jpg,image/jpeg,image/png'
const acceptedFileTypesArray=acceptedFileTypes.split(",").map((item) =>{return item.trim()})
class Dropz extends Component{
    constructor(props) {
        super(props)
        this.state = {
          imgsrc: []
        }
      }

verifyFile =(files) =>{
    
    if(files && files.length>0){
        const currentFile =files[0]
        const currentFileType=currentFile.type
        const currentFileSize=currentFile.size
        if (currentFileSize>imageMaxSize){
            alert("this file is too big")
            return false }
            if(!acceptedFileTypesArray.includes(currentFileType)){
                alert("this file is not allowed.Only image is Allowed")
                return false
            }

        return true    
}
}

       handleOnDrop =(files, rejectedFiles)=>{
         console.log(files)
        if(rejectedFiles && rejectedFiles.length>0){
         console.log('rejectedfiles',rejectedFiles)
this.verifyFile(rejectedFiles)
        }

      if(files && files.length>0){
const isVerified=this.verifyFile(files)
if(isVerified){
   // imageBase64
   const currentFile=files[0]
   const reader=new FileReader()                                  //javascript api filereader meathod
reader.addEventListener("load",()=>{                             //if image load this method runs 

  console.log(reader.result)
  axios.post('http://localhost:4000/image',reader)
  .then(res=>{
    console.log("^^^",res)
   this.setState({
    imgSrc:reader.result
 })
})
},false)

reader.readAsDataURL(currentFile)


}
}}
    
      
    
      render() {
        const {imgSrc} =this.state    
        return (
          
          <section>
            {imgSrc !==null?
              <div>
                {imgSrc}
              <img src ={imgSrc}/>
              </div>:''}
            <Dropzone
              onDrop={this.handleOnDrop} maxSize={imageMaxSize}
               multiple={false} accept={acceptedFileTypes }
            >
              {({getRootProps, getInputProps}) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                    <p>Drop files here, or click to select files</p>
                </div>
              )}
            </Dropzone>
           
          </section>
        );
      }
    }
    
export default Dropz