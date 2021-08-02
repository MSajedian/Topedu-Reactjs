import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Form } from 'react-bootstrap';
import { FcReadingEbook } from 'react-icons/fc';
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
                {/* <Container className="my-5" style={{ backgroundColor: "white", width: "50vw", padding: "10vw", border: "2px solid #b6b6b6", borderRadius: "5px" }}> */}
                <Container>
                    <Row className="p-4 p-md-5 mb-4 text-center">
                        <div>
                            <h1 className="display-3">COLLABORATIVE LEARNING PLATFORM</h1>
                            <p className="lead my-3">Learning experiences made easy, social and interactive
                                Increase learner engagement & knowledge retention in higher education and corporate training settings
                                Sign up for free</p>
                        </div>
                        <Col style={{marginTop:"1rem"}}>
                            <a href="https://app.eduflow.com/sign-up" className="rounded" style={{ backgroundColor: "rgb(0,22,50)", color:"rgb(255,255,255)", padding:"1.7vw 3vw 2vw 3vw", textDecoration:"none", fontSize:"1.4rem", fontWeight:"bold"}}>Sign up for free &nbsp;
                            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 16l4-4-4-4M8 12h8" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                        </Col>
                    </Row>
            </Container>
            </>
        );
    }
}

export default HomePage;