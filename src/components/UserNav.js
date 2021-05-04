import React, { useState } from 'react';
import logo from '../images/logo.png'
function UserNav() {

    const [nav,setnav] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >=50){
            setnav(true);
        }else{
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    return (
        <div class="bg-dark">
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href="#" classNamea='logo'>
                <img src={logo} alt='' style={{'height':'80px'}}/>
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href="./userdashboard">Home</a></li>

                <li><a href="./" class="btn  dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User Profile</a>
                 
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button class="dropdown-item" type="button"><a href="./adduserprofile">Add Profile</a></button>
                    <button class="dropdown-item" type="button"><a href="./profile">View Profile</a></button>
                    
                    </div></li>
                
                <li><a href="./" class="btn  dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Post</a>
                 
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li class="dropdown-item" type="button"><a href="./addpost">Add Post</a></li>
                    <button class="dropdown-item" type="button"><a href="./viewpost">View Post</a></button>
                    
                    </div></li>

                <li><a href="./" class="btn  dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Friends</a>
                 
                 <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                 <button class="dropdown-item" type="button"><a href="./search">Search Friends</a></button>
                 <button class="dropdown-item" type="button"><a href="./listRequest">Friend Request</a></button>
                 <button class="dropdown-item" type="button"><a href="./friendlist">Friends List</a></button>
                 </div></li>
                
                <li><a href="/logout">Logout</a></li>
            </ul>
        </nav>
        </div>
    );
}

export default UserNav;