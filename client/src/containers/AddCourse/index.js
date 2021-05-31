import React, { Component } from 'react'
import { Button, Checkbox, Form,Container,Card,Icon,Grid } from 'semantic-ui-react'
import axios from 'axios'

export default class AddCourse extends Component {
 
state = {
    subject:'',
    route:''
}
 
// addCourse = () => {

// axios.post('/api/user/mycourses',{subject:'testing',route:'testj g'},
// { headers: { 'authorization': localStorage.getItem('token')}} ).then((response)=>{
//     console.log(response.data,'post my course')
// })


// }

addCourse = () =>{
     axios.post('/api/user/mycourses',{subject:this.state.subject,route:this.state.route},{
        headers: { authorization: localStorage.getItem('token') },
      })
      .then((res)=>{
          console.log(res,'res')
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

 <h2 style={{margin:'9px 0 30px 0',fontWeight:'300'}}> Add an exercise To Your Class</h2>

  </div>
 

    

  <div style={{margin:'40px 0 0 0'}}>

    
    <Container style={{backgroundColor:"white",border:'solid 1px grey',padding:'40px 35px 40px 35px',borderRadius:"15px"}}>



    <h2 style={{margin:'0px 0 40px 0',fontSize:'35px',fontWeight:'400',color:'#545e81',textAlign:'left'}}> English 100: Intro to English

 
 
    <Form onSubmit={this.addCourse} style={{float:'left',margin:'0 20px 0 0'}}>

<Button onClick={()=>{
    this.setState({subject:'English 100: Intro to English',route:'/Math100'})
}} style={{margin:'0px 0 0px 0' ,color:'white'}} color='teal'>Select</Button>
    </Form> 
</h2>


<h2 style={{margin:'0px 0 40px 0',fontSize:'35px',fontWeight:'400',color:'#545e81',textAlign:'left'}}> English 214: Intermediate English

 
 
<Form onSubmit={this.addCourse} style={{float:'left',margin:'0 20px 0 0'}}>

<Button onClick={()=>{
this.setState({subject:'English 214: Intermediate English',route:'/Math110'})
}} style={{margin:'0px 0 0px 0',color:'white'}} color='teal'>Select</Button>
</Form> 
</h2>

<h2 style={{margin:'0px 0 40px 0',fontSize:'35px',fontWeight:'400',color:'#545e81',textAlign:'left'}}>English 363: AP English

 
 
<Form onSubmit={this.addCourse} style={{float:'left',margin:'0 20px 0 0'}}>

<Button onClick={()=>{
this.setState({subject:'English 363: AP English',route:'/Math200'})
}} style={{margin:'0px 0 0px 0',color:'white'}}color='teal' >Select</Button>
</Form> 
</h2>
 

<h2 style={{margin:'0px 0 40px 0',fontSize:'35px',fontWeight:'400',color:'#545e81',textAlign:'left'}}>English 400: Advanced English

 
 
<Form onSubmit={this.addCourse} style={{float:'left',margin:'0 20px 0 0'}}>

<Button onClick={()=>{
this.setState({subject:'English 400: Advanced English',route:'/Math400'})
}} style={{margin:'0px 0 0px 0',color:'white'}} color='teal' >Select</Button>
</Form> 
</h2>
  </Container>     


  
  
    
      
  
   
    </div>

            </div>
            </Container>

        )
    }
}
