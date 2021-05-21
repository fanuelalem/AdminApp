import React, { Component } from 'react'
import { Button, Checkbox, Form,Container,Card,Grid,Icon } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import moment from 'moment'


export default class MyStudents extends Component {


    state = {
        userData:{},
        realData:[]
    }
componentDidMount = () => {
  
    this.getRealStudents()
    this.getMyData()
  }

  getRealStudents = () => {
    axios.get('/api/user/profiles',{
        headers: { authorization: localStorage.getItem('token') },
      })
      .then((res)=>{
    
    this.setState({realData:res.data})
    console.log(res.data,'res')
    })
    }
      
    
    getMyData = () => {
        axios.get('/api/user/profile', {
            headers: { authorization: localStorage.getItem('token') },
          })
          .then((response)=>{
            //   console.log(response.data,'what is my data?')
    
    this.setState({userData:response.data})
        })
    }
     


       

    
 
     
    render() {

        


        let b = this.state.realData? this.state.realData.map((item)=>{
            return item
            }):null
                    
             
            let check = b.filter((real)=>{
              return real.isStudent == true
            })

            console.log(check,'hello?')


          

            
 
 

 
 
            const aaaa = []

        return (

            
            <div style={{margin:'40px 0 0 0'}} >
 
 <div style={{textAlign:"center"}}>
<h1>
  My Students
     </h1>
    </div>
 
<hr></hr>
  
           
                   {<h2>
                       
                       {check.map((x)=>(<div>
                              {x.myTeacher?x.myTeacher.map((pl)=>{
                                  {console.log(x,'what is x?')}
                                  return (<div>
                                      

         


                                       {<h2>{pl.email == this.state.userData.email? 
                                      <div style={{margin:'40px 0 0 0'}}>

 


                                      <Card style={{width:'600px',minHeight:"200px",padding:' 0 0 30px 0'}}>

                                      <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>
      <h1 style={{margin:'20px 0 5px 20px'}}>Student Email 
                                      </h1> 
                                      <h3 style={{margin:' 0 0 20px 20px'}}>{x.email}</h3>      
                                      
                                      </Grid.Column>
      <Grid.Column>
          <h1 style={{margin:'20px 0 5px 0px'}}>Student Average</h1>
      <h2 style={{margin:'0 0 0 0',fontSize:'65px',color:"black"}}>

{ x.myAverage.length?x.myAverage[x.myAverage.length-1].average.toFixed(2) + "%":'This student has not yet taken a test'}
</h2>

<h2 style={{margin:'20px 0 10px 20px'}}> 


</h2>       </Grid.Column>
    </Grid.Row>
    </Grid>
                                
                                      </Card>
                                      </div>

                                       
                                      : null}</h2>}
                                  </div>)
                              }):'fvfvfvf'}



                       </div>))}
                       
                       
                       </h2>}
              
            </div>
        )
    }
}


 
 