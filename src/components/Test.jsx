import { Component } from 'react';
// import { Form, FormControl, Button } from 'react-bootstrap';
// import { FcAbout } from 'react-icons/fc';
// import { Card } from 'react-bootstrap';
// import CoursesNavbar from './CoursesNavbar';
// import CoursesContentActivity from './CoursesContentActivity';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Container, Row, Col } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';


class Courses extends Component {
    render() {
        return (
            <Container fluid="xs">
                <Row>
                    <Col xs={12} md={2}
                        // className="p-0 m-0"
                        style={{
                            backgroundColor: "blue",
                            height: "98vh",
                            overflowY: "auto",
                        }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint suscipit quae minus autem accusantium aut molestias consequuntur culpa. Odio nisi alias aperiam eius. Vel odit nemo voluptatibus magni doloribus incidunt.
                    </Col>
                    <Col
                        xs={12} md={10}
                        // className="p-0 m-0"
                        style={{
                            backgroundColor: "red",
                            overflowY: "auto",
                            boxSizing: "border-box",
                            height: "98vh",

                            // height: "100vmax",
                        }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint suscipit quae minus autem accusantium aut molestias consequuntur culpa. Odio nisi alias aperiam eius. Vel odit nemo voluptatibus magni doloribus incidunt.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint suscipit quae minus autem accusantium aut molestias consequuntur culpa. Odio nisi alias aperiam eius. Vel odit nemo voluptatibus magni doloribus incidunt.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint suscipit quae minus autem accusantium aut molestias consequuntur culpa. Odio nisi alias aperiam eius. Vel odit nemo voluptatibus magni doloribus incidunt.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint suscipit quae minus autem accusantium aut molestias consequuntur culpa. Odio nisi alias aperiam eius. Vel odit nemo voluptatibus magni doloribus incidunt.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint suscipit quae minus autem accusantium aut molestias consequuntur culpa. Odio nisi alias aperiam eius. Vel odit nemo voluptatibus magni doloribus incidunt.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint suscipit quae minus autem accusantium aut molestias consequuntur culpa. Odio nisi alias aperiam eius. Vel odit nemo voluptatibus magni doloribus incidunt.
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Courses;




