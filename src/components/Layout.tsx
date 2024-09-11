import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";
import '../style/Layout.css';

function Layout() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mynav" >
      <Logo />
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-items">
              <Nav.Link href="/">Home</Nav.Link>
              {/* <Nav.Link href="#login">Register</Nav.Link> */}
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
             
         
          </Navbar.Collapse>
        </Container>
        <div className="content">
          <Outlet />
        </div>
      </Navbar>
    </>
  );
}
export default Layout;