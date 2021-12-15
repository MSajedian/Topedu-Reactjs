import React, { useState, useDebugValue } from "react";
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import { BiEnvelope, BiLock } from 'react-icons/bi';
import { FcConferenceCall } from 'react-icons/fc';
import { useHistory, useLocation } from "react-router-dom";
import UseAuth from '../auth/UseAuth';
import LoginNavbar from './LoginNavbar';

export default function Login() {
    const [email, setEmail] = useStateWithLabel('', "email");
    const [password, setPassword] = useStateWithLabel('', "password");
    const [loginButtonClassName, setLoginButtonClassName] = useStateWithLabel("button mx-2", "loginButtonClassName");
    const [loginButtonText, setLoginButtonText] = useStateWithLabel("Log in", "loginButtonText");

    function useStateWithLabel(initialValue, name) {
        const [value, setValue] = useState(initialValue);
        useDebugValue(`${name}: ${value}`);
        return [value, setValue];
    }

    let history = useHistory();
    let location = useLocation();
    let auth = UseAuth();

    let { from } = location.state || { from: { pathname: "/home" } };

    const handleLogin = (event) => {
        setLoginButtonText("Logging in ...")
        setLoginButtonClassName("button mx-2 bg-info")
        event.preventDefault();
        event.stopPropagation();
        auth.signin(email, password, () => {
            history.replace(from);
        });
    };

    return (
        <>
            <LoginNavbar />
            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <Image src="assets/images/login1.png" alt="hero" width="100%" />
                    </Col>
                    <Col lg={6} className="my-5">
                        <Container className="my-4">
                            <div className="text-center font-family-Poppins" >
                                <FcConferenceCall className="mb-3 fs-1" />
                                <h3 className="mb-5 text-center fs-2" ><span className="color-4e83f5">Login</span> To Your <span className="color-50be46">Account!</span></h3>
                            </div>
                            <Container className="px-5">
                                <Form onSubmit={handleLogin}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label><BiEnvelope size="1.5em" /> Email Address</Form.Label>
                                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label><BiLock size="1.5em" /> Password</Form.Label>
                                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </Form.Group>
                                    {/* <button type="submit" className="button mx-2" > Login </button> */}
                                    <button className={loginButtonClassName} type="submit">{loginButtonText}</button>

                                </Form>
                            </Container>
                        </Container>
                    </Col>
                </Row>
            </Container >
        </>
    )
}
