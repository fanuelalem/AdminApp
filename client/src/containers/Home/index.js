import React, { Component } from 'react'
import {Container,Header,Image,Segment,Grid,Button,Divider,Form,Icon } from 'semantic-ui-react'
import './../../index.css'
 import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';



export default class Home extends Component {

 render() {
   
  return (
    <div>
    <Helmet>
   <style>{'body { background: linear-gradient(#076585, #fff) }'}</style>

         </Helmet>
 
    <div className="background"style={{minHeight:'606px'}}>
      <div className="info">
         <Container >
           <div  >

 <div style={{padding:"20px",backgroundColor:'transparent'}}>
 <h1 style={{color:"black",fontSize:"45px",margin:'0 0 0 0'}}> welcome </h1>
<div style={{padding:"20px"}}>
<Link 
 
as ={Link}
to="/signup">
  <Button className='ox' style={{backgroundColor:"#f7fafe",margin:'0 5px 0 0',borderRadius:'0px'}}>Sign up</Button>
</Link>

<Link  
 
as ={Link}
to="/signin">
  <Button className='ox' style={{backgroundColor:"#f7fafe",margin:"0 0 0 5px",borderRadius:'0px'}}>Sign In</Button>
</Link>
</div>
 

 

</div>

</div>


 
        </Container>
 

    </div>

       </div>
 
                    </div>
        )
    }
}


 