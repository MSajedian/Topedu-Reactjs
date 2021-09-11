import { Component } from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
// import { FcAbout } from 'react-icons/fc';
// import { Row, Col } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
import CoursesNavbar from './CoursesNavbar';
// import CoursesContentActivity from './CoursesContentActivity';

// import React from "react";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

class Courses extends Component {
    render() {
        return (
            <>
                <CoursesNavbar />
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
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




