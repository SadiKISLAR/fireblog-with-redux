import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navbarmenu() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Shady</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='d-flex justify-content-end'>
                            <NavDropdown.Item href="/newblog">New</NavDropdown.Item>
                            <NavDropdown.Item href="/login">
                                Logout
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/register">Register</NavDropdown.Item>


                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbarmenu;