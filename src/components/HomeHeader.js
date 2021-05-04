import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button} from 'react-bootstrap';
const HomeHeader = (props) => {

    
        return (
        <>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#"><i className="fas fa-users" /> OUR-APP </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#"></Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/Register"><Button variant="outline-light">Sign Up</Button></Nav.Link>  
              </Nav>
              <Nav>
                <Nav.Link href="/Login"><Button variant="outline-light">Sign In</Button></Nav.Link>  
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
        </>
        );
    }



export default HomeHeader;