import React, { Component } from 'react'
import { Button, Checkbox, Form,Container,Card,Grid } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class PickTeacher extends Component {

state= {
    userData:{},
    allTeachers:[],
    result:[],
    getTeacherById:{},
    filteredUSers:[],
    teacheremail:'',
    teachercourses:[]
}

componentDidMount() {
    // this.getAllTeacherData()
    this.getUserData()
    this.getOtherUserWhoAreTeachers()
    // console.log('im on pick teacher page...')
    // this.getTeacherData()
 

}

 
 
// getAllTeacherData = () => {
//     axios.get('/api/teacher/getallteacher').then((response)=>{
//       // console.log(response.data.myStocks[0].text,'user response')
//       this.setState({allTeachers:response.data},()=>{
//         console.log(response.data,'all teachers ')
//       })

//     })

 
//  }

 

 getUserData = () => {
     axios.get('/api/user/profile',{
        headers: { authorization: localStorage.getItem('token') },
      })
      .then((response)=>{
          this.setState({userData:response.data})
          console.log(response.data , 'my user data')
      })
 }

 getOtherUserWhoAreTeachers = () => {
     axios.get('/api/user/profiles',{
        headers: { authorization: localStorage.getItem('token') },
      })
      .then((res)=>{

       
        // let a = response.data.myCourses.filter(function (a) {
        //     return !this[a.subject] && (this[a.subject] = true);
        //   }, Object.create(null))
          
          
        //        this.setState({userData:response.data,myuserCourses:a})
          

          this.setState({filteredUSers:res.data},()=>{
              console.log(res.data,'checking for filtred users')
          })
      })
 }
 

    render() {
       

        return (
            
<Container>
<style>{'body { background-color:#edf0f3}'}</style>

<div style={{margin:'50px 40px 0 0'}}>
<div  >
<h1 style={{margin:" 0 0 20px 0"}}>
Enroll
</h1>
</div>


{/* {this.state.filteredUSers?
this.state.filteredUSers} */}

{this.state.filteredUSers?
this.state.filteredUSers.map((item)=>(




    
    <div>
   {item.isStudent?
   null:


   <div style={{margin:'20px 0 0 0',textAlign:"center"}}>
   <Card style={{width:'700px',minHeight:"140px",padding:' 0 0 30px 0'}}>
       
   <h2 style={{margin:'20px 0 10px 20px'}}>Professor {item.email}  
   </h2> 
   <span style={{margin:'10px 0 0 0',fontSize:"25px"}}>
      {item.myCourses? 'Courses' : null}
 
</span>
<Card.Description style={{color:"black"}}>
 
    <h3 style={{margin:'0 0 0px 0'}} > 



    
 
     
    {item.myCourses?item.myCourses.map((x)=>(
    <p style={{fontWeight:'300'}}>{x.subject}</p>
    
)):null}</h3>
</Card.Description>


<span> <Button onClick={()=>{

axios.post('/api/user/postmyteacher',{email:item.email,courses:item.myCourses},{
    headers: { authorization: localStorage.getItem('token') },
  })
  .then((res)=>{
      console.log(res,'res posting teacher')
  })

}}>Register</Button></span>
 

   
        
         
       
   

       </Card>
   </div>
}
</div> 
)):<div></div>}
 

 </div>
</Container>
        )
    }
}


 