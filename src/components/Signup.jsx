import React, { useState } from "react";

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FcAbout } from 'react-icons/fc';
// import React, { useContext, createContext, useState } from "react";

import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from '../App'

export default function Signup() {
    const [email, setEmail] = useState('abc@abc.com');
    const [password, setPassword] = useState('newpassword');

    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state || { from: { pathname: "/home" } };
    let login = () => {
        auth.signin(email, password, () => {
            history.replace(from);
        });
    };

    return (
        <Container className="my-5" style={{ backgroundColor: "white", width: "50vw", padding: "10vw", border: "2px solid #b6b6b6", borderRadius: "5px" }}>
            <Row className="text-center">
                <FcAbout style={{ fontSize: 50 }} className="mb-3" />
                <b className="mb-4">Log in to TopEdu</b>
            </Row>
            <Row className="justify-content-center">
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email or username</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" onClick={login}>
                            Log in
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container >
    );
}
