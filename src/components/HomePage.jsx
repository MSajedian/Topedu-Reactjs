import { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FcAbout } from 'react-icons/fc';
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
                    Hello
                </Container >
            </>
        );
    }
}

export default HomePage;