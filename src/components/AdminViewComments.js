import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import adminViewCommentAllUsersAction from '../actions/AdminViewCommentAllUsersAction'
import adminViewCommentsAction from '../actions/AdminViewCommentsAction'
import AdminCommentViewByUserIdAction from '../actions/AdminCommentViewByUserIdAction'
import adminCommentDeleteAction from '../actions/AdminCommentDeleteAction'
import Header from './Header';
import Footer from './Footer';
import Aside from './aside';
import SideBar from './aside';
import adminback from '../images/back4.jpg'
import AdminNav from './AdminNav';

let dispatch;
let selectedview;
let selectedOption;
let commentList;
const AdminViewComments = (props) => {

  let [filter, setFilter] = useState();
    let [initialState, setInitialState] = useState();
   commentList = useSelector(state => state.adminReducer.initialState);

  /*   useSelector is a function that takes the current 
      state as an argument and returns whatever data you want from it. */
      let filterList = useSelector(state => state.adminReducer.filter);

       /* dispatch-- is the method used to dispatch actions and trigger state changes to the store*/
     dispatch = useDispatch();

  

     

    console.log("commentList: ", commentList);
    if(!Array.isArray(commentList)) {
        commentList = [];
        console.log("Set postList to blank array");
    }

    console.log("FilterList:", filterList);
  if (!Array.isArray(filterList)) {
    filterList = [];
    console.log("Set filterList to blank array");
  }

  console.log("commentList",commentList)

  /*function to get data data fomm database a/c to filter selected*/
  const searchHandleChange = (event) => {
    selectedOption = event.target.value;
    console.log("Selected option: " + selectedOption);
    if (selectedOption === "User Id") {
      dispatch(adminViewCommentAllUsersAction())
        .then((response) => {
          console.log("Response: ", response);
          console.log("filterList: ", filterList);
          setFilter(filterList);
        });
      }
    }


    /*function to get data from database a/c to value selected*/
  function handleSearch(event) {
    event.preventDefault();
    if (selectedOption === "View All") {
      dispatch(adminViewCommentsAction())
    .then((response) => {
      console.log("Response: ", response);
      console.log("commentList: ", commentList);
      setInitialState(commentList);
    });
    }
    else if (selectedOption === "User Id") {
      dispatch(AdminCommentViewByUserIdAction(selectedview))
        .then((response) => {
          console.log("Response: ", response);
          console.log("commentList: ", commentList);
          setInitialState(commentList);
        });
      }
    }

    
return(<div>
  <Router>
      <Link to="/admincomment"></Link>
     
    </Router>

<AdminNav></AdminNav>
<br/><br/><br/><br/>
<div style={{ backgroundImage:`url(${adminback})` ,'backgroundSize':"1500px",'backgroundRepeat':'repeat-x'}} >
<div class="container-fluid">
<div class="row ">
 
  
<div class="col d-flex justify-content-center">

  <div class="col-12  p-5 ml-auto mr-auto ">

   <center> <h3 class="font-weight-bold">View Comments</h3></center><br></br>
   <div class="col d-flex justify-content-center">
   <div class="col-12 border border-dark p-5 ml-auto mr-auto ">
    <form onSubmit={handleSearch}  class="form-horizontal">
      
       
    <div class="form-inline d-flex justify-content-center">
        
        <label for="view" class="col-form-label font-weight-bold mr-4">View Comments</label>
        
        <select   id="view" onChange={searchHandleChange} class="w-50 form-control" required >
          <option >Select </option>
          <option >View All</option>
          <option >User Id</option>
          
        </select>
        
      </div>
      <br></br>
        


        <div class="form-inline d-flex justify-content-center">
          <label for="name"  class="col-form-label font-weight-bold mr-4">Select User Id  </label>
          <select id="filter"  onChange={filterHandleChange} required  class="w-50 form-control" >
            <option>select</option>
            {renderFilterList(filterList)}
          </select>
        </div>
      

      <center>
      <div class="mt-4 mb-4 ">
        <button className="btn btn-primary" id="btnsubmit" >Search</button>
        </div>
        </center>
     
        <div class="container">
    <center>
      <h3 class="font-weight-bold">Comment List</h3>

   {/*  <table class="table table-border table-striped" id="tableData">
        <thead>
        <tr>
            <th>ID</th>
            <th>CONTENT</th>
            <th>LIKES</th>
            <th>POSTED ON</th>
            <th>TITLE</th>
            <th>USERID</th>
            <th>DELETE</th>
        
        </tr>
        </thead>
        <tbody>
          {renderTableData(postList)}
        </tbody>
</table>*/}
 
        <div class="row d-flex justify-content-center">
        
            
{renderTableData(commentList)}
</div>

    </center></div>
    </form></div>
    </div>
    
  </div>
</div>
  

</div>
</div>
</div>
<center><Footer></Footer></center>


</div>)
 
 
};

function renderTableData(commentList) {
    console.log("commentList: ", commentList);
    return commentList.map((comment, index) => {
        const post_id1=comment.post.post_id
        const user_id=comment.userProfile.userprofile_id;
       const { comment_id,comment_content,comment_likes,commentedOn } = comment //destructuring
       return (
        <div class="col-lg-6 mb-4"  >
        <div class="card card-body  border-secondary"key={comment_id}>
        <div><strong>Comment Content:</strong>{comment_content}</div>
        <div><strong>Comment Likes :</strong> {comment_likes}</div>
        <div><strong>Commented On :</strong> {commentedOn}</div>
        <div><strong>Posted By User with Id :</strong>  {user_id}</div>
        <div><strong>On post:</strong>  {post_id1}</div>
        <center><div class="btn-group" style={{'width':"100px"}} role="group" aria-label="Basic mixed styles example">
             <button style={{'width':"50px"}} class="btn btn-outline-danger" value="Delete" onClick={(e) => deletePost(e, comment_id)}>Delete</button>
             
             </div></center>
        </div></div>
       
          
       )
    })
 };

 function filterHandleChange(event) {
  selectedview = event.target.value
  console.log("Selected view: " + selectedview);
}


function renderFilterList(filterList) {
  console.log("filterList", filterList);
  return filterList.map((value) => {
    return (
      <option value={value}>{value}</option>
    )
  })
}

function deletePost(event,comment_id) {
  event.preventDefault();
  console.log("id",comment_id);
  const r = window.confirm("Are you sure you want to delete this comment?"); if(r == true)
  dispatch(adminCommentDeleteAction(comment_id));
  
}



export default AdminViewComments
