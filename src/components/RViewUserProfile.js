import React, { Component } from 'react';
import UserprofileService from '../service/UserProfileService';

class RviewUserprofileComponent extends Component {
   constructor(props){
       super(props)
       this.state = {
           userprofile_id:this.props.userprofile_id,
           user:[]

       }
   }
   componentDidMount(){
       console.log(this.state.userprofile_id);
       UserprofileService.getUserByuserprofile_id(this.state.userprofile_id).then(res => {
           console.log(res.data);
           this.setState({user:res.data});
       })

   }
   
   
    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 classname="text-center">View Userprofile Details</h3>
                    <div className="row">
                        <label>About:</label>
                        <div>{this.state.user.about}</div>
                    </div>
                    <div className="row">
                        <label>Gender:</label>
                        <div>{this.state.user.gender}</div>
                    </div>
                    <div className="row">
                        <label>Email Id:</label>
                        <div>{this.state.user.email}</div>
                    </div>
                    <div className="row">
                        <label>Languages:</label>
                        <div>{this.state.user.languages}</div>
                    </div>

                </div>

                
            </div>
        );
    }
}

export default RviewUserprofileComponent;