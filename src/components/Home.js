import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <div className="container">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Nav className="mr-auto">
                <Nav.Link href="./../App"><Button variant="outline-light" style={{justifyContent: "right" }}>Logout</Button></Nav.Link>  
            </Nav>
            </Navbar>
            <h1 className="display-6">Welcome</h1>
                <div className="row">
                    <div className="col-md-4 m-auto">
                    <Link to="/ApplyVisa"><Button variant="outline-dark">Apply Visa</Button></Link>
                    <hr />
                    <Link to="/ViewVisaStatus"><Button variant="outline-dark">view Status</Button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;