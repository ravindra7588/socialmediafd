
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faComment, faFile} from '@fortawesome/free-solid-svg-icons'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
const UserSideBar = (props) => {
    return(

<aside class="side-bar bg-dark"><div class=" border border-dark text-light bg-lg-dark pb-5 quick-link">
          <h3 clas="ml-0">Admin</h3>
          <ul class="nav flex-column mb-4">
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="/adduserprofile">
              <FontAwesomeIcon icon={faUser} />  Add  UserProfile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="/viewuserprofile">
              <FontAwesomeIcon icon={faUser} />  View  UserProfile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="/addpost">
              <FontAwesomeIcon icon={faFile} />  Add Post</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="/viewpost">
              <FontAwesomeIcon icon={faFile} />  View Post</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="/addcomment">
              <FontAwesomeIcon icon={faComment} /> Add  Comments</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="/viewcomment">
              <FontAwesomeIcon icon={faComment} /> View  Comments</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="/search">
               Search </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="/listRequest">
               Request Friends</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="/friendlist">
               Friends List</a>
            </li>
          </ul>
          </div></aside>
    )
} 


export default UserSideBar;
