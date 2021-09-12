import { Component } from 'react';
import { Tab, Row, Col, Nav, Accordion } from 'react-bootstrap';
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
                <Tab.Container id="left-tabs-example">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">

                                <Accordion flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                                        <Accordion.Body>

                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                        <Accordion.Body>
                                            2
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>


                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    Content1
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Content2
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




