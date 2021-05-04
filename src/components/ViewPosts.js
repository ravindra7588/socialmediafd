
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import postReducer from "../reducers/PostReducer";
import viewPostsAction from "../actions/VIewPostsAction";
import Header from "./Header";
import Footer from "./Footer";
import DeletePost from "../actions/DeletePost";
import ReactPlayer from "react-player";
import SideBar from "./aside";
import UserSideBar from "./UserAside";
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from "react-bootstrap/Card";
import UserNav from "./UserNav";
let selectedview;
let dispatch;


const ViewPosts = (props) => {
  let [initialState, setInitialState] = useState();
  let postList = useSelector((state) => state.postReducer.initialState);

  dispatch = useDispatch();

  console.log("postList: ", postList);
  if (!Array.isArray(postList)) {
    postList = [];

    console.log("Set postList to blank array");
  }
  function handleSearch(event) {
    event.preventDefault();
  dispatch(viewPostsAction()).then((response) => {
    console.log("REsponse: ", response);
    console.log("postList: ", postList);
    setInitialState(postList);
  });
}
  return (
    <div>
      <Router>
      <Link to="/viewpost"></Link>
     
    </Router>
      <UserNav></UserNav>
     
      <br/> <br/> <br/> <br/>
      <div className="usercard" >
        <div class="container">
          <center>
            <br/>
            <h2 class="font-weight-bold">Post List</h2>
            <button className="btn btn-primary" id="btnsubmit" onClick={handleSearch}>View</button>
            <div class="row mt-2">{renderTableData(postList)}</div>
          </center>
        </div>
        </div>
      
      <Footer />

    </div>
  );
};

function renderTableData(postList) {
  console.log("postList: ", postList);
  return postList.map((post, index) => {
    const uname=post.userProfile.profilePicUrl;
    const user_id = post.userProfile.userprofile_id;
    const { post_id, post_content, post_likes, postedOn, title } = post; //destructuring
    return (
        
      <div class="col-lg-6 mb-4"  >
      <Card key={post_id}>
<Card.Body>
<Card.Title>{title}</Card.Title>

<Card.Text>
<div>
<ReactPlayer
        className="react-player"
        url={post_content}
        width="100%"
        height="100%"/>
</div>
    <div><strong><FontAwesomeIcon icon={faHeart} /></strong> {post_likes}</div>
    
    <div><strong>Posted By User Name :</strong>  {uname}</div>
    <div><strong>Posted By User Id:</strong>  {user_id}</div>
</Card.Text>
<footer className="blockquote-footer">
<div> {postedOn}</div>
  </footer>
<center><div class="btn-group" style={{'width':"100px"}} role="group" aria-label="Basic mixed styles example">
         <button style={{'width':"50px"}} class="btn btn-outline-danger" value="Delete" onClick={(e) => deletePost(e, post_id)}>Delete</button>
         
         </div></center>
         
</Card.Body>
</Card>
   </div>

     /* <div class="col-lg-6 mb-4">
        <div class="card card-body  border-secondary" key={post_id}>
          <div>
            <strong>Post Content:</strong>
            <ReactPlayer
            className="react-player"
            url={post_content}
            width="100%"
            height="100%"/>
           
          </div>
          <div>
            <strong>Post Likes :</strong> {post_likes}
          </div>
          <div>
            <strong>Posted On :</strong> {postedOn}
          </div>
          <div>
            <strong>Post Title :</strong> {title}
          </div>
          <div>
            <strong>Posted By User with Id :</strong> {user_id}
          </div>
          <center>
            <div
              class="btn-group"
              style={{ width: "100px" }}
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                style={{ width: "50px" }}
                class="btn btn-outline-danger"
                value="Delete"
                onClick={(e) => deletePost(e, post_id)}
              >
                Delete
              </button>
            </div>
          </center>
        </div>
      </div>*/
    );
  });
}
function deletePost(event, post_id) {
  event.preventDefault();
  console.log("id", post_id);
  const r = window.confirm("Are you sure you want to delete this post?");
  if (r == true) dispatch(DeletePost(post_id));
}

export default ViewPosts