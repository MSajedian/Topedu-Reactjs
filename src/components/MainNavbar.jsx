import { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FcAbout } from 'react-icons/fc';

// import { Container, Row, Col } from 'react-bootstrap';
// import { FcAbout } from 'react-icons/fc';
import { Link } from "react-router-dom";
class MainNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Navbar bg="light" expand="lg" className="mx-3">
                <Link to="/">
                    <Navbar.Brand> <FcAbout style={{ fontSize: 40 }} className="mb-3" />TopEdu </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        className="ms-auto px-2"
                    >
                        <Link to="/login" className="btn font-weight-bold">Log in</Link>
                        <Link to="/signup" className="btn btn-primary text-white" role="button">Sign up</Link>
                    </Nav>
                    {/* <Form
                        className="d-flex my-2 my-lg-0"
                    >
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MainNavbar;