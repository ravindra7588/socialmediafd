import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button} from 'react-bootstrap';
const Header = (props) => {

    
        return (
        <>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#"><i className="fas fa-users" /> OUR-APP </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#">Home</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/"><Button variant="outline-light">Logout</Button></Nav.Link>  
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
        </>
        );
    }



export default Header;