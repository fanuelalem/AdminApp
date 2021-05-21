

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Segment,Form,Dropdown,Grid, Input, Menu, Container, Icon, Image, Button, MenuItem,Label } from 'semantic-ui-react'
import './../../index.css'
 import axios from 'axios'
//  import admin from './../Images/admin.png'
 import student from './../Images/2.png'
 import adminavi from './../Images/adminavi.png'

// import student from './../Images/student.png'

export default class Nav extends Component {
  state={
  
    userData:'',
    filteredUsers:[]

  }
  

  componentDidMount() {
      this.getUserData()
  }
  getUserData = () => {
    axios.get('/api/user/profile', {
      headers: { authorization: localStorage.getItem('token') },
    }).then((response)=>{
      // console.log(response.data.myStocks[0].text,'user response')
      this.setState({userData:response.data},()=>{
        console.log(response.data,'console.log my nav please')
       })

    })

 
 }
 
  handleItemClick = (e, { name }) => { this.setState({ activeItem: name }) }
  
  getMyImage = () => {
    axios.get('/api/user/myimages',{headers: { 'authorization': localStorage.getItem('token')}})
    .then((response)=>{
        this.setState({myImages:response.data.reverse()})
        console.log(response,'nav object')
    })
}

// const ok = []
// let check = this.state.userData.myAverage? this.state.userData.myAverage.map((j)=>{
//   return ok.push(j.average)
// }):null

 

