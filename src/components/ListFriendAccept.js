import React, { Component } from 'react';
import CardFriend from './CardFriend';
import {getFriends} from '../actions/projectActions'; 
import { connect } from 'react-redux';
import  PropTypes from 'prop-types';
import UserSideBar from '../components/UserAside'
import axios from 'axios';
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import {getUserByEmailId} from '../service/UserService'
import Aheader from './Aheader';
import UserNav from './UserNav';
import FriendRequest from '../service/FriendRequest'
import {findFriendRequest} from '../service/FriendRequest'


 class ListFriendAccept extends Component {
      constructor(props){
          super(props);
          this.state={
               userId:0,
               name:"",
               user:[]
          }

      }
       componentDidMount(){
        let details = localStorage.getItem('user');
        details = JSON.parse(details);
        let email = details.emailId;
        getUserByEmailId(email).then(res => {
            this.setState({ userId: parseInt(res.data.userId)});
            console.log(this.state.userId);
           console.log(this.state.userId);
           findFriendRequest(this.state.userId).then(rep =>{
                if(rep.data !== "NO REQUEST FOUND"){
                this.setState({user:rep.data});
           }
           else{
                this.setState({user:[]});
               alert("NO REQUET FOUND");
            }
        });
        });
             }   
           
       deleteFriend=(id)=>{
           let copyuser=[...this.state.user];
           copyuser=copyuser.filter(p=>p.user.userId !== id);
           this.setState({user:copyuser});

       }
       acceptFriend=(id)=>{
        let copyuser=[...this.state.user];
        copyuser=copyuser.filter(p=>p.user.userId !== id);
        this.setState({user:copyuser});
       }
    
    render() {
    
        return (
            <div>
                <Router>
      <Link to="/listRequest"></Link>
     
    </Router>
    <UserNav></UserNav>
    <br/><br/><br/><br/>
       <div className="usercard" >
    <div class="row ">
     
      <div class="col-8  p-5 ml-auto mr-auto ">
                <br></br>
                <h1></h1>
               {this.state.user.map(p=> <CardFriend key={p.userid}{...p} deleteFriend={this.deleteFriend} acceptFriend={this.acceptFriend} />)}
               </div></div>
              
            </div>
            <Footer></Footer>
            </div>
        )
    }
}
ListFriendAccept.propTypes={
   project:PropTypes.object.isRequired,
   getFriends:PropTypes.func.isRequired
}
  const mapStateToProps = state =>({
      project:state.project,
  })


    export default connect(mapStateToProps,{getFriends})(ListFriendAccept);
    
        //    async componentDidMount(){
                         
        //        const rep=await axios.get("http://localhost:8082/friend1/7");
        //        console.log(rep.data);
        //        if(rep.data !== "NO REQUEST FOUND"){
        //        this.setState({profile:rep.data});
        //    }
        //    else{
        //        this.setState({profile:[]});
        //        alert("NO REQUET FOUND");
        //    }
        //     }
   
