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
      formValues.isStudent? this.props.history.push('/pickteacher'):this.props.history.push('/mycourses')
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
      <Form.Input
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
      <Form.Input
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
   <Helmet>
   <style>{'body { }'}</style>

         </Helmet>
   {/* <div className='j2'>
 <Image style={{backgroundColor:'white'}} className='im2'src={logo}/>
  
 </div> */}
 
 <Grid textAlign="center" style={{ height: '85vh',margin:'0px 0 25px 0' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 500}}>

   
    
  <div style={{margin:'100px 0 0 0'}}>

  
      <Form   size='large' onSubmit={handleSubmit(this.onSubmit)}>
      <Segment style={{backgroundColor:'#f7f8fa'}} >

         <Header color="grey" textAlign="center" style={{ fontSize: '34px' }}>
               Log-in to your account
            </Header>
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
          <Button
          content='Sign In'
          color='twitter'
          fluid
          size='large'
          type='submit'
          disabled={invalid || submitting || submitFailed}
          />
                 </Segment>

       </Form>
         
       </div>

      </Grid.Column>
</Grid>

     
 


      

 
</div>
    )
  }
   
}
export default reduxForm({ form: 'Pin' })(AddPin);
