import React from "react";
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
class NavBar extends React.Component {
  render() {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">EQ Test</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <LinkContainer to="/"><Nav.Link href="#">Home</Nav.Link></LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}
export default NavBar;