import { Component } from 'react';
// import { Form, FormControl, Button } from 'react-bootstrap';
// import { FcAbout } from 'react-icons/fc';
// import { Container, Row, Col } from 'react-bootstrap';
import CoursesNavbar from './CoursesNavbar';

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
        main: () => <h2>Home</h2>
    },
    {
        path: "/courses/bubblegum",
        main: () => <h2>Bubblegum</h2>
    },
    {
        path: "/courses/shoelaces",
        main: () => <h2>Shoelaces</h2>
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
                                // You can render a <Route> in as many places
                                // as you want in your app. It will render along
                                // with any other <Route>s that also match the URL.
                                // So, a sidebar or breadcrumbs or anything else
                                // that requires you to render multiple things
                                // in multiple places at the same URL is nothing
                                // more than multiple <Route>s.
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
                                    // Render more <Route>s with the same paths as
                                    // above, but different components this time.
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




