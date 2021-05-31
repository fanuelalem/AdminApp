import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button,Container,Grid ,Image,Header,Icon} from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import './../../index.css'


import axios from 'axios';
import './../../index.css'
import { AUTH_USER, AUTH_USER_ERROR } from '../../actions/types';

class SignUp extends Component {

  skills = [
    { text: 'I am a student', value: true },
    { text: 'I am a Teacher', value: false },
   
  ];

  renderEmail = ({input,meta}) => {
    // console.log(meta);
    return(
      <Form.Input
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
      formValues.isStudent? this.props.history.push('/pickteacher'):this.props.history.push('/mycourses')
      
    } catch (e) {
      dispatch({ type: AUTH_USER_ERROR, payload: e });
    }
  }

  renderSkills = (field) => {
    return (
      <Form.Select
        {...field.input}
        value={field.input.value}
        //redux form with semantic drop down select
        onChange={(param, data) => field.input.onChange(data.value)}
        label={field.label}
        type='option'
        placeholder={field.label}
        autoComplete='off'
        options={this.skills}
      />
    )
  }
  // renderEmail = ({ input, meta }) => {
  //   return (
  //     <Form.Input
  //       {...input}
  //       error={ meta.touched && meta.error }
  //       fluid
  //       icon='user'
  //       iconPosition='left'
  //       autoComplete='off'
  //       placeholder='Email Address'
  //     />
  //   );
  // }


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

  render() {
    // console.log("Inside of signup render", this.props);
     const {handleSubmit, invalid, submitting, submitFailed} = this.props;
    return (
      // onSubmit={handleSubmit(this.onSubmit)}
      <div  >
 <Helmet>
   <style>{'body {    }'}</style>

         </Helmet>
         <Grid textAlign="center" style={{ height: '75vh',margin:'0px 0 99px 0' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 500 }}>

 
   <div  style={{margin:'140px 0 0 0'}} >

    
      
      <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
        
        <Segment style={{backgroundColor:'#f7f8fa' }} >
        <Header  color='grey' textAlign="center" style={{ fontSize: '33px' }}>
               <span style={{ margin:'0 0 0 15px'}}>Create an account </span> 
            </Header>
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
              label='Are you a student or teacher?'
              component={this.renderSkills}
              validate={
                [
                  required({ msg: 'You must select one' }),
                ]
              }
            />
          <Button
 
          content="Sign Up"
          style={{backgroundColor:'#ffc629',color:'white'}}
          fluid
          size="large"
          type="submit"
          disabled={ invalid || submitting || submitFailed }
           />
        </Segment>
      </Form>
      </div>
      </Grid.Column>
</Grid>
 

       </div>



      // <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
      //   <Segment stacked>
      //     <Field
      //       name='email'
      //       iscool='mannyiscool'
      //       component={ this.renderEmail }
      //       validate={
      //         [
      //           required({ msg: 'Email is required' }),
      //           email({ msg: 'You must provide a valid email address' })
      //         ]
      //       }
      //     />
      //     <Field
      //       name='password'
      //       component={this.renderPassword}
      //       validate={
      //         [
      //           required({ msg: 'You must provide a password' }),
      //           length({ min: 6, msg: 'Your password must be at least 6 characters long' })
      //         ]
      //       }
      //     />
      //     <Button
      //       content='Sign up'
      //       color='teal'
      //       fluid
      //       size='large'
      //       type='submit'
            // disabled={ invalid || submitting || submitFailed }
      //     />
      //   </Segment>
      // </Form>
    );
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
// const asyncValidate = async formValues => {
//   try {
//     const { data } = await axios.get(`/api/user/emails`);
//     const foundEmail = data.some((user)=>(user.email === formValues.email))
//     if(foundEmail){
//       throw new Error();
//     }
//     // ?email=${formValues.email}
//     // if (data) {
//     //   throw new Error();
//     // }
//   } catch (e) {
//     throw { email: 'Email already exists, please sign up with a different email' };
//   }
// }
// export default reduxForm({form:'signup'})(SignUp)
export default reduxForm({ form: 'signup', asyncValidate, asyncChangeFields: [ 'email' ] })(SignUp);
// export default SignUp;