import React from 'react';

import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import Footer from '../components/Footer'
import Header from '../components/Header'
import SideBar from '../components/aside'
import Post from '../models/Post'

import viewPostsAction from '../actions/VIewPostsAction'
import AddPost from '../actions/AddPost'
import showUser from '../actions/viewUser'
import UserProfile from '../models/UserProfile';
import AddUserProfile from '../actions/AddUserProfile';
import UserSideBar from './UserAside';
import Aheader from './Aheader';
import UserNav from './UserNav';

let dispatch;
let history;
let selectedUserId;
let postList;
let userList;


const AddUserProfileComponent = (props) => {


  /* dispatch-- is the method used to dispatch actions and trigger state changes to the store*/

  dispatch = useDispatch();
  history = useHistory();
 userList = useSelector(state => state.postReducer.userlist);
 postList = useSelector(state => state.userProfileReducer.initialState);

  React.useEffect(() => {
    UserList()
  }, []);

  React.useEffect(() => {
    PostList()
  }, []);

  const UserList = () => {
    dispatch(showUser())
  }

  const PostList = () => {
    dispatch(viewPostsAction())
  }
  console.log("postList valid: ", postList);


  console.log("UserList:", userList);
  if (!Array.isArray(userList)) {
    userList = [];
    console.log("Set userList to blank array");
  }


  return (
    <div>
      <Router>
      <Link to="/adduserprofile"></Link>
     
    </Router>
     <UserNav></UserNav>
     <br/><br/><br/><br/>
       <div className="usercard" >
      <main>
       

        
              <div class="col-8 p-5 ml-auto mr-auto ">
                <h3 align='center'>Add User Profile</h3>
                <form onSubmit={handleSubmit} >

                  <div class="form-group row ">
                    <label for="about" class="col-4 col-form-label font-weight-bold">About:</label>
                    <div class="col-8">
                      <input type="text" class="form-control mt-0" id="" name="about" placeholder="About....."    required></input>
                    </div>
                  </div>

                  

                  <div class="form-group row ">
                    <label for="createdOn" class="col-4 col-form-label font-weight-bold">Account Created on :</label>
                    <div class="col-8">
                      <input type="date" class="form-control" id="createdOn" name="createdOn"  required></input>
                    </div>
                  </div>

                  <div class="form-group row ">
            <label for="gender" class="col-4 col-form-label font-weight-bold">Gender :</label>
            <div class="col-4">
        <div class="d-flex">
        <input type="radio" value="Male" name="gender" class="col-4" /> Male
        <input type="radio" value="Female" name="gender" class=" col-4"/> Female
        
        </div>
      </div>
      </div>

                  <div class="form-group row ">
                    <label for="languages" class="col-4 col-form-label font-weight-bold">Languages :</label>
                    <div class="col-8">
                    <input type="text" class="form-control" id="languages" name="languages" placeholder="Enter Languages"  required></input>
                     
                    </div>
                  </div>
                  <div class="form-group row ">
                    <label for="profilePicUrl" class="col-4 col-form-label font-weight-bold"> Username:</label>
                    <div class="col-8">
                      <input type="text" class="form-control" id="profilePicUrl" name="profilePicUrl" placeholder="Enter Username"  required></input>
                    </div>
                  </div>



                
  {/*<div class="form-group row ">
                    <label for="userprofile_id" class="col-4 col-form-label font-weight-bold">title :</label>
                    <div class="col-8">
                      <input type="text" class="form-control" id="userprofile_id" name="userprofile_id" placeholder="Enter title"  required></input>
                    </div>
  </div>*/}

                  <center>
                    <button class="btn btn-primary" id="btnsubmit" >ADD-UserProfile</button>
                  </center>

                </form>
             </div>

        
      </main>
      </div>
      <Footer></Footer>


    </div>

  )
};





function handleSubmit(event) {

  /*  The preventDefault() method cancels the event if it is cancelable,
    meaning that the default action that belongs to the event will not occur. */
  event.preventDefault();
  const data = new FormData(event.target);
  console.log("in handle submit data:", data);
  const about = data.get('about');
  const createdOn = data.get('createdOn');
  const gender = data.get('gender');
  const languages = data.get('languages');
  const profilePicUrl = data.get('profilePicUrl');
  const userObj = new UserProfile(about, createdOn, gender, languages, profilePicUrl);
  dispatch(AddUserProfile(userObj));
  alert("User Profile Added Succesfully");


  history.push('/adduserprofile');
};


/*function to get all party name from database */
/*function renderPartys(userList) {
  console.log("userList: ", userList);
  return userList.map((userProfile, index) => {
    const { userprofile_id, about, createdOn,gender,languages,profile_pic_url } = userProfile //destructuring
    return (
      <option key={userprofile_id} value={userprofile_id}>{userprofile_id}</option>
    )
  })
};*/

/*function to select party name from the dropdown*/
/*function handleChange(event) {
  selectedUserId = event.target.value
  console.log("selected party: ", selectedUserId);
};*/






export default AddUserProfileComponent;