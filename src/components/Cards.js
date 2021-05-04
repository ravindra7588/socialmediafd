import React, { Component } from 'react'
import "./Search.css";
export default class Cards extends Component {
    constructor(props){
        super(props)
        this.state={
            user:[]
        }
    }
    render() {
               this.state.user=this.props
        return (
            <div>
                <div>
                <div className="container">
                    <div className="borde">
                        <img src="https://i.pinimg.com/564x/6f/3c/d6/6f3cd6a064427fc2ccfe54e7529fe885.jpg " className="rounded-circle" style={{width:"30%",height:"100px"}} alt=""/>
                        <div className="info" style={{display:'inline-block',marginLeft:'20px'}}>
                            <div className="mm" style={{fontSize:"30px",fontFamily:"sans-serif"}}>{this.state.user.firstName}</div>
                            <div classname="gender" >{this.state.user.gender}   </div>
                            <div className="email">{this.state.user.emailId}</div>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        )
    }
}
