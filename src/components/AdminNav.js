import React, { useState } from 'react';
import logo from '../images/logo.png'
function AdminNav() {

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
                <li><a href="./admindashboard">Home</a></li>

                <li><a href="./adminuser">User Profile</a></li>
                <li><a href="./adminpost">Post</a></li>
                <li><a href="./admincomment">Comment</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </nav>
        </div>
    );
}

export default AdminNav