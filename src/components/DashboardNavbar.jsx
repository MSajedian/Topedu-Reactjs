import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
// import { Form, FormControl, Button } from 'react-bootstrap';
// import { FcAbout } from 'react-icons/fc';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Dropdown } from 'react-bootstrap';


class DashboardNavbar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" className="mx-3">
                <Navbar.Brand href="/home" style={{ border: "gray solid 1px", padding: "1px 8px 5px 8px" }} className="rounded">
                    <svg fill="blue" width="16px" height="16px" viewBox="0 0 16 16" class=" Icons__icon-size___3XuUV"><path class="fill accent-color" d="M10,9 L14,9 C14.5522847,9 15,9.44771525 15,10 L15,14 C15,14.5522847 14.5522847,15 14,15 L10,15 C9.44771525,15 9,14.5522847 9,14 L9,10 C9,9.44771525 9.44771525,9 10,9 Z M10,10 L10,14 L14,14 L14,10 L10,10 Z M2,9 L6,9 C6.55228475,9 7,9.44771525 7,10 L7,14 C7,14.5522847 6.55228475,15 6,15 L2,15 C1.44771525,15 1,14.5522847 1,14 L1,10 C1,9.44771525 1.44771525,9 2,9 Z M2,10 L2,14 L6,14 L6,10 L2,10 Z M10,1 L14,1 C14.5522847,1 15,1.44771525 15,2 L15,6 C15,6.55228475 14.5522847,7 14,7 L10,7 C9.44771525,7 9,6.55228475 9,6 L9,2 C9,1.44771525 9.44771525,1 10,1 Z M10,2 L10,6 L14,6 L14,2 L10,2 Z M2,1 L6,1 C6.55228475,1 7,1.44771525 7,2 L7,6 C7,6.55228475 6.55228475,7 6,7 L2,7 C1.44771525,7 1,6.55228475 1,6 L1,2 C1,1.44771525 1.44771525,1 2,1 Z M2,2 L2,6 L6,6 L6,2 L2,2 Z"></path></svg>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Nav.Link href="#" className="text-dark alert-dismissible fade show">Institution Name · Dashboard</Nav.Link>
                    {/* <Form className="d-flex ms-auto my-2 my-lg-0" >
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}

                    <Nav.Link href="#" className="d-flex ms-auto notifly-target">
                        <svg width="16px" height="16px" viewBox="0 0 16 16"><path d="M14.2939 10.3418C13.7629 9.81731 13.2143 9.27488 13.2143 6.71425C13.2143 4.11969 11.3094 1.96194 8.82469 1.56544C8.93914 1.39911 9.00028 1.2019 9.00001 1C9.00001 0.447719 8.55229 0 8.00001 0C7.44773 0 7.00001 0.447719 7.00001 1C6.99972 1.20191 7.06086 1.39912 7.17529 1.56547C4.69066 1.96197 2.78573 4.11972 2.78573 6.71428C2.78573 9.27469 2.23726 9.81716 1.70626 10.3417C0.203257 11.8263 1.30394 14 3.09123 14H6.00001C6.00001 15.1046 6.89544 16 8.00001 16C9.10457 16 10 15.1046 10 14H12.9088C14.6959 14 15.7967 11.8255 14.2939 10.3418V10.3418ZM8.00001 14.75C7.58644 14.75 7.25001 14.4136 7.25001 14H8.75001C8.75001 14.4136 8.41357 14.75 8.00001 14.75ZM12.9091 12.5H3.09063C2.56682 12.5 2.30516 11.8628 2.67394 11.494C3.56723 10.6007 4.28573 9.75266 4.28573 6.71428C4.28573 4.66622 5.95194 3 8.00001 3C10.0481 3 11.7143 4.66622 11.7143 6.71428C11.7143 9.76584 12.4399 10.6072 13.3258 11.494C13.6962 11.8644 13.4307 12.5 12.9091 12.5Z"></path></svg>
                    </Nav.Link>

                    <Nav.Link href="#" type="button" className="btn btn-primary text-white">
                        User Name
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default DashboardNavbar;