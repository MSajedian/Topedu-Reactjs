import { Component } from 'react';
import { Tab, Row, Col, Accordion, Nav } from 'react-bootstrap';
// import { FcAbout } from 'react-icons/fc';
// import { Row, Col } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
import CoursesNavbar from './CoursesNavbar';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Courses extends Component {
    render() {
        return (
            <>
                <CoursesNavbar />
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>

                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                                    <Accordion.Body>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                                    <Accordion.Body>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    content of Tab1
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    content of Tab2
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    content of Tab3
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    content of Tab4
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </>
        )
    }
}

export default Courses;




