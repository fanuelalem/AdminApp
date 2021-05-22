import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'
import { Button, Checkbox, Form,Container,Card,Grid } from 'semantic-ui-react'
import axios from 'axios'

export default class Quiz extends Component {


state={
    currentQuestion:0,
    showScore:false,
    score:0,
    total:0,
    axiospost:0,
    increment:0,
    counter:0,
    myaverage:0
}
    Questions = [
        {
            questionText:'The product of 4x and 0 is:',
            answerOptions:[
                {answerText:'4x',isCorrect:false},
                {answerText:'4',isCorrect:false},
                {answerText:'0',isCorrect:true},
                {answerText:'none of the above',isCorrect:false},
            ]

        },
        {
            questionText:'Solve 2x – y = 6, x – y = 2.',
            answerOptions:[
                {answerText:'x = 4 and y = 2',isCorrect:false},
                {answerText:'x = 4 and y = -2',isCorrect:false},
                {answerText:'x = -4 and y = -2',isCorrect:true},
                {answerText:'x = -4 and y = -2',isCorrect:false},
            ]

        },
        {
            questionText:'75% of 200 is',
            answerOptions:[
                {answerText:'150',isCorrect:true},
                {answerText:'125',isCorrect:false},
                {answerText:'175',isCorrect:false},
                {answerText:'100',isCorrect:false},
            ]

        },
        {
            questionText:'In a race , Ram covers 5 km in 20 min. How much distance will he cover in 100 min ?',
            answerOptions:[
                {answerText:'40 km',isCorrect:false},
                {answerText:'26 km',isCorrect:false},
                {answerText:'35 km',isCorrect:false},
                {answerText:'25 km',isCorrect:true},
            ]

        },
        {
            questionText:'In a class there are 30 boys and 12 girls. Determine the ratio of number of boys to girls.',
            answerOptions:[
                {answerText:'04:03',isCorrect:false},
                {answerText:'02:05',isCorrect:false},
                {answerText:'03:04',isCorrect:false},
                {answerText:'05:02',isCorrect:true},
            ]

        }
    ]
 
   
 

   handleNext = (isCorrect) => {
             
    
             let increment = 0
             if(isCorrect=== true){
                this.setState({score:this.state.score+20})
             }

             
 
            


            const nextQuestion = this.state.currentQuestion +1
             if(nextQuestion<this.Questions.length){
                this.setState({currentQuestion:nextQuestion})

             }else{

                this.setState({showScore:true})
             } 

              
           }

       

    render() {

        
       console.log(this.state.score,'score')

       if(this.state.showScore){
        axios.post('/api/user/mytotal',{points:this.state.score},{
            headers: { authorization: localStorage.getItem('token') },
          })
          .then((response)=>{
              axios.get('/api/user/mytotal',{
                headers: { authorization: localStorage.getItem('token') },
              })
              .then((x)=>{
                  let sum = x.data?x.data.map((item)=>{
                    return item.points
                }):null

                console.log(sum.reduce((a, b) => a + b, 0)/sum.length,'av')

                axios.post('/api/user/myaverage',{average:sum.reduce((a, b) => a + b, 0)/sum.length },{
                    headers: { authorization: localStorage.getItem('token') },
                  }) 
                  .then((end)=>{
                      console.log(end,'end')
                  })

            })
          })
        }
 

 

        return (

<div>
<style>{'body { background-color:#76c2ff}'}</style>

 {this.state.showScore?

<div>

 
 
<Grid>
    <Grid.Row>
      <Grid.Column width={8} >
      <Container >

<div style={{backgroundColor:"#242e4c",margin:'40px 0 0 0',minHeight:'300px',margin:'50px 0 0 0',borderRadius:'10px'}}>
<h3 style={{textAlign:'center',color:'white',padding:'70px 0 0 0',fontSize:'35px',fontWeight:'300'}}>you scored {this.state.score} out of {this.Questions.length*20}</h3>

<div>
<h3 style={{textAlign:'center',color:'white',fontSize:'55px',fontWeight:'300'}}>{this.state.score}% </h3>
</div>
    </div>
</Container>      </Grid.Column>
      <Grid.Column width={8}>
       </Grid.Column>
    </Grid.Row>
    </Grid>
 
 </div>
 : 
 
 
 
 <Container>
<h1 style={{margin:'30px 0 0 0',fontSize:'45px',fontWeight:'bolder'}}> Advanced Math 363</h1>
<h2 style={{margin:'9px 0 0 0',fontWeight:'300'}}> Please Begin Your Quiz</h2>
  <div style={{backgroundColor:'#242e4c',margin:"40px 0 0 0",borderRadius:'10px'}}>
 
<Grid>
    <Grid.Row>
      <Grid.Column width={8}>
      <h1 style={{margin:'20px 0 0 60px',color:'white',fontSize:'35px'}}> Question {this.state.currentQuestion +1}<span style={{fontSize:'20px'}}>/{this.Questions.length}</span></h1>
      <div>
      <h1 style={{margin:'15px 0 0 60px',color:'white'}}>{this.Questions[this.state.currentQuestion].questionText}</h1>
       </div>
      </Grid.Column>
      <Grid.Column width={8} style={{paddingRight:'65px',paddingTop:'30px',paddingBottom:'30px'}}>
      <div>  
 {this.Questions[this.state.currentQuestion].answerOptions.map((l)=>(<h2>
  <button className='xo' style={{width:'100%',textAlign:'left',border:'solid 4px #076a8a',fontWeight:'300',padding:'10px 0 10px 15px'}}
   onClick={()=>this.handleNext(l.isCorrect)}>
     {console.log(l,'')}
        <span style={{color:'white'}}> {l.answerText}</span> 
        
        
        </button>  
</h2>))}

</div>      
</Grid.Column>
    </Grid.Row>
    </Grid>

<div >

 
 

 

</div>


</div>
</Container>

}
 

</div>
       
        )
    }
}
