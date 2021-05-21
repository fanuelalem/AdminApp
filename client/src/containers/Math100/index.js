import React, { Component } from 'react';

import { Grid,Divider,Header, Form, Segment,Card, Message,Table, List, Pagination, Button, Icon } from 'semantic-ui-react';
 

  
import axios from 'axios';

 

export default class Math110 extends Component {

    state={
        result:0,
        total:0,
        points:0,
        userData:'',
        average:0,
        myaverage:0
      

    }
    
    
    componentDidMount() {
        this.getUserData()
    }
   
    
    getUserData = () => {
      axios.get('/api/user/profile',{
        headers: { authorization: localStorage.getItem('token') },
      })
      .then((res)=>{
         this.setState({userData:res.data})

      })
    }
 

    submitAnswers = (event) => {
        event.preventDefault()
        
        let score = 0
          
        const q1 = document.forms["quizForm"]["q1"].value;
        const q2 = document.forms["quizForm"]["q2"].value;
        const q3 = document.forms["quizForm"]["q3"].value;
        const q4 = document.forms["quizForm"]["q4"].value;
        const q5 = document.forms["quizForm"]["q5"].value;
                   
            
                    let answers = ['a','b','c','d','e']
                    

                    if(q1 === answers[0]){
                        score+=20
                    }
                    if(q2 === answers[0]){
                        score+=20
                    }
                    if(q3 === answers[0]){
                        score+=20
                    }
                    if(q4 === answers[0]){
                        score+=20
                    }
                    if(q5 === answers[0]){
                        score+=20
                     }
                    
                    this.setState({total:score})

 
                   axios.post('/api/user/mytotal',{points:score},{
                    headers: { authorization: localStorage.getItem('token') },
                  })
                  .then((res)=>{
                   
                     axios.get('/api/user/mytotal',{
                      headers: { authorization: localStorage.getItem('token') },
                    })
                    .then((response)=>{
                      let sum = response.data?response.data.map((item)=>{
                          return item.points
                      }):null
                     
                      // sum.reduce((a, b) => a + b, 0)/sum.length 
                      axios.post('/api/user/myaverage',{average:sum.reduce((a, b) => a + b, 0)/sum.length },{
                        headers: { authorization: localStorage.getItem('token') },
                      }) 
                      .then((j)=>{
                      


                        console.log(j.data.average,'j average??')
                        this.setState({myaverage:j.data.average})

                        axios.get('api/user/myaverage',{
                          headers: { authorization: localStorage.getItem('token') },
                        })
                        .then((ccc)=>{
                          console.log(ccc,'is this getting my response?')
                        })
                      })


                    })










                  })
                  
               
                                     
                     
         }

 

