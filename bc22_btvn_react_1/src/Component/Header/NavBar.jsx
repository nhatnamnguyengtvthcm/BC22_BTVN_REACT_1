import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CyberSoft</Navbar.Brand>
          <Nav className="cus-link">
            <Nav.Link href="#home" className="pl-5">Home</Nav.Link>
            <Nav.Link href="#features">News</Nav.Link>
            <Nav.Link href="#pricing">Product</Nav.Link>
            <Nav.Link href="#pricing">Forum</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}
