import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {register} from '../service/UserService'
import HomeHeader from './HomeHeader';
import Footer from './Footer';
class Register extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            username:"",
            firstName:"",
            lastName:"",
            gender:"",
            emailId:"",
            password:"",
            phoneNumber:""
        }
        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.onSubmitHandler=this.onSubmitHandler.bind(this);
    }

    onChangeHandler=(event)=>{
        this.setState(
            {[event.target.name] : event.target.value}
        );
     }

     onSubmitHandler=(event)=>{
        event.preventDefault();
        const newUser = {
            username:this.state.username,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            gender:this.state.gender,
            emailId:this.state.emailId,
            password:this.state.password,
            phoneNumber:this.state.phoneNumber
        }
        console.log('newUser => '+JSON.stringify(newUser));
        register(newUser).then((res)=>{
            alert("User Registeration Successful");
            this.props.history.push('/Login');
        });
    }


    render() {
        return (<div>
            <HomeHeader></HomeHeader>
            <div className="User">
            <div className="container">
                <br /><br />
           
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 m-auto ">
                        <h3 className="display-6 text-center">Please Enter your Details</h3>
                        <hr />
                        <div class="card card-body bg-light" style={{'width':'500px'}}> 
                        <form>
                            <div className="form-group">
                                <label><h6 className="display-6">User Name:</h6></label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    placeholder="Enter your user name" 
                                    name="username" 
                                    onChange={this.onChangeHandler}
                                    value={this.state.username}
                                   required/>
                                   
                            </div>
                            <div className="form-group">
                                <label><h6 className="display-6">First Name:</h6></label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    placeholder="Enter your first Name" 
                                    name="firstName" 
                                    onChange={this.onChangeHandler}
                                    value={this.state.firstName}
                                    required/>
                            </div>

                            <div className="form-group">
                                <label><h6 className="display-6">last Name:</h6></label>
                                <input 
                                    type="text"
                                    className="form-control" 
                                    placeholder="Enter your last Name" 
                                    name="lastName" 
                                    onChange={this.onChangeHandler}
                                    value={this.state.lastName}
                                    required/>
                            </div>

                            <div className="form-group">
                            <label><h6 className="display-6">EmailId:</h6></label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Enter your EmailId" 
                                    name="emailId" 
                                    onChange={this.onChangeHandler}
                                    value={this.state.emailId}
                                    required/>
                            </div>
                           
                            <div className="form-group">
                            <label><h6 className="display-6">Password:</h6></label>
                                <input 
                                    type="password"
                                    className="form-control" 
                                    placeholder="Enter the password" 
                                    name="password" 
                                    onChange={this.onChangeHandler}
                                    value={this.state.password}
                                    required/>
                            </div>
                            <div className="form-group">
                            <label><h6 className="display-6">Phone Number:</h6></label>
                                <input 
                                    type="text"
                                    pattern="[6-9][0-9]{9}"
                                    className="form-control" 
                                    name="phoneNumber" 
                                    placeholder="Enter your Phone Number"
                                    onChange={this.onChangeHandler}
                                    value={this.state.phoneNumber}
                                    required/>
                            </div>
    
                            <input type="submit" className="btn btn-outline-success btn-lg" onClick={this.onSubmitHandler} style={{marginLeft: "40%"}}/>
                        </form></div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
        );
    }
}

export default Register;