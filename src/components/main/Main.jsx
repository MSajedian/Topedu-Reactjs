import React, { useState, useDebugValue } from "react";
import { Col, Container, Row, Image } from 'react-bootstrap';

import { Link } from "react-router-dom";
import MainNavbar from './MainNavbar';
// import { CardGroup, Card } from 'react-bootstrap';
// import { FcReadingEbook } from 'react-icons/fc';
// import { FcConferenceCall } from 'react-icons/fc';

export default function Main() {
    function useStateWithLabel(initialValue, name) {
        const [value, setValue] = useState(initialValue);
        useDebugValue(`${name}: ${value}`);
        return [value, setValue];
    }
    const [valueX, setValueX] = useStateWithLabel(0, "valueX");
    const [valueY, setValueY] = useStateWithLabel(0, "valueY");


    return (
        <>
            <MainNavbar />
            {/* <Container className="my-5" style={{ backgroundColor: "white", width: "50vw", padding: "10vw", border: "2px solid #b6b6b6", borderRadius: "5px" }}> */}

            <section className="hero-section" onMouseMove={(e) => { setValueX(e.pageX); setValueY(e.pageY) }}>
                <div className="hero-shape">
                    <img src="assets/images/round-shape-4.png" alt="shape" className="hero-round-shape-4 item-moveTwo mt-5" />
                </div>
                <Container>
                    <Row className="p-5">
                        <Col lg={4} className="align-self-start mt-5">
                            <div className="hero-content mt-5">
                                <h1><span>learning Online</span> becomes easier</h1>
                                <span className="hero-tagline">Learn Wherever, Whenever, However Online Classes.</span>
                            </div>
                        </Col>
                        <Col lg={8} >
                            <div className="hero-image">
                                <div className="hero-small-images">
                                    <img src="./assets/images/hero-small-image-1.png" alt="hero-small-1" className="hero-small-image-1" style={{ transform: `translate3d(${(valueX * -1) / 100}px, ${(valueY * -1) / 120}px, 0px)` }} />
                                    <img src="./assets/images/hero-small-image-2.png" alt="hero-small-2" className="hero-small-image-2" style={{ transform: `translate3d(${(valueX * -1) / 60}px, ${(valueY * -1) / 80}px, 0px)` }} />
                                    <img src="./assets/images/hero-small-image-3.png" alt="hero-small-3" className="hero-small-image-3" style={{ transform: `translate3d(${(valueX * -1) / 40}px, ${(valueY * -1) / 60}px, 0px)` }} />
                                    <img src="./assets/images/hero-small-image-4.png" alt="hero-small-4" className="hero-small-image-4" style={{ transform: `translate3d(${(valueX * -1) / 80}px, ${(valueY * -1) / 100}px, 0px)` }} />
                                </div>
                                <Image src="./assets/images/online-learning.png" alt="hero" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container>
                <Row className="p-4 text-center">
                    <Col>
                        <p className="lead my-3">Learning experiences made easy, social and interactive
                            Increase learner engagement & knowledge retention in higher education and corporate training settings
                        </p>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        Fast & easy course creation
                        Engage learners with collaborative activities
                        Track learner progress & measure engagement
                    </Col>
                </Row>
                {/* <Row className="p-4 p-md-5 mb-4 text-center">
                    <Col>
                        <div>Built to empower every instructor
                            With our expansive and flexible platform, Eduflow supports a wide range of learning experiences.
                            USE CASE EXAMPLES
                            University courses
                            Online courses
                            Employee onboarding & sales training
                            Extending your LMS’s capabilities</div>
                    </Col>
                    <Col>
                        <CardGroup >
                            <Card className="mx-2 rounded">
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card className="mx-2 rounded">
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row> */}
                <footer className="pt-4 my-md-5 pt-md-5 border-top text-center">
                    <Row>
                        <Col>
                            <h5>Features</h5>
                            <ul className="list-unstyled text-small">
                                <li className="mb-1">
                                    <Link className="link-secondary text-decoration-none" to="/" >Cool stuff</Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="link-secondary text-decoration-none" to="/" >Random feature</Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="link-secondary text-decoration-none" to="/" >Team feature</Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="link-secondary text-decoration-none" to="/" >Stuff for developers</Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="link-secondary text-decoration-none" to="/" >Another one</Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="link-secondary text-decoration-none" to="/" >Last time</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                                <li className="mb-1">
                                    <Link className="link-secondary text-decoration-none" to="/" >Resource</Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="link-secondary text-decoration-none" to="/" >Resource name</Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="link-secondary text-decoration-none" to="/" >Another resource</Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="link-secondary text-decoration-none" to="/" >Final resource</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <h5>About</h5>
                            <ul className="list-unstyled text-small">
                                <li className="mb-1">
                                    <Link className="link-secondary text-decoration-none" to="/">Team</Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="link-secondary text-decoration-none" to="/" >Locations</Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="link-secondary text-decoration-none" to="/" >Privacy</Link>
                                </li>
                                <li className="mb-1">
                                    <Link className="link-secondary text-decoration-none" to="/">Terms</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </footer>
            </Container>
        </>
    );
}