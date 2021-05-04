import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {loginUser} from '../service/UserService';
import HomeHeader from './HomeHeader';
import Footer from './Footer';
class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            emailId:"",
            password:""
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
        const loginCredentials = {
            emailId:this.state.emailId,
            password:this.state.password
        }
        console.log('loginCredentials => '+JSON.stringify(loginCredentials));
        loginUser(loginCredentials).then((res)=>{
            //console.log(res.data);
            if(loginCredentials.emailId==='admin@gmail.com' && loginCredentials.password==='admin'){
                this.props.history.push('/adminpost');
            }
            else if(res.data==='valid'){
                this.props.history.push('/adduserprofile');
            }
            else{
                alert("Type Correct Details");
            }
        });
    }


    render() {
        return (<div>
            <HomeHeader></HomeHeader>
            <div className="Login">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 m-auto">
                    <br /><br />
                        <h3 className="display-6 text-center">Login Form</h3>
                        <hr />
                        <div class="card card-body bg-light">
                        <form>


                            <div className="form-group">
                            <label><h6 className="display-6">EmailId:</h6></label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Enter your EmailId" 
                                    name="emailId"
                                    onChange={this.onChangeHandler}
                                    value={this.state.emailId}
                                    />
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
                                    />
                            </div>
                            <input type="submit" value="login" className="btn btn-outline-success btn-lg" onClick={this.onSubmitHandler}  style={{marginLeft: "30%"}}/>
                        </form></div><br></br>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
        );
    }
}

export default Login;