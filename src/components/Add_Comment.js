
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/aside";
import Post from "../models/Post";
import Comment from "../models/Comment";
import viewPostsAction from "../actions/VIewPostsAction";
import AddPost from "../actions/AddPost";
import showUser from "../actions/viewUser";
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import AddComment from "../actions/AddComment";
import UserSideBar from "./UserAside";
import Aheader from "./Aheader";
let dispatch;
let history;
let selectedUserId;
let postList;
let userList;
let commentList;
let selectedPostId;

const AddCommentComponent = (props) => {
  /* dispatch-- is the method used to dispatch actions and trigger state changes to the store*/

  dispatch = useDispatch();
  history = useHistory();
  userList = useSelector((state) => state.CommentReducer.userlist);
  postList = useSelector((state) => state.CommentReducer.postlist);
  commentList = useSelector((state) => state.CommentReducer.initialState);

  React.useEffect(() => {
    UserList();
  }, []);

  React.useEffect(() => {
    PostList();
  }, []);

 
  const UserList = () => {
    dispatch(showUser());
  };

  const PostList = () => {
    dispatch(viewPostsAction());
  };

  
  console.log("commentList valid: ", commentList);

  console.log("UserList:", userList);
  if (!Array.isArray(userList)) {
    userList = [];
    console.log("Set userList to blank array");
  }
  console.log("PostList:", postList);
  if (!Array.isArray(postList)) {
    postList = [];
    console.log("Set postList to blank array");
  }

  return (
    <div>
      <Router>
      <Link to="/addcomment"></Link>
     
    </Router>
    <Aheader></Aheader>
     <br/><br/><br/><br/>
       <div className="usercard" >

      <main>
        
              <div class="col-8  p-5 ml-auto mr-auto ">
                <h3 align="center">Add Comments</h3>
                <form onSubmit={handleSubmit}>
                  <div class="form-group row ">
                    <label
                      for="comment_content"
                      class="col-4 col-form-label font-weight-bold"
                    >
                      Comment content :
                    </label>
                    <div class="col-8">
                      <input
                        type="text"
                        class="form-control"
                        id="comment_content"
                        name="comment_content"
                        placeholder="Enter content"
                        required
                      ></input>
                    </div>
                  </div>

                  <div class="form-group row ">
                    <label
                      for="comment_likes"
                      class="col-4 col-form-label font-weight-bold"
                    >
                      comment likes :
                    </label>
                    <div class="col-8">
                      <input
                        type="number"
                        class="form-control"
                        id="comment_likes"
                        name="comment_likes"
                        required
                      ></input>
                    </div>
                  </div>

                  <div class="form-group row ">
                    <label
                      for="commentedOn"
                      class="col-4 col-form-label font-weight-bold"
                    >
                      Commented on :
                    </label>
                    <div class="col-8">
                      <input
                        type="date"
                        class="form-control"
                        id="commentedOn"
                        name="commentedOn"
                        required
                      ></input>
                    </div>
                  </div>
                  <div class=" form-group row">
                    <label for="postId" class="col-4 mr-3 font-weight-bold">
                      postId:
                    </label>
                    <input
                      type="text"
                      class="form-control col-7 state"
                      id="post_id"
                      name="post_id"
                      required
                    ></input>
                  </div>

                  <div class=" form-group row">
                    <label for="userId" class="col-4 mr-3 font-weight-bold">
                      userId:
                    </label>
                    <input
                      type="text"
                      class="form-control col-7 state"
                      id="userprofile_id"
                      name="userprofile_id"
                      required
                    ></input>
                  </div>
                  {/*<div class="form-group row ">
                    <label for="userprofile_id" class="col-4 col-form-label font-weight-bold">title :</label>
                    <div class="col-8">
                      <input type="text" class="form-control" id="userprofile_id" name="userprofile_id" placeholder="Enter title"  required></input>
                    </div>
  </div>*/}

                  <center>
                    <button class="btn btn-primary" id="btnsubmit">
                      ADD-Comment
                    </button>
                  </center>
                </form>
              </div>
            
      </main>
    </div>
      <Footer></Footer>
    </div>
  );
};

function handleSubmit(event) {
  /*  The preventDefault() method cancels the event if it is cancelable,
    meaning that the default action that belongs to the event will not occur. */
  event.preventDefault();
  const data = new FormData(event.target);
  console.log("in handle submit data:", data);
  const comment_content = data.get("comment_content");
  const comment_likes = data.get("comment_likes");
  const commentedOn = data.get("commentedOn");
  const post_id = data.get("post_id");
  const userprofile_id = data.get("userprofile_id");
  const commentObj = new Comment(
    comment_content,
    comment_likes,
    commentedOn,
    post_id,
    userprofile_id
  );
  dispatch(AddComment(commentObj));
  alert("comment Added Succesfully");

  history.push("/addcomment");
}
/*
function renderPosts(postList) {
  console.log("postList: ", postList);
  return postList.map((post, index) => {
    const { post_id, post_content, post_likes, postedOn, title } = post; //destructuring
    return (
      <option key={post_id} value={post_id}>
        {post_id}
      </option>
    );
  });
}

function handleChanged(event) {
  selectedPostId = event.target.value;
  console.log("selected party: ", selectedPostId);
}

function renderPartys(userList) {
  console.log("userList: ", userList);
  return userList.map((userProfile, index) => {
    const {
      userprofile_id,
      about,
      createdOn,
      gender,
      languages,
      profile_pic_url,
    } = userProfile; //destructuring
    return (
      <option key={userprofile_id} value={userprofile_id}>
        {userprofile_id}
      </option>
    );
  });
}

function handleChange(event) {
  selectedUserId = event.target.value;
  console.log("selected party: ", selectedUserId);
}
*/
export default AddCommentComponent;