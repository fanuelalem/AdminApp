import React, { Component } from 'react'
import { Button, Checkbox, Form,Container,Card,Grid,Icon } from 'semantic-ui-react'
import axios from 'axios'
import moment from 'moment'

import { Link } from 'react-router-dom';
export default class MyTeachers extends Component {

    state = {
        userData:{},
        realData:[]
    }

    componentDidMount() {
        this.getMyData()
        this.getRealTeacherData()
     }
    
getRealTeacherData = () => {
axios.get('/api/user/profiles',{
    headers: { authorization: localStorage.getItem('token') },
  })
  .then((res)=>{

this.setState({realData:res.data})
})
}
  

getMyData = () => {
    axios.get('/api/user/profile', {
        headers: { authorization: localStorage.getItem('token') },
      })
      .then((response)=>{
          console.log(response.data,'what is my data?')

this.setState({userData:response.data})
    })
}




    render() {
       
        

        

let b = this.state.realData? this.state.realData.map((item)=>{
return item
}):null
        
 
let check = b.filter((real)=>{
  return real.isStudent == false
})

// console.log(check,'all teachers array')

// let realteacherperspective = check?check.map((j)=>{
//     return j
// }):null

// console.log(realteacherperspective,'real teachers perspective')

let gettingMyTeacherEmailstoFind = this.state.userData.myTeacher?this.state.userData.myTeacher.map((findme)=>{
 
    return findme.email
}):null

let j = gettingMyTeacherEmailstoFind?gettingMyTeacherEmailstoFind.length?gettingMyTeacherEmailstoFind.find((test)=>{
    return test === 'hello@mail.com'
})
   
   
   :null:null

   console.log(j,'j testing')

let findanemail = check?check.map((jfk)=>{
  
 return jfk

 }):null

console.log(findanemail,'is this real teacher object?')

 

return (
             <div style={{margin:'30px 0 0 0'}}>

                

                 <Grid divided='vertically'>
    <Grid.Row >
      <Grid.Column width={12}>

      <div style={{margin:'0 0 0 0px'}}>
                 <h2 style={{fontSize:'38px'}} > My Professors</h2>

                 </div> 
      <p>




{findanemail?findanemail.map((finding)=>(
    <div>



      <p>

{console.log(gettingMyTeacherEmailstoFind,'getting my teachers email to find')}

           {
           gettingMyTeacherEmailstoFind?
           gettingMyTeacherEmailstoFind
           .map((f)=>{
               return finding.email == f ? 
               (

                   <div style={{margin:'20px 0 0 0'}}>
                       <Card style={{width:'100%',minHeight:"200px",padding:' 0 0 30px 0'}}>
                       <h2 style={{margin:'20px 0 10px 20px'}}>Professor {finding.email}</h2> 
                       <h2 style={{margin:'20px 0 10px 20px'}}>Class Courses </h2> 

                       {/* <p>{finding._id}</p>  */}
                        {finding.myCourses?finding.myCourses.map((jay)=>(
                           <div>
                               <hr></hr>
                               <div>
                                     <h3 style={{fontWeight:'600',margin:' 0 0 0 20px'}}>  {jay.subject} <Link
                               to=  {jay.route}
                               style={{float:'right',margin:'0 20px 0 0'}}
                               >
                                      <Button color='green'> take exam</Button>
                               </Link></h3>
                               <h4 style={{margin:'20px 0 0 20px',fontWeight:"500"}}> <h3>
                                   <span style={{color:'gray',fontWeight:'300'}}>assigned </span>  {moment(jay.dateCreated).fromNow()}...</h3>
                                
                               
                                
                                 
                                 </h4>
                               </div>
                              
                                
                             
                           </div>
                          
                       )):null}

                       {console.log(finding,'finding concole.log')}
                       </Card>
                       


                   </div>
               )
                
               
               : null
           }):null

           
           }</p>
{console.log(finding.email,'findinf')}


{console.log(gettingMyTeacherEmailstoFind,'kklkl')}

    </div>
)):null}

</p>      </Grid.Column>
<Grid.Column width={0}>
            </Grid.Column>
    </Grid.Row>
    </Grid>
                  
                  
                 
            </div>
        )
    }
}
