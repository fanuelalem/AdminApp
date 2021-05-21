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

             <div style={{margin:'50px 40px 0 0'}}>
 <div style={{textAlign:"center"}}>
<h1>
  Add a Course to your curriculum 
     </h1>
    </div>

    

  <div style={{margin:'40px 0 0 0'}}>

    

  <Grid columns='three'  >
    <Grid.Row>
      <Grid.Column>
      <Card style={{width:"345px",height:"250px"}}>
<div style={{textAlign:"center",margin:'15px 0 0 0'}}>

<h2 style={{margin:'0 0 0 0'}}> Math 100: Intro to Math</h2> 
<Form onSubmit={this.addCourse}>

<Button onClick={()=>{
    this.setState({subject:'Math 100: Intro to Math',route:'/Math100'})
}} style={{margin:'30px 0 70px 0'}} color='twitter'>Select</Button>
    </Form> 
 

</div> 
  </Card>      </Grid.Column>
      <Grid.Column>
      <Card style={{width:"345px",height:"250px"}}>
<div style={{textAlign:"center",margin:'15px 0 0 0'}}>

<h2 style={{margin:'0 0 0 0'}}> Math 110: Intermediate Math</h2> 
<Form onSubmit={this.addCourse}>

<Button onClick={()=>{
    this.setState({subject:'Math 110: Intermediate Math',route:'/math110'})
}} style={{margin:'30px 0 70px 0'}} color='twitter'>Select</Button>
    </Form> 
</div>
  </Card>      </Grid.Column>
      <Grid.Column>
      <Card style={{width:"345px",height:"250px"}}>
<div style={{textAlign:"center",margin:'15px 0 0 0'}}>

<h2 style={{margin:'0 0 0 0'}}> Math200: AP Math</h2>
<Form onSubmit={this.addCourse}>

<Button onClick={()=>{
    this.setState({subject:'Math 200: AP Math',route:'/math200'})
}} style={{margin:'30px 0 70px 0'}} color='twitter'>Select</Button>
    </Form> 
</div>
    
  </Card>      
  
  </Grid.Column>
    </Grid.Row>
    </Grid>

    <Grid columns='three'  >
    <Grid.Row>
      <Grid.Column>
      <Card style={{width:"345px",height:"250px"}}>
<div style={{textAlign:"center",margin:'15px 0 0 0'}}>

<h2 style={{margin:'0 0 0 0'}}> Math 400: Advanced mathematics</h2>  
<Form onSubmit={this.addCourse}>

<Button onClick={()=>{
    this.setState({subject:'Math 400: Advanced mathematics',route:'/math400'})
}} style={{margin:'30px 0 70px 0'}} color='twitter'>Select</Button>
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
