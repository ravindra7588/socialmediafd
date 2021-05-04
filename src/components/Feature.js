import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/pic1.png';
import featureimage1 from '../images/pic2.png';
import featureimage2 from '../images/pic3.png';


function Feature() {
    return (<div>
        <br/><br/> 
        <div className="usercard" >
        <div id='features'>
            <div className='a-container'>
                <FeatureBox image={featureimage} title='Create Account' body='Easily create an account to spend your free time.'/>
                <FeatureBox image={featureimage1} title='Make Friends' body='Easily make friends by sending them friend request.'/>
                <FeatureBox image={featureimage2} title='Like and Share' body='Can send friend requests to your friends and can like and share posts.' />
            </div>
        </div>
        </div>
        </div>
    );
}

export default Feature;