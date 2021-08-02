import { Component } from 'react';
import { Container } from 'react-bootstrap';
// import { Row, Col, Form, Button } from 'react-bootstrap';
// import { FcAbout } from 'react-icons/fc';
import MainNavbar from './MainNavbar'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <MainNavbar />
                <Container className="my-5" style={{ backgroundColor: "white", width: "50vw", padding: "10vw", border: "2px solid #b6b6b6", borderRadius: "5px" }}>
                    COLLABORATIVE LEARNING PLATFORM
                    Learning experiences made easy, social and interactive
                    Increase learner engagement & knowledge retention in higher education and corporate training settings
                    Sign up for free
                </Container >
            </>
        );
    }
}

export default HomePage;