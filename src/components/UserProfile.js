import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import UserProfileService from '../service/UserProfileService';
import {getUserByEmailId} from '../service/UserService'
import Footer from './Footer';
import UserNav from './UserNav';

export default class SeeProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            user: {}
        }
        

    }
    componentDidMount() {
        let details = localStorage.getItem('user');
        details = JSON.parse(details);
        let email = details.emailId;
        getUserByEmailId(email).then(res => {
            this.setState({ username: res.data.username });
            console.log(this.state.username);
        UserProfileService.getUserByuserName(this.state.username).then(res => {
                this.setState({ user: res.data })
            });

        });
    }
    

    render() {
        return (
            <div>
                <UserNav></UserNav>
                <br/><br/><br/><br/>
                <div className="usercard">
                <br/><br/>
                <h3 className="text-center">Your Profile</h3>
                <div className="card col-md-6 offset-md-3">
                    <div className="card-body">
                        <div className="row">
                            <label>About:  {this.state.user.about}</label>
                        </div>
                        
                        <div className="row">
                            <label>Languages : {this.state.user.languages} </label>
                            <div></div>
                        </div>
                        <div className="row">
                            <label>User Id : {this.state.user.userprofile_id}</label>
                            <div></div>
                        </div>
                        <div className="row">
                            <label>Created On : {this.state.user.createdOn} </label>
                            <div></div>
                        </div>
                        <div className="row">
                            <label>User Name : {this.state.user.profilePicUrl} </label>
                            <div></div>
                        </div>
                        
                       
                    </div>
                </div>
                <br />
                </div>
                <Footer></Footer>
            </div>

        );
    }
}