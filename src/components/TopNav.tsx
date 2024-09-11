import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Avatarprofile from './Avatar';
import  home_page_bgnd from '../assets/images/home_page_bgnd.jpg';
export default function TopNav(){
    return(
        <Navbar style={{backgroundColor:'#088395'}} variant="light" expand="lg">
        <Container fluid>
          {/* Navbar Brand */}
          <Navbar.Brand href="#">Brand</Navbar.Brand>
          
          {/* Toggler for Mobile View */}
          <Navbar.Toggle aria-controls="navbar-nav" />
          
          {/* Navbar Collapse */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              {/* Nav Links */}
              <Nav.Link href="#">
                <i className="fas fa-envelope mx-1"></i>
              </Nav.Link>
              <Avatarprofile
                name='ken kivuti'
                src = {home_page_bgnd}
                alt = 'ken image'
                className = 'avatar-profile'
                />

              {/* Dropdown for Profile */}
              <NavDropdown title={<><i className="fas fa-user mx-1"></i> Profile</>} id="profile-dropdown" align="end">
                <NavDropdown.Item href="#">My account</NavDropdown.Item>
                <NavDropdown.Item href="#">Log out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
