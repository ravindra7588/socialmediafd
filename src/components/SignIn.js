import React from 'react'
import classnames from 'classnames';
import { getUser } from '../actions/SignUpAction'
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import './CSS/style.css';
import HomeHeader from './HomeHeader';
import Footer from './Footer';
import Aheader from './Aheader';
import back3 from '../images/back4.jpg'
const initialState = {
    emailId: "",
    password: "",
    emailIdError: "",
    passwordError: "",
    errors: {}
}
class SignIn extends React.Component {
    state = initialState;

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    handleFormValidation() {
        let emailIdError = "";
        let passwordError = "";
        if (!this.state.emailId) {
            emailIdError = "emailId is required";
        }
        if (!this.state.password) {
            passwordError = "Password is required";
        }
        if (emailIdError || passwordError) {
            this.setState({ emailIdError, passwordError });
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
        localStorage.setItem('user', JSON.stringify(this.state));
        const isValid = this.handleFormValidation();

        if (isValid) {
            const newUser = {
                emailId: this.state.emailId,
                password: this.state.password,
            };
            /*  this.props.addUser(this.state.emailId, this.state.password);
              alert('User Logged In Successfully');
              console.log(this.state);
              this.setState(initialState);*/
            this.props.getUser(newUser, this.props.history);
        }
        
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
            <Aheader></Aheader>
            <br/><br/><br/><br/>
            <div className="usercard" >
            <div className="userbody">
                <form onSubmit={this.handleSubmit}>
                    <br /><br /><br />
                    <div className="usercard">
                    <h2 className="userHeading">Login</h2><br />
                    

                    <div className="form-group">
                        <input type="text" name="emailId"
                            className={classnames("form-control userinput",
                                { "is-invalid": this.state.emailIdError })}
                            placeholder="Email Id"
                            value={this.state.emailId}
                            onChange={this.handleChange} />
                        {errors.emailId && (
                            <div className="invalid-feedback">
                                {errors.emailId}
                            </div>)}
                        <div className="text-danger userpwd ">{this.state.emailIdError}</div>


                    </div>

                    <div className="form-group">
                        <input type="password"  name="password"
                            className={classnames("form-control userpassword  ",
                                { "is-invalid": this.state.passwordError })}
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                        <div className="text-danger userpwd ">{this.state.passwordError}</div>
                    </div>
                    <center>
                            <div className="userButton">
                   
                    <input type="submit" className="btn  btn-primary btn-lg" value="Sign In" />
                    
                    </div>
                    </center>
                    </div>
                </form>

            </div>
            </div>
            <Footer></Footer>
            </div>
        );
    }
}
SignIn.propTypes = {
    getUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors: state.errors
})
export default connect(mapStateToProps, { getUser })(SignIn);




