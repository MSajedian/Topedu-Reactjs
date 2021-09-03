// import React, { Component } from 'react';

import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import { Button, Nav } from 'react-bootstrap';
import { Row, Col, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux'

// import { FcReadingEbook } from 'react-icons/fc';
// import { FcAbout } from 'react-icons/fc';
import HomeNavbar from './HomeNavbar'
import { withRouter } from "react-router";

function Home(props) {
    const [query, setQuery] = useState('');
    const userName = useSelector((state) => state.user.userName)
    return (
        <>
            <HomeNavbar />
            <Container>
                <div className="d-flex">
                    <div className="me-auto p-2 h1">Good to see you're back at it, {userName}! 💪</div>
                    <div><Button>+ Create Course</Button></div>
                </div>

                <div className="d-flex">
                    <span className="ml-auto pt-1 px-1">&#128269;</span>
                    <span>
                        <input
                            name="Search courses"
                            placeholder="Search courses"
                            aria-label="Search courses"
                            id="course-search"
                            type="text"
                            value={query}
                            onChange={(e) => (setQuery(e.target.value))}
                        />
                        {/* <svg
                                width="16px"
                                height="16px"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11.0895 11.7965C10.0747 12.6515 8.76417 13.1667 7.33333 13.1667C4.11167 13.1667 1.5 10.555 1.5 7.33333C1.5 4.11167 4.11167 1.5 7.33333 1.5C10.555 1.5 13.1667 4.11167 13.1667 7.33333C13.1667 8.76413 12.6515 10.0746 11.7966 11.0894L14.3537 13.6465C14.5489 13.8417 14.5489 14.1583 14.3537 14.3536C14.1584 14.5488 13.8418 14.5488 13.6465 14.3536L11.0895 11.7965ZM2.5 7.33333C2.5 4.66396 4.66396 2.5 7.33333 2.5C10.0027 2.5 12.1667 4.66396 12.1667 7.33333C12.1667 8.64055 11.6477 9.82655 10.8046 10.6966C10.7843 10.7115 10.7649 10.7281 10.7465 10.7465C10.7282 10.7648 10.7116 10.7842 10.6967 10.8045C9.82663 11.6477 8.64059 12.1667 7.33333 12.1667C4.66396 12.1667 2.5 10.0027 2.5 7.33333Z"
                                ></path>
                            </svg> */}
                    </span>
                </div>
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" className="text-dark border-dark border-top-0 border-left-0 border-right-0 ">
                            <strong>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="blue"><path className="fill" d="M10,9 L14,9 C14.5522847,9 15,9.44771525 15,10 L15,14 C15,14.5522847 14.5522847,15 14,15 L10,15 C9.44771525,15 9,14.5522847 9,14 L9,10 C9,9.44771525 9.44771525,9 10,9 Z M10,10 L10,14 L14,14 L14,10 L10,10 Z M2,9 L6,9 C6.55228475,9 7,9.44771525 7,10 L7,14 C7,14.5522847 6.55228475,15 6,15 L2,15 C1.44771525,15 1,14.5522847 1,14 L1,10 C1,9.44771525 1.44771525,9 2,9 Z M2,10 L2,14 L6,14 L6,10 L2,10 Z M10,1 L14,1 C14.5522847,1 15,1.44771525 15,2 L15,6 C15,6.55228475 14.5522847,7 14,7 L10,7 C9.44771525,7 9,6.55228475 9,6 L9,2 C9,1.44771525 9.44771525,1 10,1 Z M10,2 L10,6 L14,6 L14,2 L10,2 Z M2,1 L6,1 C6.55228475,1 7,1.44771525 7,2 L7,6 C7,6.55228475 6.55228475,7 6,7 L2,7 C1.44771525,7 1,6.55228475 1,6 L1,2 C1,1.44771525 1.44771525,1 2,1 Z M2,2 L2,6 L6,6 L6,2 L2,2 Z"></path></svg>
                                &nbsp; My Courses
                            </strong>
                        </Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                            <Nav.Link href="/home" eventKey="link-1">Active</Nav.Link>
                        </Nav.Item> */}
                </Nav>

                <Row xs={1} md={2} className="mt-4 g-4" id="link-1" >
                    <Col>
                        <Card onClick={() => (props.history.push("/courses"))} className="btn">
                            <Card.Img variant="top" src="https://via.placeholder.com/300x150/0000FF" />
                            <Card.Body>
                                <Card.Title>Course Title</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi ducimus odit quae itaque dolores velit, cumque vitae aliquid molestias voluptas saepe beatae esse ad quos cupiditate doloremque blanditiis atque?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>
        </>
    );
}

export default withRouter(Home);