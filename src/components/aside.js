
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faComment, faFile} from '@fortawesome/free-solid-svg-icons'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
const SideBar = (props) => {
    return(

<aside class="side-bar bg-dark"><div class=" border border-dark text-light bg-lg-dark pb-5 quick-link">
          <h3 clas="ml-0">Admin</h3>
          <ul class="nav flex-column mb-4">
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="/adminuser">
              <FontAwesomeIcon icon={faUser} />  Users</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="/adminpost">
              <FontAwesomeIcon icon={faFile} />  Posts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="/admincomment">
              <FontAwesomeIcon icon={faComment} />   Comments</a>
            </li>
          </ul>
          </div></aside>
    )
} 


export default SideBar;
