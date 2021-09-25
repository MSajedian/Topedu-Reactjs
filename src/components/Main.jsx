import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, CardGroup, Card, Carousel } from 'react-bootstrap';
// import { FcReadingEbook } from 'react-icons/fc';
// import { FcAbout } from 'react-icons/fc';
import MainNavbar from './MainNavbar'
import { Link } from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <MainNavbar />
                {/* <Container className="my-5" style={{ backgroundColor: "white", width: "50vw", padding: "10vw", border: "2px solid #b6b6b6", borderRadius: "5px" }}> */}
                <Container>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://picsum.photos/1200/600"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src="http://unsplash.it/1200/600?gravity=center"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://picsum.photos/1200/600"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <Row className="p-4 p-md-5 mb-4 text-center">
                        <div>
                            <h1 className="display-3">COLLABORATIVE LEARNING PLATFORM</h1>
                            <p className="lead my-3">Learning experiences made easy, social and interactive
                                Increase learner engagement & knowledge retention in higher education and corporate training settings
                            </p>
                        </div>
                        <Col className="mt-4">
                            <Link to="/signup" className="rounded" style={{ backgroundColor: "rgb(0,22,50)", color: "rgb(255,255,255)", padding: "1.7vw 3vw 2vw 3vw", textDecoration: "none", fontSize: "1.4rem", fontWeight: "bold" }}>Sign up for free &nbsp;
                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#fff"></path><path d="M12 16l4-4-4-4M8 12h8" stroke="#fff" ></path></svg>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="p-4 p-md-5 mb-4 text-center">
                        <Col>
                            Fast & easy course creation
                            Engage learners with collaborative activities
                            Track learner progress & measure engagement
                        </Col>
                    </Row>
                    <Row className="p-4 p-md-5 mb-4 text-center">
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
                    </Row>
                    <footer className="pt-4 my-md-5 pt-md-5 border-top">
                        <Row>
                            <Col>
                                <img
                                    className="mb-2"
                                    src="/docs/5.0/assets/brand/bootstrap-logo.svg"
                                    alt=""
                                    width="24"
                                    height="19"
                                />
                                <small className="d-block mb-3 text-muted">© 2017–2021</small>
                            </Col>
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
}

export default Main;