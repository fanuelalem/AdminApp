 import React, { Component } from 'react'
import { Button, Checkbox, Form,Container,Card,Grid,Icon } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class MyCourses extends Component {

state= {
    userData:'',
    myuserCourses:[]
}

componentDidMount() {
    this.getUserData()
}

// jono@mail.com

getUserCourses = () => {
  axios.get('/api/user/mycourses',{
    headers: { authorization: localStorage.getItem('token') },
  })
  .then((res)=>{
    this.setState({myuserCourses:res.data})

  })
}

findCourseIdAndDelete = async (id) => {

  axios.delete(`api/user/course/${id}`,{
      headers: { authorization: localStorage.getItem('token') },
    })
  .then((response)=>{
   this.getUserCourses()
   })
} 


getUserData = () => {
  axios.get('/api/user/profile', {
    headers: { authorization: localStorage.getItem('token') },
  }).then((response)=>{
console.log(response.data.myCourses.filter(function (a) {
  return !this[a.subject] && (this[a.subject] = true);
}, Object.create(null)),'respnse data infor')

let a = response.data.myCourses.filter(function (a) {
  return !this[a.subject] && (this[a.subject] = true);
}, Object.create(null))




     this.setState({userData:response.data,myuserCourses:a}
   
      ,()=>{
      console.log(response.data.myCourses,
      
      'my courses profile')
    })

  })

 }

    render() {

 
     

        return (
            <Container>

<style>{'body { background-color:#edf0f3}'}</style>


             <div style={{margin:'50px 40px 0 0'}}>
 
 
 <div>
 <h1 style={{margin:'30px 0 0 0',fontSize:'35px',fontWeight:'bolder'}}> Teacher Dashboard</h1>
 <hr></hr>

 <h2 style={{margin:'9px 0 30px 0',fontWeight:'300'}}> My Courses</h2>

  </div>



 

   
<Container style={{backgroundColor:"white",border:'solid 1px grey',padding:'40px 35px 40px 35px',borderRadius:"15px"}}>
<div style={{minHeight:"200px"}}>

  
    {this.state.myuserCourses? this.state.myuserCourses.map((item)=>(
        <div >

           {/* <Container style={{width:"705px",height:"250px",margin:'10px 15px 30px 0'}}> */}
<div style={{textAlign:"center",margin:'15px 0 0 0'}}>

 

<h2 style={{margin:'0px 0 40px 0',fontSize:'35px',fontWeight:'600',color:'#545e81',textAlign:'left'}}> {item.subject} 

 <Button style={{margin:"0px 0 0 0",float:'right'}}color='red' onClick={()=>{
   this.findCourseIdAndDelete(item._id)
}}>
  <span>
  delete 
   <Icon name='x'></Icon>
  </span>
   
</Button></h2> 
 
 <div style={{margin:'20px 0 0 0'}}>
   
 
 {this.state.userData.isStudent?
 <Link
 as={Link}
 to={item.route}
 >
   <Button color='linkedin'> take Exam</Button>
 </Link>:
null}
     
</div>
<hr></hr>
</div> 
  {/* </Container>   */}

        </div>
      )):<p> you do not have any classes yey</p>}
      </div>

</Container>

            </div>
            </Container>
        )
    }
}
