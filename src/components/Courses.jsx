import { Component } from 'react';
// import { Form, FormControl, Button } from 'react-bootstrap';
// import { FcAbout } from 'react-icons/fc';
// import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import CoursesNavbar from './CoursesNavbar';
import CoursesContent from './CoursesContent';

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const routes = [
    {
        path: "/courses/home",
        main: () => <CoursesContent title='home' />
    },
    {
        path: "/courses/bubblegum",
        main: () => <CoursesContent title='bubblegum'/>
    },
    {
        path: "/courses/shoelaces",
        main: () => <CoursesContent title='shoelaces'/>
    }
];
class Courses extends Component {
    render() {
        return (
            <>
                <CoursesNavbar />
                <Router>
                    <div style={{ display: "flex" }}>
                        <div
                            style={{
                                padding: "10px",
                                width: "20vw",
                                height: "100vh",
                                background: "#f0f0f0"
                            }}
                        >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x150/0000FF" />
                                <Card.Body>
                                    <Card.Title>Course title</Card.Title>
                                </Card.Body>
                            </Card>
                            <hr />
                            <ul
                                style={{
                                    listStyleType: "none",
                                    padding: 0,
                                    height: "calc(100vh - 150px)",
                                    background: "#f0f0f0",
                                    overflowY: "auto",
                                }}
                            >
                                <li> <Link to="/courses/home">Home</Link> </li>
                                <li> <Link to="/courses/bubblegum">Bubblegum</Link> </li>
                                <li> <Link to="/courses/shoelaces">Shoelaces</Link> </li>
                            </ul>
                        </div>
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                />
                            ))}
                        </Switch>

                        <div style={{ flex: 1, padding: "10px" }}>
                            <Switch>
                                {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.main />}
                                    />
                                ))}
                            </Switch>
                        </div>
                    </div>
                </Router>
            </>
        )
    }
}

export default Courses;




