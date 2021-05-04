import React from "react";
import classnames from "classnames";
import './CSS/style.css'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { addUser } from '../actions/SignUpAction';
import Aheader from "./Aheader";
import HomeHeader from '../components/HomeHeader'
import Footer from "./Footer";
import back3 from '../images/back4.jpg'
const initialState = {
    username: "",
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    phoneNumber: "",
    
    usernameError: "",
    firstNameError: "",
    lastNameError: "",
    emailIdError: "",
    passwordError: "",
    phoneNumberError: "",
    
    errors: {}

}
class SignUp extends React.Component {
    state = initialState;

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    handleFormValidation() {
        const nameRegex = RegExp(/^[A-Za-z ]+$/);
        const emailIdRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const phoneNumberRegex = RegExp(/^[6-9][0-9]{9}$/);
        const passwordRegex = RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);


        let usernameError = "";
        let firstNameError = "";
        let lastNameError = "";
        let emailIdError = "";
        let passwordError = "";
        let phoneNumberError = "";
       


        if (!this.state.firstName) {
            firstNameError = "First Name is required";
        }
        else if (this.state.firstName.length < 3 || !this.state.firstName.match(nameRegex)) {
            firstNameError = "First Name must be at least 3 characters and must contain characters only";
        }
        if (!this.state.lastName) {
            lastNameError = "Last Name is required";
        }
        else if (this.state.lastName.length < 3 || !this.state.lastName.match(nameRegex)) {
            lastNameError = "Last Name must be at least 3 characters and must contain characters only";
        }
       
        
        
        if (!this.state.emailId) {
            emailIdError = "Email is required";
        }
        else if (!this.state.emailId.match(emailIdRegex)) {
            emailIdError = "Invalid email";
        }

        if (!this.state.phoneNumber) {
            phoneNumberError = "Phone Number is required";
        }
        else if (!this.state.phoneNumber.match(phoneNumberRegex)) {
            phoneNumberError = "Invalid Phone number";
        }
        if (!this.state.username) {
            usernameError = "User Name is required";
        }
        else if (this.state.username.length < 8) {
            usernameError = "User Name must be at least 8 characters";
        }
        if (!this.state.password) {
            passwordError = "Password is required";
        }
        else if (!this.state.password.match(passwordRegex)) {
            passwordError = "Password must be at least 8 characters with A-Z,a-z,0-9 and @*&#$";
        }

       
        if (firstNameError || lastNameError || emailIdError || phoneNumberError || usernameError || passwordError) {
            this.setState({ firstNameError, lastNameError, emailIdError, phoneNumberError, usernameError, passwordError });
            return false;
        }
        return true;

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.handleFormValidation();
        if (isValid) {
            alert('User Registered Successfully');
            const newUser = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                emailId: this.state.emailId,
                phoneNumber: this.state.phoneNumber,
                username: this.state.username,
                password: this.state.password
            }
            this.props.addUser(newUser, this.props.history);
            console.log(this.state);
            this.setState(initialState);
        }
        console.log("----------------submit button clicked------------------");
       
    }
    render() {
        const { errors } = this.state;
        return (
            <div>
               <Aheader></Aheader> 
                
            <div className="userbody">
                <form onSubmit={this.handleSubmit}>
                    <br/><br/><br/><br />
                    
                   <div className="usercard" >
                    <h2 className="userHeading">User Registration</h2><br />
                
                    <div className="form-group">
                        <input type="text"   name="username"
                            className={classnames("form-control userinput ",
                                { "is-invalid": this.state.usernameError })}
                            placeholder="User Name"
                            value={this.state.username}
                            onChange={this.handleChange} />
                        <div className="text-danger userpwd">{this.state.usernameError}</div>
                    </div>

                    <div className="form-group">
                        <input type="text"   name="firstName"
                            className={classnames("form-control userinput ",
                                { "is-invalid": this.state.firstNameError })}
                            value={this.state.firstName}

                            placeholder="First Name"
                            onChange={this.handleChange}
                        />
                        <div className="text-danger userpwd">{this.state.firstNameError}</div>

                    </div>

                    <div className="form-group">
                        <input type="text"  name="lastName"
                            className={classnames("form-control userinput ",
                                { "is-invalid": this.state.lastNameError })}
                            value={this.state.lastName}

                            placeholder="Last Name"
                            onChange={this.handleChange}
                        />
                        <div className="text-danger userpwd">{this.state.lastNameError}</div>

                    </div>

                    <div className="form-group">
                        <input type="text"   name="emailId"
                            className={classnames("form-control userinput ",
                                { "is-invalid": this.state.emailIdError })}
                            placeholder="Email Id"
                            value={this.state.emailId}
                            onChange={this.handleChange} />
                        <div className="text-danger userpwd">{this.state.emailIdError}
                        {errors.username && <div className="text-danger">{errors.username}</div>}</div>
                    </div>

                    <div className="form-group">
                        <input type="text"   name="phoneNumber"
                            className={classnames("form-control userinput", 
                                { "is-invalid": this.state.phoneNumberError })}
                            placeholder="Phone Number"
                            value={this.state.phoneNumber}
                            onChange={this.handleChange} />
                        <div className="text-danger userpwd">{this.state.phoneNumberError}</div>
                    </div>

                    <div className="form-group">
                        <input type="password"  name="password"
                            className={classnames("form-control userpassword ",
                                { "is-invalid": this.state.passwordError })}
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                        <div className="text-danger userpwd">{this.state.passwordError}</div>
                    </div>

                   
                   <center> <div >
                    <input type="submit" className="btn  btn-primary btn-lg" value="Sign Up" />
                    </div></center>
                    <center>
                    <div className="loginredirect">
                    <p className="float-left text-dark pb-2">
                        Already have an account? <NavLink to="Login">Login</NavLink>
                    </p>
                </div></center>
                </div>
                </form>
               
            </div>
            <br></br><br></br>
            <Footer></Footer>
            </div>
            
        );
    }
}
SignUp.propTypes = {
    addUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors: state.errors
})
export default connect(mapStateToProps, { addUser })(SignUp);