    render() {
        return (
            <div style={{textAlign:"center"}}>
               {/* {console.log(this.state,'this.state')} */}
    {/* <h2> your score  {this.state.total}  </h2>  */}
    
    <h3>
      {this.state.myaverage == 0? null : 
      <div>

       
       <h2> Your Average</h2> {this.state.myaverage.toFixed(2)+'%'}
       </div>
       }
    
   {console.log(this.state.userData,'is this user data?')}
     
    
    </h3>

    {/* <p>{this.state.userData?this.state.userData.myAverage.map((j)=>(<p>

{j.average[0]}
</p>)):null}</p> */}
    {console.log(this.state,'this state')}

                   <h2> Intro to mathematics</h2>
  
<div>
  
                  <form  name="quizForm" onSubmit={this.submitAnswers}>
                      <div style={{display:'flex',justifyContent:'center',margin:"45px 0 20px 0"}}>
                      <Card style={{width:"550px",padding:"30px 30px 30px 30px"}}>

<div>

<h2 style={{margin:" 0 0 20px 0"}}>question 1</h2></div>

<div className="jumbotron jumbotron-fluid">
<div style={{textAlign:'center'}} className="container">
<div className="form-check form-check-inline center">

<Grid>
<Grid.Row columns={6}>
<Grid.Column>
<div >
<input style={{visibility:"hidden"}} className="form-check input" id="q1a"value="a" name="q1"type="radio"  ></input>
<div className='a' style={{backgroundColor:'#e3e6ea',padding:'5px 10px 5px 10px',borderRadius:'5px'}}>
<label for='q1a'>0</label>
 </div>
 

</div>
</Grid.Column>
<Grid.Column>
<div className="form-check">
<input style={{visibility:"hidden"}} className="form-check input" id="q1b"value="b" name="q1"type="radio"></input>
<div className='a' style={{backgroundColor:'#e3e6ea',padding:'5px 10px 5px 10px',borderRadius:'5px'}}>
<label for='q1b'>44</label>
</div>
 

<br></br>
</div>      
</Grid.Column>
<Grid.Column>
<div className="form-check">
<input style={{visibility:"hidden"}} className="form-check input" id="q1c"value="c" name="q1"type="radio"></input>
<div className='a' style={{backgroundColor:"#e3e6ea",padding:'5px 10px 5px 10px',borderRadius:'5px'}}>
<label for='q1c'>23</label>
</div>
 

<br></br>
</div>      </Grid.Column>
<Grid.Column>
<div className="form-check">
<input style={{visibility:"hidden"}} className="form-check input" id="q1d"value="d" name="q1"type="radio"></input>
<div className='a' style={{backgroundColor:"#e3e6ea",padding:'5px 10px 5px 10px',borderRadius:'5px'}}>
<label for='q1d'>23</label>

</div>
 
 <br></br>
</div>      </Grid.Column>
<Grid.Column>
<div className="form-check">
<input style={{visibility:"hidden"}} className="form-check input" id="q1e"value="e" name="q1"type="radio"></input>
<div className='a' style={{backgroundColor:"#e3e6ea",padding:'5px 10px 5px 10px',borderRadius:'5px'}}>
<label for='q1e'>32</label>

</div>
 
 <br></br>
</div>      </Grid.Column>
<Grid.Column>
<div className="form-check">
<input style={{visibility:"hidden"}} className="form-check input" id="q1f"value="f" name="q1"type="radio"></input>
<div className='a' style={{backgroundColor:"#e3e6ea",padding:'5px 10px 5px 10px',borderRadius:'5px'}}>
<label  for='q1f'>3</label>

</div>
 </div>   


</Grid.Column>
</Grid.Row>
</Grid>







</div>
</div>
</div>
</Card>
                      </div>

                      
                      <div style={{display:'flex',justifyContent:'center',margin:"45px 0 20px 0"}}>
                      <Card style={{width:"550px",padding:"30px 0 30px 0"}}>

                <div><h2 style={{margin:" 0 0 20px 0"}}>question 2</h2>
</div>       


 <Grid>
                      <Grid.Row columns={5}>
      <Grid.Column>
      <div >
    <input className="form-check input" id="q2a"value="a" name="q2"type="radio"></input>1 
    </div>      </Grid.Column>
      <Grid.Column>
      <div className="form-check">
    <input className="form-check input" id="q2b"value="b" name="q2"type="radio"></input>2<br></br>
    </div>      </Grid.Column>
      <Grid.Column>
      <div className="form-check">
    <input className="form-check input" id="q2c"value="c" name="q2"type="radio"></input>3 <br></br>
    </div>      </Grid.Column>
      <Grid.Column>
      <div className="form-check">
    <input className="form-check input" id="q2d"value="d" name="q2"type="radio"></input>4 <br></br>
    </div>      </Grid.Column>
      <Grid.Column>
      <div className="form-check">
    <input className="form-check input" id="q2e"value="e" name="q2"type="radio"></input>5 
    </div>      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Card>

</div>
                      
 
        
<div style={{display:'flex',justifyContent:'center',margin:"45px 0 20px 0"}}>
                      <Card style={{width:"550px",padding:"30px 0 30px 0"}}>

                <div><h2 style={{margin:" 0 0 20px 0"}}>question 3</h2>
</div>       
<Grid>
     <Grid.Row columns={5}>
      <Grid.Column>
      <div >
    <input className="form-check input" id="q3a"value="a" name="q3"type="radio"></input>1 
    </div>      </Grid.Column>
      <Grid.Column>
      <div className="form-check">
    <input className="form-check input" id="q3b"value="b" name="q3"type="radio"></input>2<br></br>
    </div>      </Grid.Column>
      <Grid.Column>
      <div className="form-check">
    <input className="form-check input" id="q3c"value="c" name="q3"type="radio"></input>3 <br></br>
    </div>      </Grid.Column>
      <Grid.Column>
      <div className="form-check">
    <input className="form-check input" id="q3d"value="d" name="q3"type="radio"></input>4 <br></br>
    </div>      </Grid.Column>
      <Grid.Column>
      <div className="form-check">
    <input className="form-check input" id="q3e"value="e" name="q3"type="radio"></input>5 
    </div>      </Grid.Column>
    </Grid.Row>
  </Grid>

     </Card>
 </div>




<div style={{display:'flex',justifyContent:'center',margin:"45px 0 20px 0"}}>
                      <Card style={{width:"550px",padding:"30px 0 30px 0"}}>

                <div><h2 style={{margin:" 0 0 20px 0"}}>question 4</h2></div>
<Grid>

<Grid.Row columns={5}>
      <Grid.Column>
      <div >
    <input className="form-check input" id="q4a"value="a" name="q4"type="radio"></input>1 
    </div>      </Grid.Column>
      <Grid.Column>
      <div className="form-check">
    <input className="form-check input" id="q4b"value="b" name="q4"type="radio"></input>2<br></br>
    </div>
      </Grid.Column>
      <Grid.Column>
      <div className="form-check">
    <input className="form-check input" id="q4c"value="c" name="q4"type="radio"></input>3 <br></br>
    </div>      </Grid.Column>
      <Grid.Column>
      <div className="form-check">
    <input className="form-check input" id="q4d"value="d" name="q4"type="radio"></input>4 <br></br>
    </div>      </Grid.Column>
      <Grid.Column>
      <div className="form-check">
    <input className="form-check input" id="q4e"value="e" name="q4"type="radio"></input>5 
    </div>      </Grid.Column>
    </Grid.Row>
  </Grid>

  </Card>
 </div>

 
 <div style={{display:'flex',justifyContent:'center',margin:"45px 0 20px 0"}}>
                      <Card style={{width:"550px",padding:"30px 0 30px 0"}}>

                <div><h2 style={{margin:" 0 0 20px 0"}}>question 4</h2></div>
    
<Grid>
 <Grid.Row columns={5}>
      <Grid.Column>
      <div >
    <input className="form-check input" id="q5a"value="a" name="q5"type="radio"></input>1 
    </div>      </Grid.Column>
      <Grid.Column>
      <div className="form-check">
    <input className="form-check input" id="q5b"value="b" name="q5"type="radio"></input>2<br></br>
    </div>      </Grid.Column>
      <Grid.Column>
      <div className="form-check">
    <input className="form-check input" id="q5c"value="c" name="q5"type="radio"></input>3 <br></br>
    </div>      </Grid.Column>
      <Grid.Column>
      <div className="form-check">
    <input className="form-check input" id="q5d"value="d" name="q5"type="radio"></input>4 <br></br>
    </div>      </Grid.Column>
      <Grid.Column>

      <div className="form-check">
    <input className="form-check input" id="q5e"value="e" name="q5"type="radio"></input>5 
    </div>      </Grid.Column>
    </Grid.Row>
  </Grid>
    
 </Card>

 

 </div>
 

 
    
 

<form style={{paddingTop:'18px',paddingBottom:'10px'}}class="form-inline">
  <div class="form-group">
       
{/*         
       <input className="btn btn-success submit" 
onClick={this.submitAnswers}
 type="submit" 
 value="submit">
     
     </input>   */}

     <Button
     onClick={this.submitAnswers}
     >
submit
     </Button>

 
  </div>

</form>
                 
                 
                  </form>

                </div>
  
            </div>
        )
    }
}


 