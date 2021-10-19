import React, { useDebugValue, useState } from "react";
import { Col, Container, Form, Image, Row, Spinner } from 'react-bootstrap';
import { BiEnvelope, BiLock } from 'react-icons/bi';
import { FcConferenceCall } from 'react-icons/fc';
import { useHistory, useLocation } from "react-router-dom";
import UseAuth from '../auth/UseAuth';
import LoginNavbar from './LoginNavbar';

export default function LogIn() {
    function useStateWithLabel(initialValue, name) {
        const [value, setValue] = useState(initialValue);
        useDebugValue(`${name}: ${value}`);
        return [value, setValue];
    }

    const [email, setEmail] = useStateWithLabel('', "email");
    const [password, setPassword] = useStateWithLabel('', "password");
    const [loading, setLoading] = useStateWithLabel(false, "loading");

    let history = useHistory();
    let location = useLocation();
    let auth = UseAuth();

    let { from } = location.state || { from: { pathname: "/home" } };
    const login = () => {
        setLoading(true)
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
                                    <button type="button" className="button" onClick={login}>
                                        {loading ?
                                            <Spinner animation="border" role="status" className="mt-2">
                                                <span className="visually-hidden">Loading...</span>
                                            </Spinner>
                                            :
                                            "Login"
                                        }
                                    </button>
                                </Form>
                            </Container>
                        </Container>
                    </Col>
                </Row>
            </Container >
        </>
    );
}
