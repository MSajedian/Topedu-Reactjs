import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Button, Nav } from 'react-bootstrap';
// import { Row, Col, CardGroup, Card } from 'react-bootstrap';
// import { FcReadingEbook } from 'react-icons/fc';
// import { FcAbout } from 'react-icons/fc';
import CompanyNavbar from './CompanyNavbar'

class CompanyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <CompanyNavbar />
                <Container>
                    {/* <Row className="justify-content-end">
                        <Col className=" p-2">  </Col>
                        <Col className="" style={{ backgroundColor: "lightblue" }}>123</Col>
                    </Row> */}

                    <div class="d-flex">
                        <div class="me-auto p-2">Hi UserName, welcome back 👋</div>
                        <div><Button>+ Create Course</Button></div>
                    </div>

                    <Nav variant="tabs" defaultActiveKey="/company">
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="blue"><path class="fill" d="M10,9 L14,9 C14.5522847,9 15,9.44771525 15,10 L15,14 C15,14.5522847 14.5522847,15 14,15 L10,15 C9.44771525,15 9,14.5522847 9,14 L9,10 C9,9.44771525 9.44771525,9 10,9 Z M10,10 L10,14 L14,14 L14,10 L10,10 Z M2,9 L6,9 C6.55228475,9 7,9.44771525 7,10 L7,14 C7,14.5522847 6.55228475,15 6,15 L2,15 C1.44771525,15 1,14.5522847 1,14 L1,10 C1,9.44771525 1.44771525,9 2,9 Z M2,10 L2,14 L6,14 L6,10 L2,10 Z M10,1 L14,1 C14.5522847,1 15,1.44771525 15,2 L15,6 C15,6.55228475 14.5522847,7 14,7 L10,7 C9.44771525,7 9,6.55228475 9,6 L9,2 C9,1.44771525 9.44771525,1 10,1 Z M10,2 L10,6 L14,6 L14,2 L10,2 Z M2,1 L6,1 C6.55228475,1 7,1.44771525 7,2 L7,6 C7,6.55228475 6.55228475,7 6,7 L2,7 C1.44771525,7 1,6.55228475 1,6 L1,2 C1,1.44771525 1.44771525,1 2,1 Z M2,2 L2,6 L6,6 L6,2 L2,2 Z"></path></svg>
                                &nbsp;My Courses</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                </Container>
            </>
        );
    }
}

export default CompanyPage;