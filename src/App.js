import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import AdminViewPosts from './components/AdminViewPosts';
import AdminViewComments from './components/AdminViewComments';
import AddCandidate from './components/Add_Post';


import AddPostComponent from './components/Add_Post';
import AdminUser from './components/AdminUser';
import AddCommentComponent from './components/Add_Comment';
import AddUserProfileComponent from './components/AddUserProfile';
import FriendList from './components/FriendList';
import ListFriendAccept from './components/ListFriendAccept';
import Search from './components/Search';
import Header from './components/layer/Header'
import ViewPosts from './components/ViewPosts';
import AddUserProfile from './actions/AddUserProfile';
import SearchComment from './components/ViewComments';
import ViewUserProfileComponent from './components/ViewUserProfile'
import Register from './components/Register';
import Login from './components/Login';
import StartPage from './components/StartPage';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RviewUserprofileComponent from './components/RViewUserProfile';
import ListUserprofileComponent from './components/ListUserProfileComponent'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SeeProfile from './components/UserProfile'
import UserDashboard from './components/UserDashboard'
import Logout from './components/Logout';
import AdminDashboard from './components/AdminDashboard'

function App() {
  return (
   
  <Router>
                 
                 <Switch>
                 <Route path="/"exact component={StartPage} />
          <Route path="/Register" component={SignUp} />
          <Route path="/Login" component={SignIn} />
          <Route path="/Home" component={Home} />
          <Route path="/profile" component={SeeProfile} />
          <Route path="/admindashboard" component={AdminDashboard} />
          
                   <Route path="/friendlist"exact component={FriendList}></Route>
                   <Route path="/listRequest" component={ListFriendAccept}></Route>
                   <Route path="/search" component={Search}></Route>
                   <Route path="/userdashboard" component={UserDashboard}></Route>
                   <Route path="/logout" component={Logout}/>
                   <Route path="/adduserprofile" >
                     <AddUserProfileComponent></AddUserProfileComponent>
                   </Route>
                   <Route path="/viewuserprofile" >
                     <ViewUserProfileComponent></ViewUserProfileComponent>
                   </Route>
                
                   <Route path="/addpost" >
                     <AddPostComponent></AddPostComponent>
                   </Route>
                   <Route path="/viewpost">
                     <ViewPosts></ViewPosts>
                   </Route>
                   <Route path="/addcomment" >
                     <AddCommentComponent></AddCommentComponent>
                   </Route>
                   <Route path="/viewcomment">
                     <SearchComment></SearchComment>
                   </Route>

                   <Route exact path="/adminuser">
      <AdminUser></AdminUser>
    </Route>
    <Route exact path="/admincomment">
      <AdminViewComments></AdminViewComments>
    </Route>

    <Route exact path="/adminpost">
      <AdminViewPosts></AdminViewPosts>
    </Route>
                 </Switch>
                </Router>
               
  )
}

export default App;
