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

            <section class="hero-section" onMouseMove={(e) => { setValueX(e.pageX); setValueY(e.pageY) }}>
                <div class="hero-shape">
                    <img src="assets/images/round-shape-4.png" alt="shape" class="hero-round-shape-4 item-moveTwo" />
                </div>
                <Container>
                    <Row>
                        <Col lg={6} className="align-self-center">
                            <div class="hero-content">
                                <h1><span>learning Online</span> becomes easier</h1>
                                <span class="hero-tagline">Learn Wherever, Whenever, However Online Classes.</span>
                            </div>
                        </Col>
                        <Col lg={6} >
                            <div class="hero-image">
                                <div class="hero-small-images">
                                    <img src="./assets/images/hero-small-image-1.png" alt="hero-small-1" class="hero-small-image-1" style={{ transform: `translate3d(${(valueX * -1) / 100}px, ${(valueY * -1) / 120}px, 0px)` }} />
                                    <img src="./assets/images/hero-small-image-2.png" alt="hero-small-2" class="hero-small-image-2" style={{ transform: `translate3d(${(valueX * -1) / 60}px, ${(valueY * -1) / 80}px, 0px)` }} />
                                    <img src="./assets/images/hero-small-image-3.png" alt="hero-small-3" class="hero-small-image-3" style={{ transform: `translate3d(${(valueX * -1) / 40}px, ${(valueY * -1) / 60}px, 0px)` }} />
                                    <img src="./assets/images/hero-small-image-4.png" alt="hero-small-4" class="hero-small-image-4" style={{ transform: `translate3d(${(valueX * -1) / 80}px, ${(valueY * -1) / 100}px, 0px)` }} />
                                </div>
                                <Image src="./assets/images/online-learning.png" alt="hero"  />
                                {/* <Image src="assets/images/technical-workshops.png" alt="hero"  /> */}
                                {/* <Image src="assets/images/Online-Learn-Courses-p1x1yjmoc2f9t2e3kt028qnv3vp2cb51rm1isamguc.png" alt="hero"  /> */}
                                {/* <Image src="assets/images/Coursera-Clone-Script-to-Build-Online-Course-Software-vector-image.png" alt="hero"  /> */}
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
            <Container>
                {/* <h1 className="display-3 text-center">LEARNING ONLINE BECOMES EASIER</h1>
                <Carousel fade>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src="http://unsplash.it/1400/400?random&gravity=west"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src="http://unsplash.it/1400/400?gravity=center"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src="https://picsum.photos/1400/400"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}
                <Row className="p-4 text-center">
                    <Col>
                        <p className="lead my-3">Learning experiences made easy, social and interactive
                            Increase learner engagement & knowledge retention in higher education and corporate training settings
                        </p>
                    </Col>
                    {/* <Col className="mt-4">
                        <Link to="/signup" className="rounded" style={{ backgroundColor: "#4d70f6", color: "rgb(255,255,255)", padding: "1.6vw 2.9vw 1.8vw 2.9vw", textDecoration: "none", fontSize: "1.5rem", fontWeight: "bold" }}>Sign up for free &nbsp;
                            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#fff"></path><path d="M12 16l4-4-4-4M8 12h8" stroke="#fff" ></path></svg>
                        </Link>
                    </Col> */}
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