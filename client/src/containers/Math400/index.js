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
            questionText:'I am going to a wedding. I need to ___',
            answerOptions:[
                {answerText:'be cutting my hair',isCorrect:false},
                {answerText:'cutting my hair',isCorrect:false},
                {answerText:'have my hair cut',isCorrect:true},
                {answerText:'get cut my hair',isCorrect:false},
            ]

        },
        {
            questionText:'Which would you __ have, gold or silver?',
            answerOptions:[
                {answerText:'could',isCorrect:false},
                {answerText:'prefer',isCorrect:false},
                {answerText:'rather',isCorrect:true},
                {answerText:'better',isCorrect:false},
            ]

        },
        {
            questionText:'Where ___ to spend your holidays next summer?',
            answerOptions:[
                {answerText:'are you going',isCorrect:true},
                {answerText:'you are going',isCorrect:false},
                {answerText:'you will',isCorrect:false},
                {answerText:'will you',isCorrect:false},
            ]

        },
        {
            questionText:'___ never been to the theatre before.',
            answerOptions:[
                {answerText:`I'll`,isCorrect:false},
                {answerText:`I'm`,isCorrect:false},
                {answerText:`I can`,isCorrect:false},
                {answerText:`I've`,isCorrect:true},
            ]

        },
        {
            questionText:`If ___ I'll tell him you called.`,
            answerOptions:[
                {answerText:`I'll see him`,isCorrect:false},
                {answerText:`I see him`,isCorrect:true},
                {answerText:`I'd see him`,isCorrect:false},
                {answerText:`I saw him`,isCorrect:false},
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
<h1 style={{margin:'30px 0 0 0',fontSize:'45px',fontWeight:'bolder'}}> Section 4</h1>
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
