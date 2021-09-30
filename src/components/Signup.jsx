import React, { useState } from "react";
import { Alert, Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { FcAbout } from 'react-icons/fc';

// import React, { useContext, createContext, useState } from "react";

// import { useHistory, useLocation } from "react-router-dom";
// import UseAuth from './auth/UseAuth'

export default function Signup() {
    const [signUpAs, setSignUpAs] = useState('learner');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');
    const [institutionName, setInstitutionName] = useState('');

    // let history = useHistory();
    // let location = useLocation();
    // let auth = UseAuth();

    // let { from } = location.state || { from: { pathname: "/home" } };
    // let signup = () => { 
    //  auth.signin(email, password, () => {
    //      history.replace(from);
    //  });
    // };

    const signup = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log('signUpAs:', signUpAs)
        console.log('name:', name)
    };

    return (
        <Container className="my-5" style={{ backgroundColor: "white", width: "50vw", padding: "10vw", border: "2px solid #b6b6b6", borderRadius: "5px" }}>
            <Row className="text-center">
                <FcAbout style={{ fontSize: 50 }} className="mb-3" />
                <b className="mb-4">Sign up</b>
            </Row>
            <Row className="justify-content-center">
                <Col>
                    <FloatingLabel controlId="floatingSelect" label="Sign up as" className="mb-2">
                        <Form.Select aria-label="Floating label select" onChange={(e) => { setSignUpAs(e.target.value) }} defaultValue={signUpAs}>
                            <option value="learner">Learner</option>
                            <option value="instructor">Instructor</option>
                            <option value="assistant">Assistant</option>
                            <option value="institutionOwner">Institution owner</option>
                        </Form.Select>
                    </FloatingLabel>

                    {signUpAs === "learner" ? <Alert variant="primary" className="text-center my-2"> You should ask the owner of the institution to send you the invitation link as <mark>Learner</mark> </Alert> : <></>}
                    {signUpAs === "instructor" ? <Alert variant="primary" className="text-center my-2"> You should ask the owner of the institution to send you the invitation link as <mark>Instructor</mark> </Alert> : <></>}
                    {signUpAs === "assistant" ? <Alert variant="primary" className="text-center my-2"> You should ask the owner of the institution to send you the invitation link as <mark>Assistant</mark> </Alert> : <></>}
                    {signUpAs === "institutionOwner" ?
                        <Form onSubmit={signup}>
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
                            <Form.Group className="mb-3" controlId="formBasicInstitutionName">
                                <Form.Label>Institution Name</Form.Label>
                                <Form.Control type="text" value={institutionName} onChange={(e) => setInstitutionName(e.target.value)} required />
                            </Form.Group>
                            <Button type="submit" >Sign up</Button>
                        </Form>
                        : <></>}
                </Col>
            </Row>
        </Container >
    );
}
