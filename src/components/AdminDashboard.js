import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import UserProfileService from '../service/UserProfileService';
import {getUserByEmailId} from '../service/UserService'
import Footer from './Footer';
import UserNav from './UserNav';
import userback from '../images/feature_3.png'
import AdminNav from './AdminNav';

export default class AdminDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
        

    }
    
    

    render() {
        return (
            <div>
                <AdminNav></AdminNav>
                <br/><br/><br/><br/>
                
                <br/><br/>
                <div style={{ backgroundImage:`url(${userback})` ,'height':"600px",'backgroundRepeat':'no-repeat'}}>
                <h2 className="text-center" style={{'color':'#00BFFF'}}>Welcome !  </h2>
                <h3 className="text-center">Admin
                </h3>
                <p className="text-center" style={{'color':'#DA70D6'}}><strong>Enjoy surfing </strong></p>
                <div>
               
                
                </div>

                              
                       
                        
                            
                           
                        </div>
                <Footer></Footer>
            </div>

        );
    }
}