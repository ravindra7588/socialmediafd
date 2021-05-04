import React, { Component } from 'react';

import UserprofileService from '../service/UserProfileService'

class ListUserprofileComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            users: []
        }
        this.addUser=this.addUser.bind(this);
    }
    viewUserprofile(userprofile_id){
        this.props.history.push(`view-user/${userprofile_id}`);
    }
    componentDidMount(){
        UserprofileService.getUsers().then((res) =>{
        this.setState({users:res.data});

        });
    }
    addUser(){
        this.props.history.push('/add-user');
    }
    

    

    render() {
        return (
            <div>
                <h2 className="text-center">Userprofile</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addUser}>Add User</button>
                </div>
                <div className="row">
                <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        
                        <th>User About</th>
                        <th>User Gender</th>
                        <th>User Email Id</th>
                        <th>User Languages</th>
                        <th>Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                    this.state.users.map(
               user =>
               <tr key={user.userprofile_id}>
                   <td>{user.about}</td>
                   <td>{user.gender}</td>
                   <td>{user.email}</td>
                   <td>{user.languages}</td>
                   <td>
                       <button style={{marginLeft: "10px"}} onClick={ () =>this.viewUserprofile(user.userprofile_id)} 
                       className="btn btn-info">View</button>
                   </td>
                   

               </tr>


                    )
    }
                </tbody>

                </table>
               </div> 
            </div>
        );
    }
}

export default ListUserprofileComponent;