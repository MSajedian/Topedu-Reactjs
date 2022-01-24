import React from 'react';
import { Button, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import UseAuth from '../auth/UseAuth';
import OffCanvasCodePlayground from '../OffCanvasCodePlayground';
import OffCanvasCourseParticipants from './OffCanvasCourseParticipants';
import { AiOutlineAppstore } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

export default function CoursesNavbar({ userType }) {
    const auth = UseAuth();
    const history = useHistory();
    const userName = useSelector((state) => state.user.userName)
    return (
        <Navbar expand="lg" className="navbar-default">
            <div><Link to="/institution" className="button rounded mx-3 px-2 py-1">
                <AiOutlineAppstore size="1.3em" />
            </Link></div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav.Item className="d-flex ms-lg-auto mx-lg-1 mx-3 my-1">
                </Nav.Item>
                {userType === "admin" || userType === "instructor" ?
                    <Nav.Item className="mx-lg-1 mx-3 my-1 d-flex justify-content-center">
                        <OffCanvasCourseParticipants placement="top" />
                    </Nav.Item>
                    : <></>}
                <Nav.Item className="d-flex mx-lg-1 mx-3 my-1 justify-content-center">
                    <OffCanvasCodePlayground placement="top" />
                </Nav.Item>
                <Dropdown className="mx-3 mx-lg-1 d-flex justify-content-center">
                    <Dropdown.Toggle variant="success" type="button" id="dropdown-custom-components" className="btn-grad-orange me-3">
                        {userName}
                    </Dropdown.Toggle>
                    <Dropdown.Menu align={{ lg: 'end' }}>
                        <Button className="dropdown-item" onClick={() => { auth.signout(() => history.push("/login")) }} >
                            <FiLogOut/>
                            &nbsp;
                            Sign Out
                        </Button>
                    </Dropdown.Menu>
                </Dropdown>


            </Navbar.Collapse>
        </Navbar >
    );
}