  render() {
    
    const ok = []
    let check = this.state.userData.myAverage? this.state.userData.myAverage.map((j)=>{
      return ok.push(j.average)
    }):null
 
    const { activeItem } = this.state
     return (
      <div className="app">
           <Container   >







 

<div style={{justifyContent:"center",display:"flex",margin:'50px 0 0 0'}}>

 <Menu vertical >
        <Menu.Item
          name='inbox'
          active={activeItem === 'inbox'}
          onClick={this.handleItemClick}
          style={{backgroundColor:`${this.state.userData.isStudent?"#f7f7f7":"#f7f7f7"}`}}
        >
          
           <div style={{justifyContent:"center",display:"flex"}}>
       
{this.state.userData.isStudent?
<div>
<Image style={{ backgroundColor: 'white',margin:"0 0px 10px 0px",width:"100px",height:"100px" }}  
                 src={student}
                  avatar
                  />
</div> 
  : 

  <Image style={{ backgroundColor: 'white',margin:"0 0px 10px 0px",width:"100px",height:"100px" }}  
                 src={adminavi}
                 avatar
                  />

  }

                   
                 </div>  
                 <div>
                   <div>
                     <p style={{color:'#666666'}}> <h3> <span style={{color:"grey",fontWeight:"300"}}> Welcome,</span> {this.state.userData.email}</h3></p> 
                   </div>
                 
                   <div>
                        
                       {
                       this.state.userData.isStudent?
                       ok[ok.length-1]? 
                       <h3 style={{backgroundColor:'lightgreen',color:'#284052',margin:'15px 0 15px 0',padding:'5px',fontWeight:'400'}}>
                         
                         Your Average : {ok[ok.length-1].toFixed(2)}%
                         </h3>
                      : 'You havent taken a test yet':
                       null } 

                     {console.log(this.state.userData,'usr data')}
                    
                   </div>
                   
                
                 </div>
 
        </Menu.Item>

        

        {/* {this.props.authenticated  ? <Menu.Item
                as={Link}
                to="/addcourse"
                name='addcourse'
                active={activeItem === 'addcourse'}
                onClick={this.handleItemClick}
                onClick={this.props.noDisplay}
 
                >
               
                <span className='winnermenu' 
                      style={{ color: '#494949',fontSize:'18px',margin:"0 0 0 0" }}> <h3>Add Courses</h3> </span>  
                      
              </Menu.Item> : null} */}


              {this.state.userData.isStudent? 
              <Menu.Item
              as={Link}
              to="/pickteacher"
              name='pickteacher'
              active={activeItem === 'pickteacher'}
              onClick={this.handleItemClick}
              onClick={this.props.noDisplay}

              >
             
              <span className='winnermenu' 
                    style={{ color: '#494949',fontSize:'18px',margin:"0 0 0 0" }}> <h3> Pick Teacher</h3> </span>  
                    
            </Menu.Item>:
            

            
            <Menu.Item
            as={Link}
            to="/mycourses"
            name='mycourses'
            active={activeItem === 'mycourses'}
            onClick={this.handleItemClick}
            onClick={this.props.noDisplay}


            >
           
            <span className='winnermenu' 
                  style={{ color: '#494949',fontSize:'18px',margin:"0 0 0 0" }}><h3>My Courses</h3>  </span>  
                  
          </Menu.Item> 
            }

            

              {/* {this.props.authenticated  ? <Menu.Item
                as={Link}
                to="/pickteacher"
                name='pickteacher'
                active={activeItem === 'pickteacher'}
                onClick={this.handleItemClick}
                onClick={this.props.noDisplay}
 
                >
               
                <span className='winnermenu' 
                      style={{ color: '#494949',fontSize:'18px',margin:"0 0 0 0" }}> <h3> Pick Teacher</h3> </span>  
                      
              </Menu.Item> : null} */}


            
              
              
              {this.state.userData.isStudent   ? <Menu.Item
                as={Link}
                to="/myteachers"
                name='myteachers'
                active={activeItem === 'myteachers'}
                onClick={this.handleItemClick}
                onClick={this.props.noDisplay}
 
 
                >
               
                <span className='winnermenu' 
                      style={{ color: '#494949',fontSize:'18px',margin:"0 0 0 0" }}> <h3>My Teachers...</h3> </span>  
                      
              </Menu.Item> : 
              <Menu.Item
              as={Link}
              to="/addcourse"
              name='addcourse'
              active={activeItem === 'addcourse'}
              onClick={this.handleItemClick}
              onClick={this.props.noDisplay}

              >
             
              <span className='winnermenu' 
                    style={{ color: '#494949',fontSize:'18px',margin:"0 0 0 0" }}> <h3>Add Courses</h3> </span>  
                    
            </Menu.Item> 
              
              }
             

 


              {/* {this.props.authenticated   ?
               <Menu.Item
                as={Link}
                to="/mycourses"
                name='mycourses'
                active={activeItem === 'mycourses'}
                onClick={this.handleItemClick}
                onClick={this.props.noDisplay}
 
 
                >
               
                <span className='winnermenu' 
                      style={{ color: '#494949',fontSize:'18px',margin:"0 0 0 0" }}><h3>My Courses</h3>  </span>  
                      
              </Menu.Item> : null} */}



              {this.state.userData.isStudent  ? <Menu.Item
                as={Link}
                to="/grades"
                name='grades'
                active={activeItem === 'grades'}
                onClick={this.handleItemClick}
                onClick={this.props.noDisplay}
 
 
                >
               
                <span className='winnermenu' 
                      style={{ color: '#494949',fontSize:'18px',margin:"0 0 0 0" }}><h3>Grades</h3>  </span>  
                      
              </Menu.Item> : 

               <Menu.Item
               as={Link}
               to="/mystudents"
               name='mystudents'
               active={activeItem === 'mystudents'}
               onClick={this.handleItemClick}
               onClick={this.props.noDisplay}
   
   
               >
              
               <span className='winnermenu' 
                     style={{ color: '#494949',fontSize:'18px',margin:"0 0 0 0" }}><h3>My Students</h3>  </span>  
                     
             </Menu.Item> 
              
              
              }


 {this.props.authenticated ? <Menu.Item
                as={Link}
                to="/signout"
                name='signout'
                 active={activeItem === 'signout'}
                onClick={this.handleItemClick}
                onClick={(this.props.noDisplay)}
                > <span className='winnermenu' style={{ color: '#494949',fontSize:'18px' }}><h3>signout </h3> </span></Menu.Item> : null}
       
      </Menu>






      </div>

          </Container>

 
      </div>
    )
  }
}


 

 