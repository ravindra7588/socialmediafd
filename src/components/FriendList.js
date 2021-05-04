import React, { Component } from 'react';
 import axios from 'axios';
 import "./Search.css";
 import UserSideBar from '../components/UserAside'
 import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import {getUserByEmailId} from '../service/UserService'
import Aheader from './Aheader';
import UserNav from './UserNav';
import {findFriendList} from '../service/FriendRequest'

export default class FriendList extends Component {
    constructor(props){
        super(props)
        this.state={
            userId:0,
            user:[]
        }
    }
    //pass user id 
   async componentDidMount(){
    let details = localStorage.getItem('user');
        details = JSON.parse(details);
        let email = details.emailId;
        getUserByEmailId(email).then(res => {
            this.setState({ userId: parseInt(res.data.userId)});
            console.log(this.state.userId);
        

            findFriendList(this.state.userId).then(rep =>{

           
                console.log(this.state.userId)
      //const resp= await axios.get(`http://localhost:8080/api/friend/${this.state.userId}`);
      if(rep.data==="NO FRIEND ADDED"){
        alert("No FRIENDS ADDED");
        this.setState({user:[]});
    }
    else{
        this.setState({user:rep.data});
    }
      
     
    })
    }); 
    }

    render() {
       
    
        return (
           <div>
               <Router>
      <Link to="/friendlist"></Link>
     
    </Router>
    <UserNav></UserNav>
    <br/><br/><br/><br/>
       <div className="usercard" >
    <div class="row ">
     
      <div class="col-8  p-5 ml-auto mr-auto ">
      <div  className="container">
                   <br/>
                   <br/>
                   <hr/>
                   <h2  className="text-center" style={{fontSize:"50px",fontFamily:"sans-serif"}}>FriendList</h2>
                   
                       <table className="table ">
                           <thead>
                               <tr>
                                   <th >UserName</th>
                                   <th >phoneNumber</th>
                               </tr>
                           </thead>
                           <tbody>
                               {
                                   this.state.user.map( 
                                       user=>
                                       <tr key={user.userId}>   
                                           <td >{user.firstName}</td>
                                           <td >{user.phoneNumber}</td>
                                         </tr>

                                   )
                               }
                           </tbody>
                       </table>
                   
               </div></div>
               </div>
               
           </div> 
           <Footer></Footer>
           </div>
        );
    }
}
