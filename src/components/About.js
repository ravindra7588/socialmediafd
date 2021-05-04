
import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt='' />
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate 
                    voluptatem cumque maxime doloremque id, quaerat voluptatum 
                    voluptates dolor quasi minima ipsa 
                    nulla distinctio facere neque corrupti tempore quas hic aperiam!</p>
                    <button>{props.button}</button>
            </div>
        </div>
    );
}

export default About;