import React, { useState } from "react";

import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { FcConferenceCall } from 'react-icons/fc';

import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    // Link,
    // Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import UseAuth from './auth/UseAuth'

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();
    let location = useLocation();
    let auth = UseAuth();

    let { from } = location.state || { from: { pathname: "/home" } };
    const login = () => {
        auth.signin(email, password, () => {
            history.replace(from);
        });
    };

    return (
        <Container className="my-5">


            <Row className="justify-content-center">
                <Col>
                    <Image src="assets/images/login1.png" alt="hero" width="100%" />
                </Col>
                <Col className="my-5">
                    <Container className="my-4">
                        <div className="text-center" style={{ fontFamily: "Poppins" }}>
                            <FcConferenceCall style={{ fontSize: 50 }} className="mb-3" />
                            <h3 className="mb-4 text-center" style={{ fontSize: "35px" }}>Login To Your <span style={{ color: "#4e70f6" }}>Account!</span></h3>
                        </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Button className="button" onClick={login}>
                                Log in
                            </Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </Container >
    );
}
