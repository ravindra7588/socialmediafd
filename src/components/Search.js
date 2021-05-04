import axios from 'axios';
import React, { Component } from 'react';
import Cards from './Cards';
import "./Search.css";
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import {addREQUEST} from '../actions/projectActions';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import UserSideBar from '../components/UserAside'
import Header from './Header';
import Footer from './Footer';
import {getUserByEmailId} from '../service/UserService'
import Aheader from './Aheader';
import UserNav from './UserNav';
class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            firstName:"",
            user:[]
        }
        this.changeFirstName=this.changeFirstName.bind(this);
        this.searchByFirstName=this.searchByFirstName.bind(this);
        this.addRequest=this.addRequest.bind(this);
    }
    componentDidMount() {
        let details = localStorage.getItem('user');
        details = JSON.parse(details);
        let email = details.emailId;
        getUserByEmailId(email).then(res => {
            this.setState({ name: res.data.firstName });
            console.log(this.state.name);
        

        });
    }

    changeFirstName=(event)=>{
        this.setState({firstName:event.target.value})
    }
    searchByFirstName= async (e)=>{
        e.preventDefault();
        const res= await axios.get(`http://localhost:8080/api/user/${this.state.firstName}`)
       
        this.setState({user:res.data});
        this.setState({firstName:''});
    }
    addRequest=(event)=>{
          event.preventDefault();
          const friend={

          };
          if(this.state.name != this.state.user.firstName){
          this.props.addREQUEST(this.state.name,this.state.user.firstName,friend,this.props.history);
          }
          else{
              alert(" same user not allow to friend request");
          }
    }
    render() {
        return (
            
            <div>
                <Router>
      <Link to="/search"></Link>
     
    </Router>
    <UserNav></UserNav>
    <br/><br/><br/><br/>
       <div className="usercard" >
    <div>
    <div class="row ">
     
      <div class="col-8  p-5 ml-auto mr-auto ">
            <form onSubmit={this.searchByFirstName}>
            <div className="search">
                <input type="text" placeholder="Search.." value={this.state.firstName} onChange={this.changeFirstName}/>
                <br></br>
                <br></br>
                <hr></hr>
                <div>
                <Cards {...this.state.user}/>
                </div>
            </div>
            </form>
            <hr></hr>
            <div className="container" >
                <button type="submic" onClick={this.addRequest} className="btn btn-dark btn-lg btn-block ">ADD REQUEST</button>
            </div>
            </div>
            </div></div>
            <Footer></Footer>
           </div>
           </div>
        );
    }
}

Search.propTypes ={
    addREQUEST : PropTypes.func.isRequired
}

export default connect(null,{addREQUEST})(Search);

const Testdata=[
    {name:"kumar"}
];