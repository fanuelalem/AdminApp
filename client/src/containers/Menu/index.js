import axios from 'axios';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ImageUploader from 'react-images-upload';
import {
  Container,
  Icon,
  Button
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';
export default class Menu extends Component {
  state = {
    pictures: [],
    file: '',
    fileName: '',
    uploadedFile: {},
    myImages: [],
  };

 
  componentDidMount = () => {
    this.getMyImage();
    console.log('getting images....');
  };

  getMyImage = () => {
    axios
      .get('/api/user/myimages', {
        headers: { authorization: localStorage.getItem('token') },
      })
      .then(response => {
        this.setState({ myImages: response.data.reverse() });
        console.log('myImages:response.data ', response.data);
      });
  };

  handleRequest = event => {
    event.preventDefault();
    const data = new FormData();
    const { file } = this.state;
    data.append('file', file);

    axios
      .post('/api/user/myimages', data, {
        'Content-Type': 'multipart/form-data',
        headers: { authorization: localStorage.getItem('token') },
      })
      .then(response => {
        const { fileName, filePath } = response.data;
        console.log(response.data, 'response.data filename and filepath');
        this.setState({ uploadedFile: response.data });
        this.getMyImage();
      });
  };

  render() {
    console.log(this.state, 'console');
    return (
      <div>
        <Helmet>
          <style>
            {
              'body { background-image: linear-gradient(to bottom right, #30496b, #30b8d2) }'
            }
          </style>
        </Helmet>
        
        <div>
          <Container>
            <p
              className="construction"
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '120px 0 0 0',
                fontSize: '18px',
                fontWeight: '200',
              }}
            >
              Sorry, This project is still 
            </p>
            <div
              style={{
                margin: '0 140px 0 140px',
                padding: '10px 20px 10px 20px',
                border: '6px solid white',
              }}
            >
              <p
                className="construction"
                style={{
                  textAlign: 'center',
                  fontSize: '80px',
                  fontWeight: '600',
                }}
              >
                Under Construction
              </p>
            </div>
            <br></br>
            <br></br>

            <p
              className="construction"
              style={{
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: '200',
              }}
            >
            I'm working to complete this project as soon as I can, In the    
              <br></br>meantime you can check out my other projects 
              <a style={{color:"skyblue"}} href='http://fanuel-portfolio.herokuapp.com/'> here</a> 
            </p>
            <br></br>
            <div style={{display:"flex",justifyContent:"center"}}>
                <Link to='/'>
                <Button  style={{borderRadius:"10px",width:"200px",fontSize:"16px",backgroundColor:"white",color:"#555555"}}>
               <span >go back </span>  
                
                </Button>
                </Link>
           

            </div>
             <br></br>

            <br></br>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <a
                style={{ color: 'white' }}
                href="mailto:fanuelnalem@outlook.com"
              >
                <Icon size="large" name="mail" />
              </a>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
