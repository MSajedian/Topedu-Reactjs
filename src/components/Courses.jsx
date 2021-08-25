import { Component } from 'react';
// import { Form, FormControl, Button } from 'react-bootstrap';
// import { FcAbout } from 'react-icons/fc';
import { Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import CoursesNavbar from './CoursesNavbar';
import CoursesContentActivity from './CoursesContentActivity';
import CodePlayground from './CodePlayground';

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const routes = [
    {
        path: "/courses/code-playground",
        main: () => (<><CodePlayground title='code playground' /></>)
    },
    {
        path: "/courses/bubblegum",
        main: () => <CoursesContentActivity title='bubblegum' />
    },
    {
        path: "/courses/shoelaces",
        main: () => <CoursesContentActivity title='shoelaces' />
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
                                height: "calc(100vh - 55.989583px)",
                                background: "#f0f0f0"
                            }}
                        >
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x150/0000FF" />
                            </Card>
                            <h3>Course Title</h3>
                            <hr />
                            <ul
                                style={{
                                    listStyleType: "none",
                                    padding: 0,
                                    // height: "100%",
                                    background: "#f0f0f0",
                                    overflowY: "auto",
                                }}
                            >
                                <li>
                                    <svg width="16px" height="16px" viewBox="0 0 16 16" ><path fill-rule="nonzero" d="M8.00000093,2.47906767 C8.31350415,2.24706345 8.76889577,1.98625808 9.38661896,1.73211184 C10.8163472,1.14388713 12.7158019,0.782346867 15.1476119,0.749845387 C15.3750264,0.746790466 15.5937834,0.836425225 15.7523346,0.996527814 C15.911452,1.15571834 16.0000207,1.3715549 16.0000207,1.596 L16.0000207,12.5092167 C16.003181,12.9675522 15.639635,13.3452231 15.173446,13.3586545 C12.858949,13.3898845 11.0807782,13.7277217 9.77007364,14.2657195 C9.30028719,14.4585502 8.92907902,14.6622407 8.64641073,14.8622639 C8.51259131,14.9569578 8.42863591,15.0281139 8.38862643,15.0670627 C8.36293898,15.0981746 8.33364517,15.1257856 8.3016515,15.1495473 C8.21017883,15.2201022 8.10426457,15.2518549 8,15.2510058 C7.89573496,15.2518549 7.78982022,15.2201019 7.69834732,15.1495463 C7.66635377,15.1257846 7.63706007,15.0981736 7.61137274,15.0670616 C7.57136357,15.0281129 7.48740879,14.9569569 7.35359033,14.862263 C7.07092394,14.6622401 6.69971824,14.4585496 6.22993485,14.2657191 C4.9192386,13.7277215 3.14107889,13.3898845 0.818883711,13.3584909 C0.360348544,13.3452261 -0.00323997783,12.9675439 -4.26249227e-05,12.5127 L-4.26249227e-05,1.596 C-4.26249227e-05,1.37150513 0.0885958605,1.15563205 0.245990067,0.998254348 C0.406158274,0.836444012 0.624960225,0.746790846 0.851989257,0.749845387 C3.28422674,0.782346876 5.18367104,1.14388727 6.61339144,1.73211224 C7.23111057,1.9862583 7.68649941,2.24706351 8.00000093,2.47906767 Z M6.60965793,13.3406189 C6.95625564,13.4828858 7.25183502,13.6272417 7.50000007,13.7674648 L7.50000007,3.36250758 C7.46032226,3.33100814 7.41177288,3.29437799 7.35387186,3.25332386 C7.07182217,3.05333937 6.70149926,2.84969087 6.23290902,2.65690039 C4.95504469,2.13115305 3.23221396,1.79660208 0.999987658,1.75258213 L0.999987658,12.3613889 C3.35938211,12.4076145 5.20954496,12.7659187 6.60965793,13.3406189 Z M6.15929255,6.97937951 C6.42104818,7.06734883 6.56192982,7.35085692 6.47396049,7.61261255 C6.38599117,7.87436818 6.10248308,8.01524982 5.84072745,7.92728049 C4.74492898,7.55901085 3.60841747,7.33096424 2.45770807,7.24872804 C2.18226818,7.22904354 1.97493747,6.98979796 1.99462196,6.71435807 C2.01430646,6.43891818 2.25355204,6.23158747 2.52899193,6.25127196 C3.76397179,6.33953062 4.98356658,6.58424829 6.15929255,6.97937951 Z M6.15929255,9.77604951 C6.42104818,9.86401883 6.56192982,10.1475269 6.47396049,10.4092826 C6.38599117,10.6710382 6.10248308,10.8119198 5.84072745,10.7239505 C4.74492898,10.3556809 3.60841747,10.1276342 2.45770807,10.045398 C2.18226818,10.0257135 1.97493747,9.78646796 1.99462196,9.51102807 C2.01430646,9.23558818 2.25355204,9.02825747 2.52899193,9.04794196 C3.76397179,9.13620062 4.98356658,9.38091829 6.15929255,9.77604951 Z M10.1592775,7.92728219 C9.89752094,8.01524873 9.61401435,7.87436407 9.52604781,7.61260751 C9.43808127,7.35085094 9.57896593,7.06734435 9.84072249,6.97937781 C11.0164939,6.58424527 12.2360872,6.33952998 13.4710581,6.25127196 C13.746498,6.23158747 13.9857435,6.43891818 14.005428,6.71435807 C14.0251125,6.98979796 13.8177818,7.22904354 13.5423419,7.24872804 C12.3916392,7.33096377 11.2551256,7.55900884 10.1592775,7.92728219 Z M10.1592775,10.7239522 C9.89752094,10.8119187 9.61401435,10.6710341 9.52604781,10.4092775 C9.43808127,10.1475209 9.57896593,9.86401435 9.84072249,9.77604781 C11.0164939,9.38091527 12.2360872,9.13619998 13.4710581,9.04794196 C13.746498,9.02825747 13.9857435,9.23558818 14.005428,9.51102807 C14.0251125,9.78646796 13.8177818,10.0257135 13.5423419,10.045398 C12.3916392,10.1276338 11.2551256,10.3556788 10.1592775,10.7239522 Z M9.39035247,13.3406185 C10.7918946,12.7653351 12.6444034,12.4068871 15,12.3614027 L15,1.7525805 C12.7680023,1.79656542 11.045042,2.13112437 9.76709946,2.65690078 C9.29850615,2.84969139 8.92818079,3.05334003 8.64612919,3.25332467 C8.58822779,3.29437883 8.53967808,3.33100901 8.5,3.36250848 L8.5,13.7674674 C8.74816751,13.6272433 9.04375031,13.4828864 9.39035247,13.3406185 Z"></path></svg>
                                    {' '}
                                    <Link to="/courses/code-playground">code playground</Link> </li>
                                <li>
                                    <svg width="16px" height="16px" viewBox="0 0 16 16" ><path fill-rule="nonzero" d="M8.00000093,2.47906767 C8.31350415,2.24706345 8.76889577,1.98625808 9.38661896,1.73211184 C10.8163472,1.14388713 12.7158019,0.782346867 15.1476119,0.749845387 C15.3750264,0.746790466 15.5937834,0.836425225 15.7523346,0.996527814 C15.911452,1.15571834 16.0000207,1.3715549 16.0000207,1.596 L16.0000207,12.5092167 C16.003181,12.9675522 15.639635,13.3452231 15.173446,13.3586545 C12.858949,13.3898845 11.0807782,13.7277217 9.77007364,14.2657195 C9.30028719,14.4585502 8.92907902,14.6622407 8.64641073,14.8622639 C8.51259131,14.9569578 8.42863591,15.0281139 8.38862643,15.0670627 C8.36293898,15.0981746 8.33364517,15.1257856 8.3016515,15.1495473 C8.21017883,15.2201022 8.10426457,15.2518549 8,15.2510058 C7.89573496,15.2518549 7.78982022,15.2201019 7.69834732,15.1495463 C7.66635377,15.1257846 7.63706007,15.0981736 7.61137274,15.0670616 C7.57136357,15.0281129 7.48740879,14.9569569 7.35359033,14.862263 C7.07092394,14.6622401 6.69971824,14.4585496 6.22993485,14.2657191 C4.9192386,13.7277215 3.14107889,13.3898845 0.818883711,13.3584909 C0.360348544,13.3452261 -0.00323997783,12.9675439 -4.26249227e-05,12.5127 L-4.26249227e-05,1.596 C-4.26249227e-05,1.37150513 0.0885958605,1.15563205 0.245990067,0.998254348 C0.406158274,0.836444012 0.624960225,0.746790846 0.851989257,0.749845387 C3.28422674,0.782346876 5.18367104,1.14388727 6.61339144,1.73211224 C7.23111057,1.9862583 7.68649941,2.24706351 8.00000093,2.47906767 Z M6.60965793,13.3406189 C6.95625564,13.4828858 7.25183502,13.6272417 7.50000007,13.7674648 L7.50000007,3.36250758 C7.46032226,3.33100814 7.41177288,3.29437799 7.35387186,3.25332386 C7.07182217,3.05333937 6.70149926,2.84969087 6.23290902,2.65690039 C4.95504469,2.13115305 3.23221396,1.79660208 0.999987658,1.75258213 L0.999987658,12.3613889 C3.35938211,12.4076145 5.20954496,12.7659187 6.60965793,13.3406189 Z M6.15929255,6.97937951 C6.42104818,7.06734883 6.56192982,7.35085692 6.47396049,7.61261255 C6.38599117,7.87436818 6.10248308,8.01524982 5.84072745,7.92728049 C4.74492898,7.55901085 3.60841747,7.33096424 2.45770807,7.24872804 C2.18226818,7.22904354 1.97493747,6.98979796 1.99462196,6.71435807 C2.01430646,6.43891818 2.25355204,6.23158747 2.52899193,6.25127196 C3.76397179,6.33953062 4.98356658,6.58424829 6.15929255,6.97937951 Z M6.15929255,9.77604951 C6.42104818,9.86401883 6.56192982,10.1475269 6.47396049,10.4092826 C6.38599117,10.6710382 6.10248308,10.8119198 5.84072745,10.7239505 C4.74492898,10.3556809 3.60841747,10.1276342 2.45770807,10.045398 C2.18226818,10.0257135 1.97493747,9.78646796 1.99462196,9.51102807 C2.01430646,9.23558818 2.25355204,9.02825747 2.52899193,9.04794196 C3.76397179,9.13620062 4.98356658,9.38091829 6.15929255,9.77604951 Z M10.1592775,7.92728219 C9.89752094,8.01524873 9.61401435,7.87436407 9.52604781,7.61260751 C9.43808127,7.35085094 9.57896593,7.06734435 9.84072249,6.97937781 C11.0164939,6.58424527 12.2360872,6.33952998 13.4710581,6.25127196 C13.746498,6.23158747 13.9857435,6.43891818 14.005428,6.71435807 C14.0251125,6.98979796 13.8177818,7.22904354 13.5423419,7.24872804 C12.3916392,7.33096377 11.2551256,7.55900884 10.1592775,7.92728219 Z M10.1592775,10.7239522 C9.89752094,10.8119187 9.61401435,10.6710341 9.52604781,10.4092775 C9.43808127,10.1475209 9.57896593,9.86401435 9.84072249,9.77604781 C11.0164939,9.38091527 12.2360872,9.13619998 13.4710581,9.04794196 C13.746498,9.02825747 13.9857435,9.23558818 14.005428,9.51102807 C14.0251125,9.78646796 13.8177818,10.0257135 13.5423419,10.045398 C12.3916392,10.1276338 11.2551256,10.3556788 10.1592775,10.7239522 Z M9.39035247,13.3406185 C10.7918946,12.7653351 12.6444034,12.4068871 15,12.3614027 L15,1.7525805 C12.7680023,1.79656542 11.045042,2.13112437 9.76709946,2.65690078 C9.29850615,2.84969139 8.92818079,3.05334003 8.64612919,3.25332467 C8.58822779,3.29437883 8.53967808,3.33100901 8.5,3.36250848 L8.5,13.7674674 C8.74816751,13.6272433 9.04375031,13.4828864 9.39035247,13.3406185 Z"></path></svg>
                                    {' '}
                                    <Link to="/courses/bubblegum">Bubblegum</Link> </li>
                                <li>
                                    <svg width="16px" height="16px" viewBox="0 0 16 16" ><path fill-rule="nonzero" d="M8.00000093,2.47906767 C8.31350415,2.24706345 8.76889577,1.98625808 9.38661896,1.73211184 C10.8163472,1.14388713 12.7158019,0.782346867 15.1476119,0.749845387 C15.3750264,0.746790466 15.5937834,0.836425225 15.7523346,0.996527814 C15.911452,1.15571834 16.0000207,1.3715549 16.0000207,1.596 L16.0000207,12.5092167 C16.003181,12.9675522 15.639635,13.3452231 15.173446,13.3586545 C12.858949,13.3898845 11.0807782,13.7277217 9.77007364,14.2657195 C9.30028719,14.4585502 8.92907902,14.6622407 8.64641073,14.8622639 C8.51259131,14.9569578 8.42863591,15.0281139 8.38862643,15.0670627 C8.36293898,15.0981746 8.33364517,15.1257856 8.3016515,15.1495473 C8.21017883,15.2201022 8.10426457,15.2518549 8,15.2510058 C7.89573496,15.2518549 7.78982022,15.2201019 7.69834732,15.1495463 C7.66635377,15.1257846 7.63706007,15.0981736 7.61137274,15.0670616 C7.57136357,15.0281129 7.48740879,14.9569569 7.35359033,14.862263 C7.07092394,14.6622401 6.69971824,14.4585496 6.22993485,14.2657191 C4.9192386,13.7277215 3.14107889,13.3898845 0.818883711,13.3584909 C0.360348544,13.3452261 -0.00323997783,12.9675439 -4.26249227e-05,12.5127 L-4.26249227e-05,1.596 C-4.26249227e-05,1.37150513 0.0885958605,1.15563205 0.245990067,0.998254348 C0.406158274,0.836444012 0.624960225,0.746790846 0.851989257,0.749845387 C3.28422674,0.782346876 5.18367104,1.14388727 6.61339144,1.73211224 C7.23111057,1.9862583 7.68649941,2.24706351 8.00000093,2.47906767 Z M6.60965793,13.3406189 C6.95625564,13.4828858 7.25183502,13.6272417 7.50000007,13.7674648 L7.50000007,3.36250758 C7.46032226,3.33100814 7.41177288,3.29437799 7.35387186,3.25332386 C7.07182217,3.05333937 6.70149926,2.84969087 6.23290902,2.65690039 C4.95504469,2.13115305 3.23221396,1.79660208 0.999987658,1.75258213 L0.999987658,12.3613889 C3.35938211,12.4076145 5.20954496,12.7659187 6.60965793,13.3406189 Z M6.15929255,6.97937951 C6.42104818,7.06734883 6.56192982,7.35085692 6.47396049,7.61261255 C6.38599117,7.87436818 6.10248308,8.01524982 5.84072745,7.92728049 C4.74492898,7.55901085 3.60841747,7.33096424 2.45770807,7.24872804 C2.18226818,7.22904354 1.97493747,6.98979796 1.99462196,6.71435807 C2.01430646,6.43891818 2.25355204,6.23158747 2.52899193,6.25127196 C3.76397179,6.33953062 4.98356658,6.58424829 6.15929255,6.97937951 Z M6.15929255,9.77604951 C6.42104818,9.86401883 6.56192982,10.1475269 6.47396049,10.4092826 C6.38599117,10.6710382 6.10248308,10.8119198 5.84072745,10.7239505 C4.74492898,10.3556809 3.60841747,10.1276342 2.45770807,10.045398 C2.18226818,10.0257135 1.97493747,9.78646796 1.99462196,9.51102807 C2.01430646,9.23558818 2.25355204,9.02825747 2.52899193,9.04794196 C3.76397179,9.13620062 4.98356658,9.38091829 6.15929255,9.77604951 Z M10.1592775,7.92728219 C9.89752094,8.01524873 9.61401435,7.87436407 9.52604781,7.61260751 C9.43808127,7.35085094 9.57896593,7.06734435 9.84072249,6.97937781 C11.0164939,6.58424527 12.2360872,6.33952998 13.4710581,6.25127196 C13.746498,6.23158747 13.9857435,6.43891818 14.005428,6.71435807 C14.0251125,6.98979796 13.8177818,7.22904354 13.5423419,7.24872804 C12.3916392,7.33096377 11.2551256,7.55900884 10.1592775,7.92728219 Z M10.1592775,10.7239522 C9.89752094,10.8119187 9.61401435,10.6710341 9.52604781,10.4092775 C9.43808127,10.1475209 9.57896593,9.86401435 9.84072249,9.77604781 C11.0164939,9.38091527 12.2360872,9.13619998 13.4710581,9.04794196 C13.746498,9.02825747 13.9857435,9.23558818 14.005428,9.51102807 C14.0251125,9.78646796 13.8177818,10.0257135 13.5423419,10.045398 C12.3916392,10.1276338 11.2551256,10.3556788 10.1592775,10.7239522 Z M9.39035247,13.3406185 C10.7918946,12.7653351 12.6444034,12.4068871 15,12.3614027 L15,1.7525805 C12.7680023,1.79656542 11.045042,2.13112437 9.76709946,2.65690078 C9.29850615,2.84969139 8.92818079,3.05334003 8.64612919,3.25332467 C8.58822779,3.29437883 8.53967808,3.33100901 8.5,3.36250848 L8.5,13.7674674 C8.74816751,13.6272433 9.04375031,13.4828864 9.39035247,13.3406185 Z"></path></svg>
                                    {' '}
                                    <Link to="/courses/shoelaces">Shoelaces</Link> </li>
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




