import React, { useState } from "react";
import { Alert, Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { FcConferenceCall } from 'react-icons/fc';

import { useHistory } from "react-router-dom";
import UseAuth from './auth/UseAuth'

const BackendURL = process.env.REACT_APP_BACKEND_REMOTE_URL || process.env.REACT_APP_BACKEND_LOCAL_URL

export default function Signup() {
    const [signUpAs, setSignUpAs] = useState('admin');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [institutionName, setInstitutionName] = useState('');
    const [signUpButtonStyle, setSignUpButtonStyle] = useState('primary');
    const [signUpButtonText, setSignUpButtonText] = useState('Sign up');

    let history = useHistory();
    let auth = UseAuth();

    let { from } = { from: { pathname: "/home" } };
    const login = () => {
        auth.signin(email, password, () => {
            history.replace(from);
        });
    };

    const handleSubmitSingupForm = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setSignUpButtonStyle('info')
        setSignUpButtonText('Signing up ...')
        if (password !== confirmPassword) {
            alert("passwords are not matched")
        }
        registerUser()
    };

    const registerUser = () => {
        try {
            fetch(`${BackendURL}/users/register`, {
                credentials: 'include',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, surname, email, password }) // body data type must match "Content-Type" header
            })
                .then(res => res.json())
                .then(
                    (response) => {
                        createInstitution()
                    }
                )
        } catch (error) {
            console.log('error:', error)
        }
    };

    const createInstitution = () => {
        try {
            fetch(`${BackendURL}/institutions/me`, {
                credentials: 'include',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: institutionName }) // body data type must match "Content-Type" header
            })
                .then(res => res.json())
                .then(
                    (response) => {
                        login()
                    }
                )
        } catch (error) {
            console.log('error:', error)
        }
    };

    return (
        <Container className="my-5" style={{ backgroundColor: "white", width: "50vw", padding: "10vw", border: "2px solid #b6b6b6", borderRadius: "5px" }}>
            <Row className="text-center">
                <FcConferenceCall style={{ fontSize: 50 }} className="mb-3" />
                <b className="mb-4">Sign up</b>
            </Row>
            <Row className="justify-content-center">
                <Col>
                    <FloatingLabel controlId="floatingSelect" label="Sign up as" className="mb-2">
                        <Form.Select aria-label="Floating label select" onChange={(e) => { setSignUpAs(e.target.value) }} defaultValue={signUpAs}>
                            <option value="admin">Admin</option>
                            <option value="learner">Learner</option>
                            <option value="instructor">Instructor</option>
                            <option value="assistant">Assistant</option>
                        </Form.Select>
                    </FloatingLabel>

                    {signUpAs === "learner" ? <Alert variant="primary" className="text-center my-2"> You should ask the <strong>Admin</strong> of the institution to send you the invitation link as <mark>Learner</mark> </Alert> : <></>}
                    {signUpAs === "instructor" ? <Alert variant="primary" className="text-center my-2"> You should ask the <strong>Admin</strong> of the institution to send you the invitation link as <mark>Instructor</mark> </Alert> : <></>}
                    {signUpAs === "assistant" ? <Alert variant="primary" className="text-center my-2"> You should ask the <strong>Admin</strong> of the institution to send you the invitation link as <mark>Assistant</mark> </Alert> : <></>}
                    {signUpAs === "admin" ?
                        <Form onSubmit={handleSubmitSingupForm}>
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
                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicInstitutionName">
                                <Form.Label>Institution Name</Form.Label>
                                <Form.Control type="text" value={institutionName} onChange={(e) => setInstitutionName(e.target.value)} required />
                            </Form.Group>
                            <Button type="submit" variant={signUpButtonStyle}>{signUpButtonText}</Button>
                        </Form>
                        : <></>}
                </Col>
            </Row>
        </Container >
    );
}
