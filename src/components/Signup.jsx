import React, { useDebugValue, useState } from "react";
import { Alert, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap-button-loader';
import { FcConferenceCall } from 'react-icons/fc';
import { useHistory } from "react-router-dom";
import UseAuth from './auth/UseAuth';

const BackendURL = process.env.REACT_APP_BACKEND_REMOTE_URL || process.env.REACT_APP_BACKEND_LOCAL_URL

export default function Signup() {
    const [signUpAs, setSignUpAs] = useStateWithLabel("admin", "signUpAs");
    const [name, setName] = useStateWithLabel("", "name");
    const [surname, setSurname] = useStateWithLabel("", "surname");
    const [email, setEmail] = useStateWithLabel("", "email");
    const [password, setPassword] = useStateWithLabel("", "password");
    const [confirmPassword, setConfirmPassword] = useStateWithLabel("", "confirmPassword");
    const [institutionName, setInstitutionName] = useStateWithLabel("", "institutionName");
    const [loading, setLoading] = useStateWithLabel(false, "loading");

    function useStateWithLabel(initialValue, name) {
        const [value, setValue] = useState(initialValue);
        useDebugValue(`${name}: ${value}`);
        return [value, setValue];
    }

    let history = useHistory();
    let auth = UseAuth();

    let { from } = { from: { pathname: "/institution" } };
    const login = () => {
        auth.signin(email, password, () => {
            history.replace(from);
        });
    };

    const handleSubmitSingupForm = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setLoading(true)
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
        <Container className="my-5 container-customized" >
            <Row className="text-center">
                <FcConferenceCall className="mb-3 fs-1" />
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
                            <Button loading={loading} bsStyle="button" className="button mx-2" type="submit">Sign up</Button>
                        </Form>
                        : <></>}
                </Col>
            </Row>
        </Container >
    );
}
