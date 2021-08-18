import { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FcAbout } from 'react-icons/fc';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container className="my-5" style={{ backgroundColor: "white", width:"50vw", padding:"10vw", border:"2px solid #b6b6b6", borderRadius:"5px" }}>
                <Row className="text-center">
                    <FcAbout style={{ fontSize: 50 }} className="mb-3" />
                    <b className="mb-4">Log in to TopEdu</b>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email or username</Form.Label>
                                <Form.Control type="email" placeholder="" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Log in
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container >);
    }
}

export default LogIn;