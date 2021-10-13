import { Container, Nav, Navbar } from 'react-bootstrap';
import { FcConferenceCall } from 'react-icons/fc';
import { Link } from "react-router-dom";

export default function MainNavbar() {
    return (
        <Navbar expand="lg" className="navbar-default">
            <Container fluid className="px-3">
                <Navbar.Brand >
                    <Link to="/" className="text-decoration-none logo">
                        <FcConferenceCall style={{ fontSize: 40 }} className="bg-light bg-gradient rounded"/> <span className="ps-2">TopEdu</span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        className="ms-auto px-2"
                    >
                        <Link to="/login" className="button button-login">Log in</Link>
                    </Nav>
                    <Nav>
                        <Link to="/signup" className="button button-signup" >Sign up</Link>
                    </Nav>
                    {/* <Form
                        className="d-flex my-2 my-lg-0"
                    >
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}