import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Form, Segment, Button,Container,Image,Header,Grid,Message,Icon } from 'semantic-ui-react';
import { email, required } from 'redux-form-validators';
import axios from 'axios';
import { AUTH_USER} from '../../actions/types';
import './../../index.css'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import './../../index.css'


 
class SignIn extends Component {

  onSubmit = async (formValues, dispatch) => {
     try {
      const { data } = await axios.post('/api/auth/signin', formValues);
      localStorage.setItem('token', data.token);
      dispatch({ type: AUTH_USER, payload: data.token });
      formValues.isStudent? this.props.history.push('/menu'):this.props.history.push('/menu')
    } catch (e) {
       throw new SubmissionError({
        email: 'Please try again',
        password: 'You entered a bad password',
        _error: 'Login Failed'
      });
    }
  }

  
  renderEmail = ({input,meta}) => {
     return(
      <input
 
      id='inputID'
       style={{backgroundColor:"#f7f7f7",marginBottom:"10px",border:"none"}}
      {...input}
      fluid

      error={meta.touched && meta.error}
       icon='user'
      iconPosition='left'
      autoComplete='off'
      placeholder='Email Address'
      />
    )
  }
  
  renderPassword = ({ input, meta }) => {
    return (
      <input
      id='inputID'
 
       style={{backgroundColor:"#f7f7f7",marginBottom:"10px",border:"none"}}
        {...input}
        error={meta.touched && meta.error }
        fluid
        type='password'
        icon='lock'
        placeholder='password'
        autoComplete='off'
        iconPosition='left'
      />
    );
  }

  render(){
    const {handleSubmit,invalid,submitting,submitFailed}=this.props
    return(
 <div>
   
   
   
   <div className='backgroundimg' style={{height:750}} >
     
 
    
 
     <div style={{width:"100%",height:"100%",display:"flex"}}>
     
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%"}}>
       
      <h1 className='title' style={{color:"white",fontSize:"80px",paddingLeft:"15px",margin:"0px"}}>LEARNING MADE <br></br>  EASY</h1>
      <div style={{paddingLeft:"15px",paddingTop:"10px"}}>
      <p className='title' style={{fontSize:"18px",color:"white",lineHeight:"1.8",fontWeight:"300"}}>Improve your Skills by joining our Easy to use Online Platform and learn about English, Math, and any subject and prepare you 
      for the future.</p>
     
      </div>
     
     </div>
     
     
     
     <div style={{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",alignItems:'center'}}>
       
       <div style={{width:"450px",height:"400px",backgroundColor:"white"}}>
     
      
       <div style={{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",alignItems:'center',height:"100%"}}>
       
     
     
       
       <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
             
             <Segment vertical='none' style={{width:"400px"}}>
             <p className='title' style={{ textAlign:"center",margin:"0px",fontSize:"18px",fontWeight:"500",color:"#260275",marginBottom:"15px"}}>LOGIN </p> 
        <h2 className='title' style={{ textAlign:"center",margin:"0px",marginBottom:"20px",color:"#260275",color:"#ff0e7d",fontWeight:"400",fontSize:"24px"}}>
          Welcome back, Please Provide your credentials below. </h2>           
     
             
               <Field
           name='email'
          component={this.renderEmail}
          validate={[
            required({msg:'Email is required'}),
            email({ msg: 'You must provide a valid email address' })
          ]}
          />
             

<Field
          name='password'
          component={this.renderPassword}
          validate={[
            required({msg:'you must provide a password'})
          ]}
          />
     
      
                 <div style={{display:"flex",justifyContent:"center"}}>
                 <Button
     
     content="Sign In"
     style={{backgroundColor:'grey',color:'white',width:"300px",borderRadius:"20px",marginTop:"10px"}}
     fluid
     size="large"
     type="submit"
     disabled={ invalid || submitting || submitFailed }
      />
                 </div>
              </Segment>
           </Form>
           
           
           
           
           <p style={{marginTop:"10px"}}>New? <Link to='/'> <span style={{color:"grey"}}> Register</span></Link>   </p>
     
      </div> 
      
     
       </div>
      
      </div> 
      
   
     </div>
            </div>
           
           
        
</div>
    )
  }
   
}
export default reduxForm({ form: 'signin' })(SignIn);
