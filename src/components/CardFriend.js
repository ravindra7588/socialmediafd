import React, { Component } from 'react';
import { deleteFriends,acceptREQUEST} from "../actions/projectActions";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./Search.css";
  class CardFriend extends Component {
    constructor(props){
        super(props);
        this.state={
            userid:"",
            profile:[],
        }
        this.acceptRequest=this.acceptRequest.bind(this);
        this.deleteRequest=this.deleteRequest.bind(this);
    }
     acceptRequest (id,id2){
       this.props.acceptREQUEST(id,id2);
       this.props.acceptFriend(id);
     }
  
     deleteRequest(id,id2){
         this.props.deleteFriends(id,id2);
        this.props.deleteFriend(id);
        
     }
    render() {
        this.state.profile=this.props;
        
        return (
            <div>
                 <div classname="container">
                    <div className="box">
                        <div className="username">{this.state.profile.user.firstName}</div>
                        <button type="button" onClick={()=>this.acceptRequest(this.state.profile.user.userId,this.state.profile.userid2.userId)} className="btn btn-outline-success">accept</button>
                        <button type="button" style={{marginLeft:"10px"}}onClick={()=>this.deleteRequest(this.state.profile.user.userId,this.state.profile.userid2.userId)} className="btn btn-outline-danger">delete</button>
                    </div> 
                    </div>  
            </div>
        )
    }
}
CardFriend.propTypes={
    deleteFriends:PropTypes.func.isRequired
}
CardFriend.propTypes={
     acceptREQUEST:PropTypes.func.isRequired
}


 export default connect (null,{deleteFriends,acceptREQUEST})(CardFriend);