import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {  Link, useNavigate } from 'react-router-dom'
import { newItems } from '../store/cartSlice';
//import { PiShoppingCartSimpleDuotone } from "react-icons/pi" <PiShoppingCartSimpleDuotone />

function NavBar() {
  let navigate=useNavigate();
  //console.log(newItems)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link  as={Link} to="/login/yogi">Login</Nav.Link>
            <Nav.Link  as={Link} to="/signup">Signup</Nav.Link>
            <Nav.Link  as={Link} to="/product">Product</Nav.Link>
            </Nav>
             {/*
             <NavDropdown title="Link" id="navbarScrollingDropdown">
             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
             */

             }
              <Button variant="outline-success"onClick={()=>navigate("/wishlist") } >Cart</Button>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;