
 import React, { Component } from 'react'
 import { Button, Checkbox, Form,Container,Card,Grid } from 'semantic-ui-react'
 import axios from 'axios'
 import { Link } from 'react-router-dom';

export default class MyTeacherCourses extends Component {
    state= {
         myTeacherCourses:[]

     }
     componentDidMount = () =>{
        this.getMyTeacherCourses()
    }

  
    getMyTeacherCourses = () => {

        axios.get('/api/teacher/teachercourses',{ headers: { 'authorization': localStorage.getItem('teachertoken')} })
        .then((response)=>{
         
            this.setState({myTeacherCourses:response.data})
   console.log(response.data,'my coursesk')
        })
   }

 findTeacherCourseByIdAndDelete = async (id) => {

    axios.delete(`api/teacher/course/${id}`,{
        headers: { authorization: localStorage.getItem('teachertoken') },
      })
    .then((response)=>{
     this.getMyTeacherCourses()
     })
} 

   

   
    
  
   
      

    render() {
        return (
            <Container>

            <div style={{margin:'50px 40px 0 0'}}>
<div style={{textAlign:"center"}}>
<h1>
 Courses
    </h1>
   </div>





 

   {this.state.myTeacherCourses? this.state.myTeacherCourses.map((item)=>(
       <div >

          <Card style={{width:"345px",height:"250px",float:'left',margin:'10px 15px 0 0'}}>
<div style={{textAlign:"center",margin:'15px 0 0 0'}}>

<Button style={{margin:"20px 0 0 0"}}color='red' onClick={()=>{
   this.findTeacherCourseByIdAndDelete(item._id)
}}>
   delete by id
</Button>
<div style={{margin:'20px 0 0 0'}}>
  

 <p style={{display:'flex',justifyContent:'center'}}>{item._id}</p>
</div>
<h2 style={{margin:'40px 0 0 0'}}> <h2> {item.subject}</h2></h2> 


 

</div> 
 </Card>  

       </div>
     )):'You Do Not Have Any Classes Yet'}

           </div>
           </Container>

 
        )
    }
}








 
 
//  export default class MyCourses extends Component {
 
 
 
 
  
 
//      render() {
 
  
      
 
//          return (
           

 


//          )
//      }
//  }
 