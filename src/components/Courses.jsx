import React, { useState, useEffect, useDebugValue } from "react";
import { Tab, Row, Col, Accordion, Nav, Card, Placeholder, Container } from 'react-bootstrap';
// import { FcAbout } from 'react-icons/fc';
// import { Row, Col } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
import CoursesNavbar from './Courses/CoursesNavbar';
import { useParams } from "react-router-dom";

let urlCourses = "http://localhost:3001/courses";

function Courses() {
    const [course, setCourse] = useStateWithLabel({}, "course");

    let { courseId } = useParams();

    function useStateWithLabel(initialValue, name) {
        const [value, setValue] = useState(initialValue);
        useDebugValue(`${name}: ${value}`);
        return [value, setValue];
    }

    const getCourse = () => {
        try {
            fetch(urlCourses + "/" + courseId, {
                credentials: 'include',
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify({ "institutionsId": institutions[0]._id }) // body data type must match "Content-Type" header
            })
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log('result of getCourse:', result)
                        setCourse(result)
                    }
                )
        } catch (error) {
            console.log('error:', error)
        }
    };

    useEffect(() => {
        getCourse()
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <CoursesNavbar />
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Card>
                            <Card.Img variant="top" src={course.cover ? course.cover : "https://picsum.photos/640/360"} />
                        </Card>

                        {course.flowsAndActivities ?
                            <Accordion>
                                {course.flowsAndActivities.map((flow) => (
                                    <Accordion.Item eventKey={flow.eventKey}>
                                        <Accordion.Header>{flow.name}</Accordion.Header>
                                        <Accordion.Body>
                                            <Nav variant="pills" className="flex-column">
                                                {flow.activities.map((activity) => (
                                                    <Nav.Item>
                                                        <Nav.Link eventKey={activity.eventKey}>{activity.name}</Nav.Link>
                                                    </Nav.Item>
                                                ))}
                                            </Nav>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                            :
                            <Accordion>
                                <Accordion.Item>
                                    <Accordion.Header>
                                        <Placeholder animation="glow">
                                            <Placeholder xs={10} />
                                        </Placeholder>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link>
                                                    <Placeholder animation="glow">
                                                        <Placeholder xs={10} />
                                                    </Placeholder>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        }
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            {course.flowsAndActivities ? course.flowsAndActivities.map((flow) => (
                                flow.activities.map((activity) => (
                                    <Tab.Pane eventKey={activity.eventKey}>
                                        <Container className="mt-5">{activity.activityContent}</Container>
                                    </Tab.Pane>
                                ))
                            ))
                                :
                                <Placeholder animation="glow"> <Placeholder xs={10} /> </Placeholder>
                            }
                            {/* {course.flowsAndActivities ? { course.flowsAndActivities.map((flow) => (<></>)) } : <Placeholder animation="glow"> <Placeholder xs={10} /> </Placeholder> } */}
                            {/* <Tab.Pane eventKey="first">
                                <Container className="mt-5">content of Tab1</Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Container className="mt-5">content of Tab2</Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Container className="mt-5">content of Tab3</Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <Container className="mt-5">content of Tab4</Container>
                            </Tab.Pane> */}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}

export default Courses;




