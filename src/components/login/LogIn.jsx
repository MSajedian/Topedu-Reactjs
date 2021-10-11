import React, { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { BiEnvelope, BiLock } from 'react-icons/bi';
import { FcConferenceCall } from 'react-icons/fc';
import { useHistory, useLocation } from "react-router-dom";
import UseAuth from '../auth/UseAuth';
import LogInNavbar from './LogInNavbar';



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
        <>
            <LogInNavbar />
            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col>
                        <Image src="assets/images/login1.png" alt="hero" width="100%" />
                    </Col>
                    <Col className="my-5">
                        <Container className="my-4">
                            <div className="text-center" style={{ fontFamily: "Poppins" }}>
                                <FcConferenceCall style={{ fontSize: 50 }} className="mb-3" />
                                <h3 className="mb-5 text-center" style={{ fontSize: "35px" }}><span style={{ color: "#4e83f5" }}>Login</span> To Your <span style={{ color: "#50be46" }}>Account!</span></h3>
                            </div>
                            <Container className="px-5">
                                <Form >
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label><BiEnvelope size="1.5em" /> Email Address</Form.Label>
                                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label><BiLock size="1.5em" /> Password</Form.Label>
                                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </Form.Group>
                                    <Button className="button" onClick={login}>
                                        Log in
                                    </Button>
                                </Form>
                            </Container>
                        </Container>
                    </Col>
                </Row>
            </Container >
        </>
    );
}
