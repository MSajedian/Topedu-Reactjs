import React, { useDebugValue, useEffect, useState } from "react";
import { Button, Dropdown, Nav, Navbar, Spinner } from 'react-bootstrap';
import { FiLogOut } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import UseAuth from '../auth/UseAuth';
import OffCanvasCodePlayground from '../OffCanvasCodePlayground';
import OffCanvasInstitutionParticipants from './OffCanvasInstitutionParticipants';

// import { ImHome } from 'react-icons/im';
// import { IoAddOutline } from "react-icons/io5";

export default function InstitutionNavbar({ institutions, userType }) {

    const userName = useSelector((state) => state.user.userName)
    let history = useHistory();
    let auth = UseAuth();
    const [selectedInstitution, setSelectedInstitution] = useStateWithLabel({}, "selectedInstitution");

    function useStateWithLabel(initialValue, name) {
        const [value, setValue] = useState(initialValue);
        useDebugValue(`${name}: ${value}`);
        return [value, setValue];
    }

    useEffect(() => {
        setSelectedInstitution(institutions[0])
        // eslint-disable-next-line
    }, [institutions])

    return (
        <Navbar expand="lg" className="px-3 flex-row navbar-default" >
            <IoHome size="1.2em" color="green" />
            {selectedInstitution ?
                <span className="ms-2 text-dark alert-dismissible fade show"> {selectedInstitution.name} </span>
                :
                <span>&nbsp;&nbsp;<Spinner animation="border" variant="primary" /></span>
            }
            {/* <Dropdown className="d-flex align-items-center">
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" >
                    
                    <IoHome size="1.2em"/>
                </Dropdown.Toggle>
                {selectedInstitution ?
                    <span className="ms-2 text-dark alert-dismissible fade show"> {selectedInstitution.name} </span>
                    :
                    <span>&nbsp;&nbsp;<Spinner animation="border" variant="primary" /></span>
                }
                <Dropdown.Menu>
                    {institutions.map((institution, index) => (
                        <div key={`course${index}`} >
                            <p className="px-2 my-0 text-secondary ">Switch Institution</p>
                            <Link to="/institution" className="dropdown-item d-flex align-items-center">
                                <ImHome size="1.2em" />
                                &nbsp;&nbsp;{institution.name}
                            </Link>
                        </div>
                    ))}
                    <Dropdown.Divider />
                    <div><Link to="/institution" className="dropdown-item">
                                <IoAddOutline size="1.2em" />
                    &nbsp;
                        Create new institution
                    </Link></div>
                </Dropdown.Menu>
            </Dropdown> */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav.Item className="d-flex ms-lg-auto mx-1 mx-lg-1 align-items-center">
                </Nav.Item>
                {userType === "admin" || userType === "instructor" ?
                    <Nav.Item className="mx-lg-1 mx-3 my-1 d-flex justify-content-center">
                        <OffCanvasInstitutionParticipants placement="top" institutionid={selectedInstitution._id} />
                    </Nav.Item>
                    : <></>}
                <Nav.Item className="d-flex mx-1 mx-lg-1 d-flex justify-content-center">
                    <OffCanvasCodePlayground placement="top" />
                </Nav.Item>
                <Dropdown className="mx-lg-1 mx-3 my-1 d-flex justify-content-center">
                    <Dropdown.Toggle variant="outline-warning" type="button" id="dropdown-custom-components" className="btn-grad-orange">
                        {userName}
                    </Dropdown.Toggle>
                    <Dropdown.Menu align={{ lg: 'end' }} >
                        <Button className="dropdown-item" onClick={() => { auth.signout(() => history.push("/login")) }} >
                            <FiLogOut />
                            &nbsp;
                            Sign Out
                        </Button>
                    </Dropdown.Menu>
                </Dropdown>

            </Navbar.Collapse>
        </Navbar>
    );
}

