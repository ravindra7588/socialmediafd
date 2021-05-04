import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <br/>
                <footer className = "footer col-xs-3">
                    <p>OUR-APP &copy; copyrights 2021</p>
                </footer>
            </div>
        )
    }
}

export default FooterComponent