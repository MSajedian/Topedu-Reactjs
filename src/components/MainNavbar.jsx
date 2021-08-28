import { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { FcAbout } from 'react-icons/fc';

// import { Container, Row, Col } from 'react-bootstrap';
// import { FcAbout } from 'react-icons/fc';
import {
    Link,
} from "react-router-dom";
class MainNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Navbar bg="light" expand="lg" className="mx-3">
                <Navbar.Brand href="/">
                    <FcAbout style={{ fontSize: 40 }} className="mb-3" />TopEdu</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/home">Home Page</Link>
                        <Link to="/login">Log in1</Link>
                        <Nav.Link href="#" className="text-dark">Pricing</Nav.Link>
                        <Nav.Link href="/login" className="text-dark">Log in2</Nav.Link>
                        <Nav.Link href="#" className="btn btn-primary text-white" role="button">Create a course</Nav.Link>
                    </Nav>
                    <Form
                        className="d-flex ml-auto my-2 my-lg-0"
                    >
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MainNavbar;