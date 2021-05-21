import React, { Component } from 'react'
import {Container,Header,Image,Segment,Grid,Button,Divider,Form,Icon } from 'semantic-ui-react'
import './../../index.css'
import logo from './../../components/Images/Logo.png'
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
 <h1 style={{color:"black",fontSize:"45px"}}> welcome </h1>
<div style={{padding:"20px"}}>
<Link 
 
as ={Link}
to="/signup">
  <Button style={{backgroundColor:"#f7fafe"}}>Sign up</Button>
</Link>

<Link  
 
as ={Link}
to="/signin">
  <Button style={{backgroundColor:"#f7fafe"}}>Sign In</Button>
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


 