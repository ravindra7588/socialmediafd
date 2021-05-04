import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import CommentReducer from "../reducers/CommentReducer";
import viewCommentsAction from "../actions/ViewCommentsAction";
import Header from "./Header";
import Footer from "./Footer";
import DeleteComment from "../actions/DeleteComment";
import UserSideBar from "./UserAside";
let selectedview;
let dispatch;

const SearchComment = (props) => {
  let [initialState, setInitialState] = useState();
  let commentList = useSelector((state) => state.CommentReducer.initialState);

  dispatch = useDispatch();

  console.log("commentList: ", commentList);
  if (!Array.isArray(commentList)) {
    commentList = [];

    console.log("Set commentList to blank array");
  }

  function handleSearch(event) {
    event.preventDefault();
  dispatch(viewCommentsAction()).then((response) => {
    console.log("REsponse: ", response);
    console.log("commentList: ", commentList);
    setInitialState(commentList);
  });
}
  return (
    <div>
        <Router>
      <Link to="/viewcomment"></Link>
     
    </Router>
      <Header />
      <div class="row ">
      <div class="col col-lg-2  bg-dark"><UserSideBar></UserSideBar></div>
      <div class="col col-lg-10 bg-light">
        <div class="container">
          <center>
            <h2 class="font-weight-bold">Comment List</h2>
            <button className="btn btn-primary" id="btnsubmit" onClick={handleSearch}>View</button>
            <div class="row mt-2">{renderTableData(commentList)}</div>
          </center>
        </div>
      </div></div>
      <Footer />
    </div>
  );
};

function renderTableData(commentList) {
  console.log("commentList: ", commentList);
  return commentList.map((comment, index) => {
    const post_id = comment.post.post_id;
    const user_id = comment.userProfile.userprofile_id;
    const { comment_id, comment_content, comment_likes, commentedOn } = comment; //destructuring
    return (
      <div class="col-lg-6 mb-4">
        <div class="card card-body  border-secondary" key={comment_id}>
          <div>
            <strong>comment Content:</strong>
            {comment_content}
          </div>
          <div>
            <strong>comment Likes :</strong> {comment_likes}
          </div>
          <div>
            <strong>commented On :</strong> {commentedOn}
          </div>
          <div>
            <strong>commenetd for post Id</strong> {post_id}
          </div>
          <div>
            <strong>Commented By User with Id :</strong> {user_id}
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
                onClick={(e) => deleteComment(e, comment_id)}
              >
                Delete
              </button>
            </div>
          </center>
        </div>
      </div>
    );
  });
}
function deleteComment(event, comment_id) {
  event.preventDefault();
  console.log("id", comment_id);
  const r = window.confirm("Are you sure you want to delete this post?");
  if (r == true) dispatch(DeleteComment(comment_id));
}

export default SearchComment;