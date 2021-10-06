import React, { useDebugValue, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FcConferenceCall } from 'react-icons/fc';
import { useParams } from "react-router-dom";

// import React, { useContext, createContext, useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";
// import UseAuth from './auth/UseAuth'

const BackendURL = process.env.REACT_APP_BACKEND_CLOUD_URL || process.env.REACT_APP_BACKEND_LOCAL_URL

export default function Join() {
    const { courseId, userId, institutionId } = useParams();

    const [name, setName] = useStateWithLabel('', "name");
    const [surname, setSurname] = useStateWithLabel('', "surname");
    const [email, setEmail] = useStateWithLabel('', "email");
    const [password, setPassword] = useStateWithLabel('', "password");
    const [repPassword, setRepPassword] = useStateWithLabel('', "repPassword");

    function useStateWithLabel(initialValue, name) {
        const [value, setValue] = useState(initialValue);
        useDebugValue(`${name}: ${value}`);
        return [value, setValue];
    }

    // let history = useHistory();
    // let location = useLocation();
    // let auth = UseAuth();

    // let { from } = location.state || { from: { pathname: "/home" } };
    // const login = () => {
    //     auth.signin(email, password, () => {
    //         history.replace(from);
    //     });
    // };

    const signUp = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log('name:', name)
    };

    const joinCourse = () => {
        try {
            fetch(`${BackendURL}/courses/${courseId}/join/${userId}`, {
                credentials: 'include',
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
                .then(
                    (response) => {
                        // setCourse(response.course)
                        // setEditableCourseTitle(response.course.title)
                        // setChangeCourseCover(response.course.cover)
                        // setUserType(response.userType)
                    }
                )
        } catch (error) {
            console.log('error:', error)
        }
    };

    const joinInstitution = () => {
        try {
            fetch(`${BackendURL}/institutions/${institutionId}/join/${userId}`, {
                credentials: 'include',
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
            // .then((response) => { setInstitutions(response) })
        } catch (error) { console.log('error:', error) }
    };

    useEffect(() => {
        if (courseId) joinCourse();console.log("---------------");
        if (institutionId) joinInstitution()
        // eslint-disable-next-line
    }, [])

    return (
        <Container className="my-5" style={{ backgroundColor: "white", width: "50vw", padding: "10vw", border: "2px solid #b6b6b6", borderRadius: "5px" }}>
            <Row className="text-center">
                <FcConferenceCall style={{ fontSize: 50 }} className="mb-3" />
                <b className="mb-4">Join TopEdu</b>
            </Row>
            <Row className="justify-content-center">
                <Col>
                    <Form onSubmit={signUp}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSurname">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicrepPassword">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control type="repPassword" value={repPassword} onChange={(e) => setRepPassword(e.target.value)} required />
                        </Form.Group>
                        <Button type="submit" >Sign up</Button>
                    </Form>
                </Col>
            </Row>
        </Container >
    );
}
