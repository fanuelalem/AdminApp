import React, { Component } from 'react'
import {Container,Header,Image,Segment,Grid,Button,Divider,Form,Icon,Input } from 'semantic-ui-react'
import './../../index.css'
 import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AUTH_USER, AUTH_USER_ERROR } from '../../actions/types';
import { email, length, required } from 'redux-form-validators';
import { Field, reduxForm } from 'redux-form';



class SignUp extends Component {
  skills = [
    { text: 'I am a student', value: true },
    { text: 'I am a Teacher', value: false },
   
  ];

  renderEmail = ({input,meta}) => {
    // console.log(meta);
    return(
      <input
      id='inputID'
      style={{backgroundColor:"#f7f7f7",marginBottom:"10px",border:"none"}}       
       {...input}
      error={meta.touched && meta.error}
      fluid
      icon='user'
      iconPosition='left'
      autoComplete='off'
      placeholder='Email Address'
 
      />
    )
  }
  onSubmit = async (formValues,dispatch) => {
    console.log(formValues)
    // console.log(formsProps)
    try {
      const { data } = await axios.post('/api/auth/signup', formValues);
      localStorage.setItem('token', data.token);
      dispatch({ type: AUTH_USER, payload: data.token });
      console.log('reached')
      formValues.isStudent? this.props.history.push('/menu'):this.props.history.push('/menu')
      
    } catch (e) {
      dispatch({ type: AUTH_USER_ERROR, payload: e });
    }
  }

  renderSkills = (field) => {
    return (
      <Form.Select
        {...field.input}
        id='inputID'
        value={field.input.value}
        //redux form with semantic drop down select
        onChange={(param, data) => field.input.onChange(data.value)}
        label={field.label}
        type='option'
        placeholder={<p className='title'>Are you a student or teacher?</p>}
        autoComplete='off'
        options={this.skills}
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
        placeholder='Password'
        autoComplete='off'
        iconPosition='left'
         
      />
    );
  }
 render() {
  const {handleSubmit, invalid, submitting, submitFailed,touch} = this.props;
console.log(this.props,'sdlcksmdc')
  return (
     
  <div> 

 

 
     <div className='backgroundimg' style={{height:'750px'}} >
     
 
    
 
<div style={{width:"100%",height:"100%",display:"flex"}}>

 <div style={{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%"}}>
  
 <h1 className='title' style={{color:"white",fontSize:"80px",paddingLeft:"15px",margin:"0px"}}>LEARNING MADE <br></br>  EASY</h1>
 <div style={{paddingLeft:"15px",paddingTop:"10px"}}>
 <p className='title' style={{fontSize:"18px",color:"white",lineHeight:"1.8",fontWeight:"300"}}>
   Improve your Skills by joining our Easy to use Online 
 Platform and learn about English, Math, and any subject and prepare you 
 for the future.</p>

 
 </div>

</div>



<div style={{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",alignItems:'center'}}>
  
  <div style={{width:"450px",height:"450px",backgroundColor:"white"}}>

 
  <div style={{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",alignItems:'center',height:"100%"}}>
  


  
  <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
        
        <Segment vertical='none' style={{width:"400px"}}>
        <p className='title' style={{ textAlign:"center",margin:"0px",fontSize:"18px",fontWeight:"500",color:"#260275",marginBottom:"15px"}}>CREATE AN ACCOUNT </p> 
        <h2 className='title' style={{ textAlign:"center",margin:"0px",marginBottom:"20px",color:"#260275",color:"#ff0e7d",fontWeight:"400",fontSize:"24px"}}>
          Welcome, Register below and please specify if you are a teacher or a student. </h2> 
 
          <Field
          name='email'
          component={this.renderEmail}
          validate={[
            required({msg: 'Email is required'}),
            email({msg: 'You must provide a valid email address'})
          ]}

          />
          <Field
           name='password'
          component={this.renderPassword}
          validate={[
            required({msg:'You must provide a Password'}),
            length({min:6,msg:'Your password must be at least 6 characters long'})
          ]}
          />

<Field
                name='isStudent'
               

               component={this.renderSkills}
              validate={
                [
                  required({ msg: 'You must select one' }),
                ]
              }
            />
            <div style={{display:"flex",justifyContent:"center"}}>
            <Button

content="Sign Up"
style={{backgroundColor:'grey',color:'white',width:"300px",borderRadius:"20px",marginTop:"10px"}}
fluid
size="large"
type="submit"
disabled={ invalid || submitting || submitFailed }
 />
            </div>
         </Segment>
      </Form>
      
      
      
      
      <p style={{marginTop:"10px"}}>Already Registered?  
      
     <Link to='signin' to='signin'>
     <span style={{color:"grey"}}> Login</span>
     </Link>   </p>

 </div> 
 

  </div>
  
 </div> 
 

</div>
 
 
       </div>
      
      
      
     
      
      
       </div>

         )
    }
}

const asyncValidate = async ({email})=>{
  try {
    const {data}=await axios.get(`/api/user/emails?email=${email}`);
    if(data){
      throw new Error();
    }
  } catch (e) {
    throw{email:'email is already taken'};
  }
}
export default reduxForm({ form: 'signup', asyncValidate, asyncChangeFields: [ 'email' ] })(SignUp);
