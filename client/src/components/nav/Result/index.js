import React, { Component } from 'react'
import {Container,List,Card,Message,Item,Header,Image,Segment,Grid,Button,Divider,Form,Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import fanuel from './../../../components/Images/fanuel.jpg'
import ganesh from './../../../components/Images/ganesh.png'
import vanessa from './../../../components/Images/vanessa.jpeg'
import husam from './../../../components/Images/husam.jpeg'
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Axios from 'axios';
import moment from 'moment'
import finhubData from '../../../containers/APICall/finhubData';

// import finhubData from './../../../containers/APICall/finhubData';
// import Peers from './../../../containers/APICall/peers'
// import otherUtil from './../../../containers/APICall/otherutil'

// import Info from './../../../containers/APICall/info'
 



export default class Result extends Component {

 
 state={
   newSearch:'',
   result:{}
 }

 searchMovies = async (query) => {
  

  finhubData.search(query).then((response) => {
     this.setState({ result: response.data },()=>{
           console.log(response, 'results page api finhub')

     })
  })

  
}

handleFormSubmit = event => {
  event.preventDefault();
 
 
  this.searchMovies(this.state.newSearch);
   
  
};



    render() {
  
         return (
          
          <div>

<Helmet>
   <style>{'body { background-image: linear-gradient(to bottom right, #30496b, #30b8d2)'}</style>

 
         </Helmet>

             <div style={{margin:'80px 20px 0px 20px'}}>


 


 
          
 
   <Container  fluid >

  <div className='wrapper' style={{minHeight:'80vh'}}>


  
 { 
 
 this.props.result.name?
  

<div >
 


 <Container>
   <p className='construction' style={{display:"flex",justifyContent:'center',padding:"120px 0 0 0",fontSize:"18px",fontWeight:"200"}}>  
   
   This part of the website is   
   </p>
   <div style={{margin:"0 140px 0 140px",padding:"10px 20px 10px 20px",border:"6px solid white"}}>
    <p  className='construction' style={{textAlign:"center",fontSize:'80px',fontWeight:"600"}}>
   Under Construction
     </p>

     </div>
<br></br>
<br></br>

     <p className='construction' style={{textAlign:"center",fontSize:'18px',fontWeight:"200"}}>In the meantime, you can browse the rest of the site or 
     <br>
     </br>check out our other channels!</p>
     <br></br>
     <br></br>

     <br></br>
     <div style={{textAlign:"center",color:"white"}}>
       <a style={{color:"white"}} href='mailto:fanuelnalem@outlook.com' >

      <Icon size='large' name='mail'/>
      </a>

     </div>
  </Container>

</div> 

: 

 

<Message negative >
<Message.Header  >This stock is currently unavailable</Message.Header>
  <p>please come back and check again...</p>
</Message> 
}
             

 



        <div style={{ padding: '4em 0em' }}>

 

 
</div>

 
</div>

        
{/* https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2020-04-30&to=2020-05-01&token=bva10en48v6t3lvcm170 */}

 
            </Container >
           

            </div>


<div className='div-tag'style={{backgroundColor:'#222222'}}>
<Container>
<Segment vertical>

 <Grid columns={3} divided>
<Grid.Row>
  <Grid.Column>
      <h1 style={{color:'white'}}className='how-it-works'>10/10 Stock Tracker</h1>
      <div><p style={{color:'white',fontSize:'1.25rem',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif'}}>
      This application is a helpful tool to save stocks onto a personal watchlist. It provides information on the stock markets 
      top 10 winners and losers of the day. Users can also search and track any stock in the market and view stocks that are trending among other users.

</p></div>
  </Grid.Column>
  <Grid.Column>
<h1 style={{color:'white'}}className='how-it-works'>      Get Started
</h1>
<p  style={{color:'white',fontSize:'1.25rem',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif'}}> Get access to your Watchlist by creating an account.
</p>
<Link
as={Link} to='/signup'>
<Button color='purple'> Register Now</Button>

</Link>
    </Grid.Column>
  <Grid.Column>
  <h1 style={{color:'white'}}className='how-it-works'> Contact Us</h1> 
  <p  style={{color:'white',fontSize:'1.25rem',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',marginBottom:'10px'}}> <span  >  <a href='mailto:fanuelnalem@outlook.com'  style={{color:'white'}}   >  <Icon name='mail'></Icon>Send Feedback</a> </span></p>  

  
   <h1 className='how-it-works'style={{color:'white',marginTop:'0',marginBottom:'18px'}}>
   Developed By
   </h1>  
   <div> 
       {/* <Grid>

        <Grid.Row columns={1}>
  <Grid.Column>
    <Image className='img' src={vanessa} />
  </Grid.Column>
  <Grid.Column>
    <Image className='img'src={husam} />
  </Grid.Column>
  <Grid.Column>
    <Image className='img'src={fanuel} />
  </Grid.Column>
  <Grid.Column>
    <Image className='img'src={ganesh} />
  </Grid.Column>
</Grid.Row>
</Grid> */}

<Image size='tiny' centered className='img'src={fanuel} />


</div>
       

  </Grid.Column>
  <Grid.Column width={6}>
     

     </Grid.Column>
</Grid.Row>
</Grid>
 
</Segment>
 <p style={{backgroundColor:'rgb(55, 55, 59)',padding:'10px',borderRadius:'5px',color:'white',fontSize:'1.25rem',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif' }}className='p-tag' >Copyright 2020. All rights reserved.</p>

  </Container>
  </div> 
  </div>


 
        )
    }
}


 

 






// <div style={{ 
//   border:'1px solid white',
//   padding:'22px',
//   borderRadius:'3px',
//    backgroundColor:'#222222',
//   color:'white',
//    }}>
  
   
  
    
   
//   {this.state.news.map((item)=>(
//     <div style={{textAlign:'center',color:'white'}}>
  
//      <a target='_blank'href={item.url}style={{color:"white"}}> 
//         <p style={{fontSize:'18px'}}>{item.headline} </p> 
  
  
//         </a>   
//         <br></br>
  
   
//       <Card fluid style={{margin:'0 0 15px 0'}}>
//         <Card.Content>
//          <Image src={item.image}/>
        
//       </Card.Content>
      
//     </Card>
//       </div>
//   ))}
  
// </div>      