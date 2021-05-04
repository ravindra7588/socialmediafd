import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Card from "react-bootstrap/Card";
import { confirmAlert } from 'react-confirm-alert'; 
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import adminViewPostsAction from '../actions/AdminViewPostsAction'
import adminViewPostAllUers from '../actions/AdminViewPostAllUers'
import adminPostViewByUserId from '../actions/AdminPostViewByUserId'
import adminPostDelete from '../actions/AdminPostDelete'
import adminPostViewByPostId from '../actions/AdminPostViewByPostId'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Header';
import Footer from './Footer';
import Aside from './aside';
import ReactPlayer from "react-player";
import SideBar from './aside';
import AdminNav from './AdminNav';
import adminback from '../images/back4.jpg'


let dispatch;
let selectedview;
let selectedOption;
let postList;
const AdminViewPosts = (props) => {

  let [filter, setFilter] = useState();
    let [initialState, setInitialState] = useState();
   postList = useSelector(state => state.adminReducer.initialState);

  /*   useSelector is a function that takes the current 
      state as an argument and returns whatever data you want from it. */
      let filterList = useSelector(state => state.adminReducer.filter);

       /* dispatch-- is the method used to dispatch actions and trigger state changes to the store*/
     dispatch = useDispatch();

  

     

    console.log("postList: ", postList);
    if(!Array.isArray(postList)) {
        postList = [];
        console.log("Set postList to blank array");
    }

    console.log("FilterList:", filterList);
  if (!Array.isArray(filterList)) {
    filterList = [];
    console.log("Set filterList to blank array");
  }

  console.log("postLIst",postList)

  /*function to get data data fomm database a/c to filter selected*/
  const searchHandleChange = (event) => {
    selectedOption = event.target.value;
    console.log("Selected option: " + selectedOption);
    if (selectedOption === "User Id") {
      dispatch(adminViewPostAllUers())
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
      dispatch(adminViewPostsAction())
    .then((response) => {
      console.log("Response: ", response);
      console.log("routeList: ", postList);
      setInitialState(postList);
    });
    }
    else if (selectedOption === "User Id") {
      dispatch(adminPostViewByUserId(selectedview))
        .then((response) => {
          console.log("Response: ", response);
          console.log("routeList: ", postList);
          setInitialState(postList);
        });
      }
    }

    
return(<div>
  <Router>
      <Link to="/adminpost"></Link>
     
    </Router>

<AdminNav></AdminNav>
<br/><br/><br/>

<div style={{ backgroundImage:`url(${adminback})` ,'backgroundSize':"2000px",'backgroundRepeat':'repeat-x'}} >
<div class="container-fluid">
<div class="row ">
  
  <div class="col-12  p-5 ml-auto mr-auto ">
<div class="col d-flex justify-content-center">

  <div class="container  px-5 ">

   <center> <h3 class="font-weight-bold">View Posts</h3></center><br></br>
   <div class="col d-flex justify-content-center">
   <div class="col-12 border border-dark p-5 ml-auto mr-auto  ">
    <form onSubmit={handleSearch}  class="form-horizontal">
      
        <div class="form-inline d-flex justify-content-center">
        
          <label for="view" class="col-form-label font-weight-bold mr-4">View Posts By</label>
          
          <select   id="view" onChange={searchHandleChange} class="w-50 form-control" required >
            <option >Select </option>
            <option >View All</option>
            <option >User Id</option>
            
          </select>
          
        </div>
        <br></br>

        <div class="form-inline d-flex justify-content-center">
          <label for="name"  class="col-form-label font-weight-bold mr-4">Select User Id  </label>
          <select id="filter"  onChange={filterHandleChange}   required class="w-50 form-control">
            <option>select</option>
            {renderFilterList(filterList)}
          </select>
        </div>
      

      <center>
      <div class="mt-4 mb-4" >
        <button className="btn btn-primary" id="btnsubmit" >Search</button>
        </div>
       </center>
        <div class="container">
    <center>
      <h2 class="font-weight-bold">Post List</h2>

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
        
            
{renderTableData(postList)}
</div>

    </center></div>
       
    </form></div>
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

function renderTableData(postList) {
    console.log("postList: ", postList);
    return postList.map((post, index) => {
        const user_id=post.userProfile.userprofile_id;
        const uname=post.userProfile.profilePicUrl;
       const { post_id,post_content,post_likes,postedOn,title } = post //destructuring
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

function deletePost(event,post_id) {
  event.preventDefault();
  console.log("id",post_id);
  const r = window.confirm("Are you sure you want to delete this post?"); if(r == true)
  dispatch(adminPostDelete(post_id));
}



export default AdminViewPosts
