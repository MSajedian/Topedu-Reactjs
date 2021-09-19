import React, { useState } from "react";

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FcAbout } from 'react-icons/fc';
// import React, { useContext, createContext, useState } from "react";

import { useHistory, useLocation } from "react-router-dom";
import useAuth from './UseAuth'

export default function Signup() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [institutionName, setInstitutionName] = useState('');

    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state || { from: { pathname: "/home" } };
    let signup = () => {
        auth.signin(email, password, () => {
            history.replace(from);
        });
    };

    return (
        <Container className="my-5" style={{ backgroundColor: "white", width: "50vw", padding: "10vw", border: "2px solid #b6b6b6", borderRadius: "5px" }}>
            <Row className="text-center">
                <FcAbout style={{ fontSize: 50 }} className="mb-3" />
                <b className="mb-4">Sign up</b>
            </Row>
            <Row className="justify-content-center">
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Institution Name</Form.Label>
                            <Form.Control type="password" value={institutionName} onChange={(e) => setInstitutionName(e.target.value)} required/>
                        </Form.Group>
                        <Button variant="primary" onClick={signup}>
                            Sign up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container >
    );
}
