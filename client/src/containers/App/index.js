import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid, Message ,Container} from 'semantic-ui-react';
import Home from './../Home/index'
 
import SignUp from '../SignUp';
import SignIn from '../SignIn';
 import SignOut from '../SignOut';
// import TeacherSignOut from './../AdminSignOut'
import Nav from './../../components/nav'
 import ScrollToTop from './../../components/scrolltop/index'
  import Quiz from './../../containers/Quiz'
import './../../index.css'
import { connect } from 'react-redux';
 
import AddCourse from './../AddCourse'
import MyCourses from './../MyCourses'
// import Grades from './../Grades'
 import TeacherDashBoard from './../teacherDashBoard'
  import Math100 from './../Math100'
 import Math110 from './../Math110'
 import Math200 from './../Math200'
 import Math400 from './../Math400'
 import PickTeacher from './../PickTeacher'
 import TeacherCourse from './../teacherCourses'
 import MyStudents from './../MyStudents'
 import MyTeachers from './../MyTeachers'
 import MyTeacherCourses from './../myTeacherCourses'
 import Menu from './../Menu'
import axios from 'axios';
 

 

class App extends Component {

  state = {
    
  }

  componentDidMount() {
    axios.get('/api/user/profile', {
      headers: { authorization: localStorage.getItem('token') },
    }).then((response) => {
      this.setState({ currentuser: response.data }, () => {
        // console.log(response.data,'response user data')
      })
    })
   }


 
 

   render() {
    return (
      <div>

       
         
        <div>

    {/* {this.props.authenticated? 
              <Nav    authenticated={this.props.authenticated} style={{backgroundColor:"red"}}   />
: null
    } */}
   
 
          </div>

<div >

 
          <Route exact path='/'
            render={(props) => (
              <Home {...props} name='hello world' visible={this.state.visible} onhomeclick={this.goToStockSearch} />
            )} />
          
           <Route exact path='/addcourse' component={AddCourse} />
   
           <Route exact path='/math100' component={Math100} />
          <Route exact path='/math110' component={Math110} />
          <Route exact path='/math200' component={Math200} />
          <Route exact path='/math400' component={Math400} />
          <Route exact path='/Menu' component={Menu} />

           <Route exact path='/pickteacher'
            render={(props) => (
              <PickTeacher {...props} auth={this.props.authenticated} />
            )} />
           <Route exact path='/mycourses' component={MyCourses} />
   
          {/* <Route exact path='/adminloginPage' component={AdminLoginPage} /> */}
   
          {/* <Route exact path='/grades' display={this.DisplayFunction} component={Grades} /> */}
          <Route exact path='/teachercourse' display={this.DisplayFunction} component={TeacherCourse} />
   
          {/* <Route exact path='/teachersignup' display={this.DisplayFunction} component={TeacherSignUp} /> */}
          {/* <Route exact path='/teachersignin' display={this.DisplayFunction} component={TeacherSignIn} /> */}
          {/* <Route exact path='/teachersignout' display={this.DisplayFunction} component={TeacherSignOut} /> */}
          <Route exact path='/mystudents' display={this.DisplayFunction} component={MyStudents} />
          <Route exact path='/myteachers' display={this.DisplayFunction} component={MyTeachers} />
          <Route exact path='/myteachercourses' display={this.DisplayFunction} component={MyTeacherCourses} />
   
          <Route exact path='/signup' display={this.DisplayFunction} component={SignUp} />
    
          <Route exact path='/signin' display={this.DisplayFunction} component={SignIn} />
          
          <Route exact path='/signout' component={SignOut} />
   
          <Route exact path='/teacherdashboard' component={TeacherDashBoard} />
   
          <Route exact path='/quiz' component={Quiz} />
   
   
      
          
        
          </div>
    
    
    
          </div>
          
     
    )
}
}  
     

       

 
 

 


 
     



function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}
export default connect(mapStateToProps)(App);




// : 
// <div>  

// <Route exact path='/'
// render={(props) => (
// <Home {...props} name='hello world' visible={this.state.visible} onhomeclick={this.goToStockSearch} />
// )} />

// <Route exact path='/addcourse' component={AddCourse} />

// <Route exact path='/math100' component={Math100} />
// <Route exact path='/math110' component={Math110} />
// <Route exact path='/math200' component={Math200} />
// <Route exact path='/math400' component={Math400} />
// <Route exact path='/pickteacher' component={PickTeacher} />

// <Route exact path='/mycourses' component={MyCourses} />

// {/* <Route exact path='/adminloginPage' component={AdminLoginPage} /> */}

// {/* <Route exact path='/grades' display={this.DisplayFunction} component={Grades} /> */}
// <Route exact path='/teachercourse' display={this.DisplayFunction} component={TeacherCourse} />

// {/* <Route exact path='/teachersignup' display={this.DisplayFunction} component={TeacherSignUp} />
// <Route exact path='/teachersignin' display={this.DisplayFunction} component={TeacherSignIn} /> */}
// {/* <Route exact path='/teachersignout' display={this.DisplayFunction} component={TeacherSignOut} /> */}
// <Route exact path='/mystudents' display={this.DisplayFunction} component={MyStudents} />
// <Route exact path='/myteachers' display={this.DisplayFunction} component={MyTeachers} />
// <Route exact path='/myteachercourses' display={this.DisplayFunction} component={MyTeacherCourses} />

// <Route exact path='/signup' display={this.DisplayFunction} component={SignUp} />

// <Route exact path='/signin' display={this.DisplayFunction} component={SignIn} />

// <Route exact path='/signout' component={SignOut} />

// <Route exact path='/teacherdashboard' component={TeacherDashBoard} />

// <Route exact path='/quiz' component={Quiz} />









// </div>
// }