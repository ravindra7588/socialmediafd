import React from 'react';
import About from './About';
import Feature from './Feature';
import Footer from './Footer';
import Header from './Header';
import aboutimage from '../images/about.png';
import aboutimage1 from '../images/about1.png';
import Aheader from '../components/Aheader'
import HomeHeader from '../components/HomeHeader'

function StartPage(props) {
    return (
        <div>
            <Aheader></Aheader>
            <div  >
            <Feature />
            </div>
            <Footer />
        </div>
    );
}

export default StartPage;