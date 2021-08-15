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
            
 
<div style={{display:"flex",justifyContent:"center"}}>

<div style={{width:"30%",display:'flex',justifyContent:'center',alignContent:"center"}}>

  

 
 <div >

 <p>Image</p>
 <p>Image</p>

 </div>
 
     
     
     </div>
     
 <div style={{width:"70%"}}>
<h1> Enroll</h1>
{this.state.filteredUSers?this.state.filteredUSers.map((item)=>(
    <div>
        {item.isStudent?
        null:
<div style={{width:'700px',minHeight:"140px",padding:' 0 0 30px 0px',border:"none"}}>
       
       <h2 style={{margin:'20px 0 5px 0px'}}>Professor {item.email}  
       </h2> 
       <span style={{margin:'10px 0 0 0',fontSize:"25px"}}>
          {item.myCourses? 'Courses' : null}
     
    </span>
    <div style={{margin:'25px 0 20px 0'}} > 
         
        {item.myCourses?item.myCourses.map((x)=>(
        <p style={{fontWeight:'300',textAlign:"left"}}>{x.subject}</p>
        
    )):null}</div>
    
    
    <span> <Button onClick={()=>{
    
    axios.post('/api/user/postmyteacher',{email:item.email,courses:item.myCourses},{
        headers: { authorization: localStorage.getItem('token') },
      })
      .then((res)=>{
          console.log(res,'res posting teacher')
      })
    
    }}>Register</Button></span>
     
    
    
    
           </div>
        }
        </div>
)):null}
 </div>
 

 </div>
        )
    }
}


 
 
{/* <div style={{backgroundColor:"orange"}} >
<div  >
<h1 className='title' style={{fontWeight:"500",color:'#ff0e7d'}}>
Enrolll
</h1>
</div>

{this.state.filteredUSers?
this.state.filteredUSers.map((item)=>(

 
    
    <div>
   {item.isStudent?
   null:


   <div style={{margin:'20px 0 0 0',textAlign:"center"}}>
    
   </div>
}
</div> 
)):<div></div>}
 

 </div> */}