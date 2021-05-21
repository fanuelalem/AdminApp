import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Message, Button,Icon } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';


import { signOut } from '../../actions/auth';

class SignOut extends Component {

  componentDidMount() {
    this.props.signOut();
  }

  render() {
    return (
<div>

 
<Helmet>
   <style>{
   'body {   }'
   }</style>

         </Helmet>
      <Container>
        <Message style={{margin:'100px 0 0 0'}}negative >
          <div style={{display:'flex',justifyContent:'center'}}>
            <h3>Were are sorry to see you go :(</h3>
          </div>
        </Message>
        
        <div style={{display:'flex',justifyContent:'center',margin:"20px 0 0 0"}}>
       

        <div>

 
<Button as={Link} to='/' size='large' className='buttn' style={{color:'#333'}}> 
      <Icon name='arrow alternate circle left outline'></Icon>Go back home
      </Button>
      </div>

        </div>
       </Container>

      </div>

    );
  }
}

export default connect(null, { signOut })(SignOut);
