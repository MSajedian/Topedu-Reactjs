import { Container, Nav, Navbar } from 'react-bootstrap';
// import { FcConferenceCall } from 'react-icons/fc';
import { Link } from "react-router-dom";

export default function MainNavbar() {
    return (
        <Navbar expand="lg" className="navbar-default py-1">
            <Container fluid className="px-3">
            <Navbar.Brand className="">
                    <Link to="/" className="text-decoration-none logo">
                        <svg width="50px" height="50px" viewBox="0 0 247.000000 300.000000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" >
                                <path d="M300 2899 c-32 -13 -78 -56 -96 -91 -12 -22 -14 -143 -14 -721 l0 -693 29 -45 c49 -78 56 -79 395 -79 l296 0 0 -190 0 -190 -69 0 c-39 0 -73 -5 -76 -11 -4 -6 -9 -46 -12 -90 l-6 -79 467 0 467 0 -2 77 c-1 43 -6 84 -11 91 -7 8 -38 12 -89 12 l-79 0 0 190 0 190 296 0 c339 0 346 1 395 79 l29 45 0 693 c0 578 -2 699 -14 721 -19 36 -65 78 -99 91 -38 15 -1771 14 -1807 0z m1809 -73 c56 -30 56 -22 59 -633 l3 -563 -85 0 -84 0 -12 53 c-6 28 -27 119 -47 201 -32 133 -39 153 -72 189 -56 63 -75 67 -290 67 l-190 0 -126 55 c-127 55 -161 63 -194 45 -16 -8 -27 1 -67 53 -89 113 -115 139 -130 126 -25 -21 -15 -43 62 -138 60 -72 79 -103 86 -139 4 -25 15 -53 24 -63 18 -20 225 -110 309 -134 l55 -16 0 -150 0 -149 -585 0 -586 0 3 563 c3 519 4 565 21 595 10 18 28 37 40 42 12 5 416 9 900 9 741 1 882 -1 906 -13z m-837 -705 l97 -41 178 0 c197 0 237 -7 274 -47 33 -36 41 -59 79 -228 17 -77 34 -148 37 -158 4 -15 0 -18 -23 -15 -25 3 -28 8 -48 92 -22 95 -41 120 -73 100 -15 -9 -19 -28 -21 -103 l-3 -91 -149 0 -150 0 0 179 c0 177 0 179 -22 185 -13 3 -31 6 -42 6 -21 0 -294 106 -313 122 -18 15 -16 45 4 57 12 6 27 5 48 -3 16 -7 74 -32 127 -55z m895 -631 c-7 -91 -15 -109 -54 -136 -27 -18 -63 -19 -889 -22 -676 -2 -869 0 -899 10 -57 19 -74 50 -82 146 l-6 82 968 0 968 0 -6 -80z m-727 -410 l0 -190 -235 0 -235 0 0 190 0 190 235 0 235 0 0 -190z" />
                                <path d="M889 2624 c-9 -11 -10 -20 -2 -32 9 -15 35 -17 194 -20 162 -2 185 0 196 14 9 12 9 22 2 35 -9 18 -24 19 -193 19 -155 0 -186 -2 -197 -16z" />
                                <path d="M1566 2547 c-54 -30 -86 -93 -86 -168 0 -69 12 -104 48 -142 91 -96 225 -69 277 55 40 97 0 219 -87 264 -40 21 -107 17 -152 -9z m124 -52 c49 -25 70 -62 70 -120 0 -149 -178 -178 -221 -36 -17 57 10 125 61 152 42 23 53 23 90 4z" />
                                <path d="M396 2374 c-12 -12 -13 -20 -6 -35 10 -18 21 -19 213 -17 l202 3 3 24 c2 13 -2 28 -10 32 -7 5 -97 9 -200 9 -156 0 -189 -3 -202 -16z" />
                                <path d="M530 2105 c-6 -8 -10 -22 -8 -32 3 -16 17 -18 147 -18 123 0 145 2 154 17 8 12 7 21 -2 32 -19 22 -272 24 -291 1z" />
                                <path d="M609 1854 c-9 -11 -10 -20 -2 -32 9 -15 35 -17 213 -17 178 0 204 2 213 17 8 12 7 21 -2 32 -20 24 -402 24 -422 0z" />
                                <path d="M550 570 l0 -60 665 0 665 0 0 60 0 60 -665 0 -665 0 0 -60z" />
                                <path d="M330 355 l0 -55 900 0 900 0 0 55 0 55 -900 0 -900 0 0 -55z" />
                                <path d="M90 140 l0 -60 1145 0 1145 0 0 60 0 60 -1145 0 -1145 0 0 -60z" />
                            </g>
                        </svg>
                        {/* <FcConferenceCall style={{ fontSize: 40 }} className="bg-light bg-gradient rounded"/>  */}
                        <span className="align-self-center">TopEdu</span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        navbarScroll
                        className="ms-auto px-2"
                    >
                        <Link to="/login" className="btn-grad-green">Login</Link>
                    </Nav>
                    <Nav>
                        <Link to="/signup" className="btn-grad-orange" >Sign up</Link>
                    </Nav>
                    {/* <Form
                        className="d-flex my-2 my-lg-0"
                    >
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}