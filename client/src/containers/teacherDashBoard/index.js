import React, { Component } from 'react'
import axios from 'axios'



export default class TeacherDashBoard extends Component {

state={
    userData:{},
    allTeachers: []
}
    componentDidMount() {
        this.getTeacherData()
        this.getAllTeacherData()
        this.getTeacherData()

        
    }
    getTeacherData = () => {
      axios.get('/api/teacher/teacherprofile',{
        headers: { authorization: localStorage.getItem('teachertoken') },
      }).then((response)=>{
        this.setState({userData:response.data},()=>{
          console.log(response.data,'add course ')
        })
  
      })
   }

   getAllTeacherData = () => {
    axios.get('/api/teacher/getallteacher').
    then((response)=>{
      // console.log(response.data.myStocks[0].text,'user response')
      this.setState({allTeachers:response.data},()=>{
        console.log(response.data,'all teachers is working? ')
      })

    })

 
 }


    render() {
        return (
            <div style={{textAlign:"center"}}>
                Welcome to your teacher dashboard
                <button onClick={this.getTeacherData}> </button>
            </div>
        )
    }
}
