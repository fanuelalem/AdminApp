import React, { Component } from 'react'
import { Button, Checkbox, Form,Container,Card,Icon,Grid } from 'semantic-ui-react'
import axios from 'axios'

export default class TeacherCourse extends Component {
 
state = {
    subject:'',
    route:''
}
 componentDidMount = () => {
     this.getTeacherCourse()
 }


addCourse = () => {

axios.post('/api/teacher/teachercourses',{subject:this.state.subject,route:this.state.route},{ headers: { 'authorization': localStorage.getItem('teachertoken')}} ).then((response)=>{
    console.log(response.data,'post my course')
})


}

getTeacherCourse = () => {
console.log('im checking?')
    axios.get('/api/teacher/teachercourses',{ headers: { 'authorization': localStorage.getItem('teachertoken')}} ).then((response)=>{
        // console.log(response.data,'get my course')
    })
    
    
    }

 

    render() {
        return (
            <Container>

             <div style={{margin:'50px 40px 0 0'}}>
 <div style={{textAlign:"center"}}>
<h1>


Add a Class

     </h1>
    </div>

    

  <div style={{margin:'40px 0 0 0'}}>

    

  <Grid columns='three'  >
    <Grid.Row>
      <Grid.Column>
      <Card style={{width:"345px",height:"250px",float:'left',margin:'10px 15px 0 0',background:"linear-gradient(#D3CCE3, #E9E4F0)"}}>
<div style={{textAlign:"center",margin:'15px 0 0 0'}}>

<h2 style={{margin:'0 0 0 0',color:"black"}}>  Math 100: Intro to Math</h2> 
<Form onSubmit={this.addCourse}>

<Button  onClick={()=>{
    this.setState({subject:'Math 100: Intro to Math',route:'/Math100'})
}} style={{margin:'30px 0 70px 0',backgroundColor:'white'}} >Select</Button>
    </Form> 
 

</div> 
  </Card>      </Grid.Column>
      <Grid.Column>
      <Card style={{width:"345px",height:"250px",float:'left',margin:'10px 15px 0 0',background:"linear-gradient(#D3CCE3, #E9E4F0)"}}>
<div style={{textAlign:"center",margin:'15px 0 0 0'}}>

<h2 style={{margin:'0 0 0 0',color:"black"}}> Math 110: Intermediate Math</h2> 
<Form onSubmit={this.addCourse}>

<Button onClick={()=>{
    this.setState({subject:'Math 110: Intermediate Math',route:'/math110'})
}} style={{margin:'30px 0 70px 0',backgroundColor:'white'}} >Select</Button>
    </Form> 
</div>
  </Card>      </Grid.Column>
      <Grid.Column>
      <Card style={{width:"345px",height:"250px",float:'left',margin:'10px 15px 0 0',background:"linear-gradient(#D3CCE3, #E9E4F0)"}}>
<div style={{textAlign:"center",margin:'15px 0 0 0'}}>

<h2 style={{margin:'0 0 0 0',color:"black"}}>  Math200: AP Math</h2>
<Form onSubmit={this.addCourse}>

<Button onClick={()=>{
    this.setState({subject:'Math 200: AP Math',route:'/math200'})
}} style={{margin:'30px 0 70px 0',backgroundColor:'white'}} >Select</Button>
    </Form> 
</div>
    
  </Card>      
  
  </Grid.Column>
    </Grid.Row>
    </Grid>

    <Grid columns='three'  >
    <Grid.Row>
      <Grid.Column>
      <Card style={{width:"345px",height:"250px",float:'left',margin:'10px 15px 0 0',background:"linear-gradient(#D3CCE3, #E9E4F0)"}}>
<div style={{textAlign:"center",margin:'15px 0 0 0'}}>

<h2 style={{margin:'0 0 0 0',color:"black"}}> Math 400: Advanced mathematics</h2>  
<Form onSubmit={this.addCourse}>

<Button onClick={()=>{
    this.setState({subject:'Math 400: Advanced mathematics',route:'/math400'})
}} style={{margin:'30px 0 70px 0',backgroundColor:'white'}} >Select</Button>
    </Form> 
</div> 
  </Card>      </Grid.Column>
      <Grid.Column>
          
  </Grid.Column>
      <Grid.Column>
          
  
  </Grid.Column>
    </Grid.Row>
    </Grid>
    </div>

            </div>
            </Container>

        )
    }
}
