import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import Aside from './aside';
import SideBar from './aside';

import adminViewAllUserIdAction from '../actions/AdminViewAllUserIdAction'
import adminUserDeleteAction from '../actions/AdminUserDeleteAction'
import adminViewUerAction from '../actions/AdminViewUserAction'
import AdminUserViewByUserIdAction from '../actions/AdminViewUsersByUserIdAction'
import UserSideBar from './UserAside';

let dispatch;
let selectedview;
let selectedOption;
let userList;
const AdminUser = (props) => {

 
    let [initialState, setInitialState] = useState();
    userList = useSelector(state => state.adminReducer.initialState);

  /*   useSelector is a function that takes the current 
      state as an argument and returns whatever data you want from it. */
 

       /* dispatch-- is the method used to dispatch actions and trigger state changes to the store*/
       dispatch = useDispatch();

  

     

    console.log("userList: ", userList);
    if(!Array.isArray(userList)) {
        userList = [];
        console.log("Set userList to blank array");
    }

   

  
  console.log("userList",userList)

  


  function handleSearch(event) {
    event.preventDefault();
      dispatch(adminViewUerAction())
    .then((response) => {
      console.log("Response: ", response);
      console.log("routeList: ", userList);
      setInitialState(userList);
    });
  }
    

    
return(<div>
  
  <Router>
      <Link to="/adminuser"></Link>
     
    </Router>
<Header></Header>
<div class="container-fluid">
<div class="row ">
  <div class="col col-lg-2  bg-dark">
    <UserSideBar></UserSideBar>
  </div>
  <div class="col col-lg-10 bg-light">
<div class="col d-flex justify-content-center">

  <div class="container pt-5 px-5 ">

   <center> <h3 class="font-weight-bold">View User</h3></center><br></br>
   <div class="col d-flex justify-content-center">
   <div class="col-12 border border-dark p-5 ml-auto mr-auto bg-light  ">
   <center>
      <h2 class="font-weight-bold">User </h2>

      <button className="btn btn-primary" id="btnsubmit" onClick={handleSearch}>View</button><br></br>
        <div class="row d-flex justify-content-center mt-2">
        
            
{renderTableData(userList)}
</div>

    </center>
   </div>
    </div>
    
  </div>

  
</div>
</div>
</div>
</div>
<center><Footer></Footer></center>


</div>)
 
 
};

function renderTableData(userList) {
    console.log("userList: ", userList);
    return userList.map((user, index) => {
       const { userprofile_id,about,createdOn,gender,languages,profilePicUrl } = user //destructuring
       return (
        <div class="col-lg-12 mb-4"  >
        <div class="card card-body  border-secondary"key={userprofile_id}>
        <div><strong>User Id:</strong>{userprofile_id}</div>
        <div><strong>about :</strong> {about}</div>
        <div><strong> createdOn :</strong> {createdOn}</div>
        <div><strong>languages :</strong>  {languages}</div>
        <div><strong>User Name :</strong>  {profilePicUrl}</div>
        <center><div class="btn-group" style={{'width':"100px"}} role="group" aria-label="Basic mixed styles example">
             <button style={{'width':"50px"}} class="btn btn-outline-danger" value="Delete" onClick={(e) => deleteUser(e, userprofile_id)}>Delete</button>
             
             </div></center>
        </div></div>
       
          
       )
    })
 };


function deleteUser(event,userprofile_id) {
  event.preventDefault();
  console.log("id",userprofile_id);
  const r = window.confirm("Are you sure you want to delete this User?"); if(r == true)
  dispatch(adminUserDeleteAction(userprofile_id));
}



export default AdminUser;
