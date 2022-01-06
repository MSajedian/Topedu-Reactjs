import React, { useDebugValue, useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Form, Modal, Placeholder, Row, Tab, Tabs } from 'react-bootstrap';
import { AiOutlineAppstore } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import UseAuth from '../auth/UseAuth';
import HomeNavbar from './HomeNavbar';

const BackendURL = process.env.REACT_APP_BACKEND_REMOTE_URL || process.env.REACT_APP_BACKEND_LOCAL_URL

export default function Home() {
    const history = useHistory();
    const auth = UseAuth();
    const userName = useSelector((state) => state.user.userName)

    const [institutions, setInstitutions] = useStateWithLabel([], "institutions");
    const [courses, setCourses] = useStateWithLabel([], "courses");
    const [isfetchingCoursesfinished, setIsfetchingCoursesfinished] = useStateWithLabel(false, "isfetchingCoursesfinished");
    const [newCourseTitle, setNewCourseTitle] = useStateWithLabel('', "newCourseTitle");
    const [userType, setUserType] = useStateWithLabel('', "userType");

    // Create Course Modal
    const [showCreateCourseModal, setShowCreateCourseModal] = useStateWithLabel(false, "showCreateCourseModal");
    const handleCloseCreateCourseModal = () => setShowCreateCourseModal(false);
    const handleShowCreateCourseModal = () => setShowCreateCourseModal(true);

    // Delete Course Modal
    const [showDeleteCourseModal, setShowDeleteCourseModal] = useStateWithLabel(false, "showDeleteCourseModal");
    const handleCloseDeleteCourseModal = () => setShowDeleteCourseModal(false);
    const handleShowDeleteCourseModal = () => setShowDeleteCourseModal(true);
    const [courseTitleToDelete, setCourseTitleToDelete] = useStateWithLabel('', "courseTitleToDelete");
    const [courseIdToDelete, setCourseIdToDelete] = useStateWithLabel('', "courseIdToDelete");

    function useStateWithLabel(initialValue, name) {
        const [value, setValue] = useState(initialValue);
        useDebugValue(`${name}: ${value}`);
        return [value, setValue];
    }

    const getMyInstitutions = () => {
        try {
            fetch(`${BackendURL}/institutions/me`, {
                credentials: 'include',
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => { if (res.status === 401) { getNewAccessToken() } return res.json() })
                .then((response) => { setInstitutions(response) })
        } catch (error) { console.log('error:', error) }
    };

    const getCoursesOfInstitution = () => {
        if (institutions[0]) {
            try {
                fetch(`${BackendURL}/institutions/${institutions[0]._id}/courses`, {
                    credentials: 'include',
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                })
                    .then(res => { if (res.status === 401) { getNewAccessToken() } return res.json() })
                    .then((response) => { setCourses(response.courses); setUserType(response.userType); setIsfetchingCoursesfinished(true) })
            } catch (error) { console.log('error:', error) }
        }
    };

    const postNewCourse = () => {
        if (institutions[0]) {
            try {
                fetch(`${BackendURL}/courses/${institutions[0]._id}`, {
                    credentials: 'include',
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "title": newCourseTitle, "cover": `https://fakeimg.pl/350x200/333/eae0d0?text=${newCourseTitle}` }) // body data type must match "Content-Type" header
                })
                    .then(res => { if (res.status === 401) { getNewAccessToken(); getMyInstitutions(); getCoursesOfInstitution() }; if (res.ok) { getCoursesOfInstitution() } })
            } catch (error) {
                console.log('error:', error)
            }
        }
    };

    const updateCourse = (course) => {
        try {
            fetch(`${BackendURL}/courses/${course._id}`, {
                credentials: 'include',
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(course) // body data type must match "Content-Type" header
            })
                .then(res => { if (res.status === 401) { getNewAccessToken(); getMyInstitutions(); getCoursesOfInstitution() }; if (res.ok) { getCoursesOfInstitution() } })
        } catch (error) { console.log('error:', error) }
    };

    const deleteCourse = (courseId) => {
        if (institutions[0]) {
            try {
                fetch(`${BackendURL}/courses/${courseId}`, {
                    credentials: 'include',
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "institutionId": institutions[0]._id }) // body data type must match "Content-Type" header
                })
                    .then(res => { if (res.status === 401) { getNewAccessToken(); getMyInstitutions(); getCoursesOfInstitution() }; if (res.ok) { getCoursesOfInstitution() } })
            } catch (error) {
                console.log('error:', error)
            }
        }
    };

    function getNewAccessToken() {
        try {
            fetch(BackendURL + "/users/refreshToken", {
                credentials: 'include',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => {
                    if (res.status === 401) { auth.signout(() => history.push("/login")) } else { getMyInstitutions(); getCoursesOfInstitution() }
                })
        } catch (error) { console.log('error:', error) }
    }


    const MyCoursesTabTitle = () => { return (<strong><AiOutlineAppstore size="1.3em" color="blue" />  My Courses </strong>) };

    // const codePlaygroundTabTitle = () => { return (<div> 👨‍💻 Code Playground </div>) };

    const handleSubmitCreateCourse = (event) => {
        event.preventDefault();
        event.stopPropagation();
        postNewCourse()
        handleCloseCreateCourseModal()
    };

    useEffect(() => {
        getMyInstitutions()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        getCoursesOfInstitution()
        // eslint-disable-next-line
    }, [institutions])

    return (
        <>
            <HomeNavbar institutions={institutions} userType={userType ? userType : ""} />
            <div className="home-background pt-2">
                <Container>
                    <div className="d-flex justify-content-center  my-2">
                        <div className="h1"><span className="fst-italic">Hello </span><span className="fst-italic color-0022ff">{userName}</span><span className="fst-italic">, good to see you!</span>👋</div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div>{userType === "admin" || userType === "instructor" ? <button className="btn-grad-blue mb-2" onClick={handleShowCreateCourseModal}>+ Create Course</button> : <></>}</div>
                    </div>
                    <Modal centered show={showCreateCourseModal} onHide={handleCloseCreateCourseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create a new course</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmitCreateCourse}>
                                <Form.Label>New Course Name:</Form.Label>
                                <Form.Control type="text" required onChange={(e) => (setNewCourseTitle(e.target.value))} />
                                <Button type="submit" className="mt-2">Create</Button>
                            </Form>
                        </Modal.Body>
                    </Modal>

                    <Tabs defaultActiveKey="MyCourses" id="courses-tabs" className="mb-1 ">
                        <Tab eventKey="MyCourses" title={MyCoursesTabTitle()} tabClassName="shadow-lg ">
                            <Row xs={1} md={2} className="mt-1 g-4" id="link-1">
                                {isfetchingCoursesfinished
                                    ?
                                    courses.length === 0 ? <Col className="text-center"><Alert variant="warning" className="shadow-lg">You don't have any courses</Alert></Col> :
                                        courses.map((course, index) => (
                                            <Col key={`course${index}`} className="">
                                                <Card className="position-relative border border-secondary box-shadow" >
                                                    <Card.Img className="height-40vh" variant="top" src={course.cover} onClick={() => (history.push(`/courses/${course._id}`))} />
                                                    <Card.Body className="border border-primary border-end-0 border-bottom-0 border-start-0">
                                                        <Card.Title className="d-flex justify-content-center">
                                                            {userType === "admin" || userType === "instructor" ?
                                                                <Form.Control className="text-center w-75" plaintext defaultValue={course.title} onChange={(e) => {
                                                                    if (course.cover === `https://fakeimg.pl/350x200/333/eae0d0?text=${course.title}`) {
                                                                        course.cover = `https://fakeimg.pl/350x200/333/eae0d0?text=${e.target.value}`
                                                                    }
                                                                    course.title = e.target.value
                                                                    updateCourse(course)
                                                                }} />
                                                                :
                                                                course.title
                                                            }
                                                        </Card.Title>
                                                        {userType === "admin" || userType === "instructor" ?
                                                            <Button id={`delete-button${index}`} className="btn btn-danger position-absolute bottom-0 start-0 m-1 button-delete" onClick={() => { setCourseTitleToDelete(course.title); setCourseIdToDelete(course._id); handleShowDeleteCourseModal() }}>
                                                                <BsTrash size="1.2em" />
                                                            </Button>
                                                            : <></>
                                                        }
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )) :
                                    <>
                                        <Col>
                                            <Card className="btn box-shadow">
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
                                        </Col>
                                        <Col>
                                            <Card className="btn box-shadow">
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
                                        </Col>
                                    </>
                                }
                            </Row>
                        </Tab>
                        {/* <Tab eventKey="codePlayground" title={codePlaygroundTabTitle()} tabClassName="shadow-lg" >
                            <Row xs={1} md={2} className="mt-1 g-4" id="link-2" >
                                <Col>
                                    <Card onClick={() => (history.push(`/code-playground`))} className="btn box-shadow">
                                        <Card.Img variant="top" src={window.location.origin + '/assets/images/code-playground.jpg'} />
                                        < Card.Body >
                                            <Card.Title>Code Playground</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab> */}
                    </Tabs>
                    <Modal show={showDeleteCourseModal} onHide={handleCloseDeleteCourseModal} >
                        <Modal.Header closeButton>
                            <Modal.Title>Course Deletion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <div className="text-center">Do you want to delete this course?</div>
                            <div className="text-center mt-2 fs-3">{courseTitleToDelete}</div>
                        </Modal.Body>
                        <Modal.Footer >
                            <Button variant="secondary" onClick={handleCloseDeleteCourseModal}>
                                No
                            </Button>
                            <Button variant="danger" onClick={() => { deleteCourse(courseIdToDelete); handleCloseDeleteCourseModal() }}>
                                Yes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </div>
        </>
    );
}