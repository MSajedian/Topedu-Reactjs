import React, { useState, useEffect, useDebugValue } from "react";
import { Container } from 'react-bootstrap';
import { Button, Tabs, Tab } from 'react-bootstrap';
import { Row, Col, Card, Placeholder } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { withRouter } from "react-router";
import HomeNavbar from './HomeNavbar'

let urlUsers = "http://localhost:3001/users/me";
let urlInstitutions = "http://localhost:3001/institutions";
// let urlCourses = "http://localhost:3001/courses";

function Home(props) {
    const [query, setQuery] = useStateWithLabel("", "query");
    const [institutions, setInstitutions] = useStateWithLabel([], "institutions");
    const [courses, setCourses] = useStateWithLabel([], "courses");
    const userName = useSelector((state) => state.user.userName)

    function useStateWithLabel(initialValue, name) {
        const [value, setValue] = useState(initialValue);
        useDebugValue(`${name}: ${value}`);
        return [value, setValue];
    }

    const getInstitutionsDetails = () => {
        try {
            fetch(urlUsers, {
                credentials: 'include',
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify({ "email": email, "password": password }) // body data type must match "Content-Type" header
            })
                .then(res => res.json())
                .then(
                    (results) => {
                        setInstitutions(results.institutions)
                    }
                )
        } catch (error) {
            console.log('error:', error)
        }
    };

    const getCoursesDetails = () => {
        try {
            fetch(urlInstitutions + "/" + institutions[0]._id, {
                credentials: 'include',
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify({ "institutionsId": institutions[0]._id }) // body data type must match "Content-Type" header
            })
                .then(res => res.json())
                .then(
                    (results2) => {
                        console.log('results2 of getCoursesDetails:', results2)
                        setCourses(results2.courses)
                    }
                )
        } catch (error) {
            console.log('error:', error)
        }
    };

    useEffect(() => {
        getInstitutionsDetails()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        getCoursesDetails()
        // eslint-disable-next-line
    }, [institutions])

    const MyCoursesTabTitle = () => {
        return (<strong>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="blue"><path className="fill" d="M10,9 L14,9 C14.5522847,9 15,9.44771525 15,10 L15,14 C15,14.5522847 14.5522847,15 14,15 L10,15 C9.44771525,15 9,14.5522847 9,14 L9,10 C9,9.44771525 9.44771525,9 10,9 Z M10,10 L10,14 L14,14 L14,10 L10,10 Z M2,9 L6,9 C6.55228475,9 7,9.44771525 7,10 L7,14 C7,14.5522847 6.55228475,15 6,15 L2,15 C1.44771525,15 1,14.5522847 1,14 L1,10 C1,9.44771525 1.44771525,9 2,9 Z M2,10 L2,14 L6,14 L6,10 L2,10 Z M10,1 L14,1 C14.5522847,1 15,1.44771525 15,2 L15,6 C15,6.55228475 14.5522847,7 14,7 L10,7 C9.44771525,7 9,6.55228475 9,6 L9,2 C9,1.44771525 9.44771525,1 10,1 Z M10,2 L10,6 L14,6 L14,2 L10,2 Z M2,1 L6,1 C6.55228475,1 7,1.44771525 7,2 L7,6 C7,6.55228475 6.55228475,7 6,7 L2,7 C1.44771525,7 1,6.55228475 1,6 L1,2 C1,1.44771525 1.44771525,1 2,1 Z M2,2 L2,6 L6,6 L6,2 L2,2 Z"></path></svg>
            &nbsp; My Courses
        </strong>)
    };

    const codePlaygroundTabTitle = () => {
        return (<strong>
            {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="blue"><path className="fill" d="M10,9 L14,9 C14.5522847,9 15,9.44771525 15,10 L15,14 C15,14.5522847 14.5522847,15 14,15 L10,15 C9.44771525,15 9,14.5522847 9,14 L9,10 C9,9.44771525 9.44771525,9 10,9 Z M10,10 L10,14 L14,14 L14,10 L10,10 Z M2,9 L6,9 C6.55228475,9 7,9.44771525 7,10 L7,14 C7,14.5522847 6.55228475,15 6,15 L2,15 C1.44771525,15 1,14.5522847 1,14 L1,10 C1,9.44771525 1.44771525,9 2,9 Z M2,10 L2,14 L6,14 L6,10 L2,10 Z M10,1 L14,1 C14.5522847,1 15,1.44771525 15,2 L15,6 C15,6.55228475 14.5522847,7 14,7 L10,7 C9.44771525,7 9,6.55228475 9,6 L9,2 C9,1.44771525 9.44771525,1 10,1 Z M10,2 L10,6 L14,6 L14,2 L10,2 Z M2,1 L6,1 C6.55228475,1 7,1.44771525 7,2 L7,6 C7,6.55228475 6.55228475,7 6,7 L2,7 C1.44771525,7 1,6.55228475 1,6 L1,2 C1,1.44771525 1.44771525,1 2,1 Z M2,2 L2,6 L6,6 L6,2 L2,2 Z"></path></svg> */}
            👨‍💻 Code Playground
        </strong>)
    };

    return (
        <>
            <HomeNavbar institutions={institutions} />
            <div className="UserOverview pt-2">
                <Container>
                    <div className="d-flex">
                        <div className="me-auto p-2 h1">Hello {userName}, good to see you again! 👋</div>
                        <div className="p-2 h1"><Button>+&nbsp;Create&nbsp;Course</Button></div>
                    </div>

                    <div className="d-flex">
                        <span className="ms-auto pt-1 px-1">&#128269;</span>
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
                        </span>
                    </div>

                    <Tabs defaultActiveKey="MyCourses" id="courses-tabs" className="mb-1">
                        <Tab eventKey="MyCourses" title={MyCoursesTabTitle()}>
                            <Row xs={1} md={2} className="mt-1 g-4" id="link-1">
                                {courses.length > 0 ? courses.map(course => (
                                    <Col>
                                        <Card onClick={() => (props.history.push(`/courses/${course._id}`))} className="btn">
                                            <Card.Img variant="top" src={course.cover ? course.cover : "https://picsum.photos/640/360"} />
                                            <Card.Body>
                                                <Card.Title>{course.title}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )) :
                                    <>
                                        <Col>
                                            <Card className="btn">
                                                <Card.Body>
                                                    <Card.Title>
                                                        <Placeholder as={Card.Title} animation="glow">
                                                            <Placeholder xs={12} />
                                                            <Placeholder xs={12} bg="primary" />
                                                            <Placeholder xs={12} bg="secondary" />
                                                            <Placeholder xs={12} bg="success" />
                                                            <Placeholder xs={12} bg="danger" />
                                                            <Placeholder xs={12} bg="warning" />
                                                            <Placeholder xs={12} bg="info" />
                                                            <Placeholder xs={12} bg="light" />
                                                            <Placeholder xs={12} bg="dark" />
                                                        </Placeholder>
                                                    </Card.Title>
                                                </Card.Body>
                                            </Card>
                                            {/* <strong className='text-center'>You don't have any courses yet</strong> */}
                                        </Col>
                                        <Col>
                                            <Card className="btn">
                                                <Card.Body>
                                                    <Card.Title>
                                                        <Placeholder as={Card.Title} animation="glow">
                                                            <Placeholder xs={12} />
                                                            <Placeholder xs={12} bg="primary" />
                                                            <Placeholder xs={12} bg="secondary" />
                                                            <Placeholder xs={12} bg="success" />
                                                            <Placeholder xs={12} bg="danger" />
                                                            <Placeholder xs={12} bg="warning" />
                                                            <Placeholder xs={12} bg="info" />
                                                            <Placeholder xs={12} bg="light" />
                                                            <Placeholder xs={12} bg="dark" />
                                                        </Placeholder>
                                                    </Card.Title>
                                                </Card.Body>
                                            </Card>
                                            {/* <strong className='text-center'>You don't have any courses yet</strong> */}
                                        </Col>
                                    </>
                                }
                            </Row>
                        </Tab>
                        <Tab eventKey="codePlayground" title={codePlaygroundTabTitle()}>
                            <Row xs={1} md={2} className="mt-1 g-4" id="link-1" >
                                <Col>
                                    <Card onClick={() => (props.history.push(`/code-playground`))} className="btn">
                                        <Card.Img variant="top" src={window.location.origin + '/code-playground.jpg'} />
                                        < Card.Body >
                                            <Card.Title>Code Playground</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Container>

            </div>
        </>
    );
}

export default withRouter(Home);