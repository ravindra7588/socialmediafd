import React from 'react';

import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import Footer from '../components/Footer'
import Header from '../components/Header'
import SideBar from '../components/aside'
import Post from '../models/Post'
import back3 from '../images/back4.jpg'
import viewPostsAction from '../actions/VIewPostsAction'
import AddPost from '../actions/AddPost'
import UserSideBar from '../components/UserAside'
import showUser from '../actions/viewUser'
import Aheader from './Aheader';
import UserNav from './UserNav';

let dispatch;
let history;
let selectedUserId;
let postList;
let userList;


const AddPostComponent = (props) => {


  /* dispatch-- is the method used to dispatch actions and trigger state changes to the store*/

  dispatch = useDispatch();
  history = useHistory();
 userList = useSelector(state => state.postReducer.userlist);
 postList = useSelector(state => state.postReducer.initialState);

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
      <Link to="/addpost"></Link>
     
    </Router>
     <UserNav></UserNav>
     
       <br/><br/><br/><br/>
       <div className="usercard" >
      <main>
       

       
           
              <div class="col-8  p-5 ml-auto mr-auto ">
                <h3 align='center'>Add Posts</h3><br/>
                <form onSubmit={handleSubmit} >

                  <div class="form-group row ">
                    <label for="post_content" class="col-4 col-form-label font-weight-bold">Post content :</label>
                    <div class="col-8">
                      <input type="text" class="form-control" id="post_content" name="post_content" placeholder="Enter content"  required></input>
                    </div>
                  </div>

                  <div class="form-group row ">
                    <label for="post_likes" class="col-4 col-form-label font-weight-bold">post likes :</label>
                    <div class="col-8">
                    <input type="number" class="form-control" id="post_likes" name="post_likes"  required>
                    
                    </input>
                     
                    </div>
                  </div>

                  <div class="form-group row ">
                    <label for="postedOn" class="col-4 col-form-label font-weight-bold">posted on :</label>
                    <div class="col-8">
                      <input type="date" class="form-control" id="postedOn" name="postedOn"  required></input>
                    </div>
                  </div>


                  <div class="form-group row ">
                    <label for="title" class="col-4 col-form-label font-weight-bold">title :</label>
                    <div class="col-8">
                      <input type="text" class="form-control" id="title" name="title" placeholder="Enter title"  required></input>
                    </div>
                  </div>



                 <div class=" form-group row">
                    <label for="userId" class="col-4 mr-3 font-weight-bold">userId:</label>
                    <select class="form-control col-7 state" id="userId" onChange={handleChange} required>
                      <option>Select</option>
                      {renderPartys(userList)}
                    </select>
  </div>
  {/*<div class="form-group row ">
                    <label for="userprofile_id" class="col-4 col-form-label font-weight-bold">title :</label>
                    <div class="col-8">
                      <input type="text" class="form-control" id="userprofile_id" name="userprofile_id" placeholder="Enter title"  required></input>
                    </div>
  </div>*/}

                  <center>
                    <button class="btn btn-primary" id="btnsubmit" >ADD-Post</button>
                  </center>

                </form>
              </div>
           
          <Footer></Footer>
        
        
        
      </main>
      </div>

      


    </div>

  )
};





function handleSubmit(event) {

  /*  The preventDefault() method cancels the event if it is cancelable,
    meaning that the default action that belongs to the event will not occur. */
  event.preventDefault();
  const data = new FormData(event.target);
  console.log("in handle submit data:", data);
  const post_content = data.get('post_content');
  const post_likes = data.get('post_likes');
  const postedOn = data.get('postedOn');
  const title = data.get('title');
  const postObj = new Post(post_content, post_likes, postedOn, title, selectedUserId);
  dispatch(AddPost(postObj));
  alert("post Added Succesfully");


  history.push('/addpost');
};


/*function to get all party name from database */
function renderPartys(userList) {
  console.log("userList: ", userList);
  return userList.map((userProfile, index) => {
    const { userprofile_id, about, createdOn,gender,languages,profile_pic_url } = userProfile //destructuring
    return (
      <option key={userprofile_id} value={userprofile_id}>{userprofile_id}</option>
    )
  })
};

/*function to select party name from the dropdown*/
function handleChange(event) {
  selectedUserId = event.target.value
  console.log("selected party: ", selectedUserId);
};






export default AddPostComponent;