import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button} from 'react-bootstrap';
import './Style.css';
class Header extends React.Component {
    render() {
        return (
        <>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#"><i className="fas fa-users" /> OUR-APP </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="/">friends</Nav.Link>
                <Nav.Link href="/listRequest">requestfriends</Nav.Link>
                <Nav.Link href="/search">AddRequest</Nav.Link>
              </Nav>
              <Nav>
               
                <Nav.Link href="./../Register"><Button variant="outline-light">logout</Button></Nav.Link>  
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
        </>
        );
    }

}
export default Header;
