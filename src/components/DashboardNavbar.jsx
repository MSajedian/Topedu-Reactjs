import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
// import { NavItem, NavLink, Link } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
// import { Form, FormControl, Button } from 'react-bootstrap';
// import { FcAbout } from 'react-icons/fc';
// import { Container, Row, Col } from 'react-bootstrap';


class DashboardNavbar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" className="mx-3">
                <Navbar.Brand href="/home" style={{ border: "gray solid 1px", padding: "1px 8px 5px 8px" }} className="rounded">
                    <svg fill="blue" width="16px" height="16px" viewBox="0 0 16 16" class=" Icons__icon-size___3XuUV"><path class="fill accent-color" d="M10,9 L14,9 C14.5522847,9 15,9.44771525 15,10 L15,14 C15,14.5522847 14.5522847,15 14,15 L10,15 C9.44771525,15 9,14.5522847 9,14 L9,10 C9,9.44771525 9.44771525,9 10,9 Z M10,10 L10,14 L14,14 L14,10 L10,10 Z M2,9 L6,9 C6.55228475,9 7,9.44771525 7,10 L7,14 C7,14.5522847 6.55228475,15 6,15 L2,15 C1.44771525,15 1,14.5522847 1,14 L1,10 C1,9.44771525 1.44771525,9 2,9 Z M2,10 L2,14 L6,14 L6,10 L2,10 Z M10,1 L14,1 C14.5522847,1 15,1.44771525 15,2 L15,6 C15,6.55228475 14.5522847,7 14,7 L10,7 C9.44771525,7 9,6.55228475 9,6 L9,2 C9,1.44771525 9.44771525,1 10,1 Z M10,2 L10,6 L14,6 L14,2 L10,2 Z M2,1 L6,1 C6.55228475,1 7,1.44771525 7,2 L7,6 C7,6.55228475 6.55228475,7 6,7 L2,7 C1.44771525,7 1,6.55228475 1,6 L1,2 C1,1.44771525 1.44771525,1 2,1 Z M2,2 L2,6 L6,6 L6,2 L2,2 Z"></path></svg>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Nav.Link href="#" className="text-dark alert-dismissible fade show">Institution Name · Dashboard</Nav.Link>
                    {/* <Form className="d-flex ml-auto my-2 my-lg-0" >
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}

                    <Nav.Link href="#" className="d-flex ml-auto notifly-target">
                        <svg width="16px" height="16px" viewBox="0 0 16 16"><path d="M14.2939 10.3418C13.7629 9.81731 13.2143 9.27488 13.2143 6.71425C13.2143 4.11969 11.3094 1.96194 8.82469 1.56544C8.93914 1.39911 9.00028 1.2019 9.00001 1C9.00001 0.447719 8.55229 0 8.00001 0C7.44773 0 7.00001 0.447719 7.00001 1C6.99972 1.20191 7.06086 1.39912 7.17529 1.56547C4.69066 1.96197 2.78573 4.11972 2.78573 6.71428C2.78573 9.27469 2.23726 9.81716 1.70626 10.3417C0.203257 11.8263 1.30394 14 3.09123 14H6.00001C6.00001 15.1046 6.89544 16 8.00001 16C9.10457 16 10 15.1046 10 14H12.9088C14.6959 14 15.7967 11.8255 14.2939 10.3418V10.3418ZM8.00001 14.75C7.58644 14.75 7.25001 14.4136 7.25001 14H8.75001C8.75001 14.4136 8.41357 14.75 8.00001 14.75ZM12.9091 12.5H3.09063C2.56682 12.5 2.30516 11.8628 2.67394 11.494C3.56723 10.6007 4.28573 9.75266 4.28573 6.71428C4.28573 4.66622 5.95194 3 8.00001 3C10.0481 3 11.7143 4.66622 11.7143 6.71428C11.7143 9.76584 12.4399 10.6072 13.3258 11.494C13.6962 11.8644 13.4307 12.5 12.9091 12.5Z"></path></svg>
                    </Nav.Link>

                    <NavDropdown title="User Name" id="basic-nav-dropdown" className="dropleft">
                        <NavDropdown.Item href="/dashboard/notifications">
                            <svg width="16px" height="16px" viewBox="0 0 16 16"><path d="M14.2939 10.3418C13.7629 9.81731 13.2143 9.27488 13.2143 6.71425C13.2143 4.11969 11.3094 1.96194 8.82469 1.56544C8.93914 1.39911 9.00028 1.2019 9.00001 1C9.00001 0.447719 8.55229 0 8.00001 0C7.44773 0 7.00001 0.447719 7.00001 1C6.99972 1.20191 7.06086 1.39912 7.17529 1.56547C4.69066 1.96197 2.78573 4.11972 2.78573 6.71428C2.78573 9.27469 2.23726 9.81716 1.70626 10.3417C0.203257 11.8263 1.30394 14 3.09123 14H6.00001C6.00001 15.1046 6.89544 16 8.00001 16C9.10457 16 10 15.1046 10 14H12.9088C14.6959 14 15.7967 11.8255 14.2939 10.3418V10.3418ZM8.00001 14.75C7.58644 14.75 7.25001 14.4136 7.25001 14H8.75001C8.75001 14.4136 8.41357 14.75 8.00001 14.75ZM12.9091 12.5H3.09063C2.56682 12.5 2.30516 11.8628 2.67394 11.494C3.56723 10.6007 4.28573 9.75266 4.28573 6.71428C4.28573 4.66622 5.95194 3 8.00001 3C10.0481 3 11.7143 4.66622 11.7143 6.71428C11.7143 9.76584 12.4399 10.6072 13.3258 11.494C13.6962 11.8644 13.4307 12.5 12.9091 12.5Z"></path></svg>
                            &nbsp;Notifications
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/dashboard/user-settings">
                            <svg width="16px" height="16px" viewBox="0 0 16 16"><path d="M13.8333,14 C13.8333,14.2761424 13.6094424,14.5 13.3333,14.5 C13.0571576,14.5 12.8333,14.2761424 12.8333,14 L12.8333,12.6667 C12.8333,12.0919718 12.6050526,11.5408594 12.198782,11.1345887 C11.7924073,10.7282953 11.2412525,10.5 10.6667,10.5 L5.33333,10.5 C4.75874748,10.5 4.2076098,10.7282882 3.80126693,11.1345499 C3.39493706,11.5408878 3.16666,12.0920148 3.16666,12.6667 L3.16666,14 C3.16666,14.2761424 2.94280237,14.5 2.66666,14.5 C2.39051763,14.5 2.16666,14.2761424 2.16666,14 L2.16666,12.6667 C2.16666,11.826804 2.50028959,11.0213255 3.09419196,10.4274113 C3.68809182,9.83363016 4.49354791,9.5 5.33333,9.5 L10.6667,9.5 C11.5064521,9.5 12.3119253,9.83363723 12.9058534,10.4274466 C13.499708,11.0213012 13.8333,11.8267725 13.8333,12.6667 L13.8333,14 Z M8,7.83333 C6.25109763,7.83333 4.83334,6.41557237 4.83334,4.66667 C4.83334,2.9177663 6.25109895,1.5 8,1.5 C9.74890636,1.5 11.1667,2.91777161 11.1667,4.66667 C11.1667,6.41556706 9.74890769,7.83333 8,7.83333 Z M8,6.83333 C9.19662757,6.83333 10.1667,5.86327768 10.1667,4.66667 C10.1667,3.47005984 9.19662509,2.5 8,2.5 C6.80338486,2.5 5.83334,3.47004989 5.83334,4.66667 C5.83334,5.86328763 6.80338237,6.83333 8,6.83333 Z"></path></svg>
                            &nbsp;User settings
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/dashboard/feedback-roadmap">
                            <svg width="16" height="16" viewBox="0 0 16 16"><path d="M5.60786919,5.04988294 L7.55164619,1.11199833 C7.73506377,0.740413891 8.26493623,0.740413891 8.44835381,1.11199833 L10.3921306,5.04988258 L14.7390132,5.68523684 C15.1489733,5.74515791 15.3123644,6.24908332 15.015563,6.53816236 L11.8705632,9.60133409 L12.6128037,13.9287746 C12.6828666,14.3372583 12.254088,14.6487433 11.8872716,14.4558353 L8,12.4115267 L4.11272844,14.4558353 C3.74591332,14.6487426 3.31713571,14.3372604 3.3871958,13.9287777 L4.12940886,9.60133221 L0.984473238,6.5381587 C0.687676851,6.24907843 0.851068892,5.74515811 1.26102614,5.68523693 L5.60786919,5.04988294 Z M8,2.46293862 L6.38835381,5.72796167 C6.31558395,5.87538565 6.17499116,5.97761543 6.01231386,6.00139307 L2.40754501,6.52828218 L5.01553676,9.0684713 C5.13347355,9.18334196 5.18730469,9.34890766 5.1594742,9.51117232 L4.54409325,13.0991279 L7.76727156,11.4040647 C7.91296449,11.3274451 8.08703551,11.3274451 8.23272844,11.4040647 L11.4558996,13.0991279 L10.8404963,9.51117545 C10.8126643,9.34890803 10.8664969,9.18333914 10.984437,9.06846764 L13.5924806,6.52828135 L9.98768676,6.00139316 C9.82500921,5.97761569 9.68441615,5.87538585 9.61164619,5.72796167 L8,2.46293862 Z"></path></svg>
                            &nbsp;Feedback & roadmap
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/dashboard/help-center">
                            <svg width="16" height="16" viewBox="0 0 16 16"><path d="M4.00730362,12.6997758 C5.08314197,13.6146601 6.4771052,14.1667 8,14.1667 C9.52288658,14.1667 10.9168469,13.6146669 11.9926881,12.6997936 L9.85771751,10.5648095 C9.3358902,10.9434364 8.69401536,11.1667 8,11.1667 C7.30598193,11.1667 6.66410848,10.9434342 6.14228495,10.5648095 L4.00730362,12.6997758 Z M3.3002022,11.9926636 L5.4352075,9.85769466 C5.05658213,9.33587471 4.83333,8.69401261 4.83333,8.00001 C4.83333,7.30599501 5.05659036,6.66412486 5.4352075,6.14230313 L3.30023463,4.00732271 C2.38536122,5.08315873 1.83333,6.4771175 1.83333,8.00001 C1.83333,9.52288209 2.3853487,10.9168286 3.3002022,11.9926636 L3.3002022,11.9926636 Z M10.5648127,6.14230411 C10.9434353,6.66412615 11.1667,7.30599626 11.1667,8.00001 C11.1667,8.69401767 10.9434395,9.3358851 10.5648127,9.85770793 L12.6997951,11.9926871 C13.6146677,10.916848 14.1667,9.52289152 14.1667,8.00001 C14.1667,6.47710807 13.6146551,5.08313938 12.6997627,4.00729928 L12.5979156,4.10914783 L12.5935534,4.11356339 L10.5648127,6.14230411 L10.5648127,6.14230411 Z M11.992648,3.30020039 C10.9168133,2.38535385 9.52286964,1.83334 8,1.83334 C6.47712214,1.83334 5.08317552,2.38536061 4.00734374,3.30021825 L6.14231764,5.43519971 C6.66413496,5.05659337 7.30599588,4.83334 8,4.83334 C8.69400141,4.83334 9.33586372,5.05659123 9.85768481,5.43519971 L11.992648,3.30020039 Z M8,15.1667 C4.04196431,15.1667 0.83333,11.9580491 0.83333,8.00001 C0.83333,4.04196763 4.04195763,0.83334 8,0.83334 C11.9580474,0.83334 15.1667,4.04197265 15.1667,8.00001 C15.1667,11.958044 11.9580407,15.1667 8,15.1667 Z M8,10.1667 C9.19662011,10.1667 10.1667,9.19662514 10.1667,8.00001 C10.1667,6.80339984 9.19662509,5.83334 8,5.83334 C6.80338237,5.83334 5.83333,6.80339237 5.83333,8.00001 C5.83333,9.1966326 6.80338735,10.1667 8,10.1667 Z"></path></svg>
                            &nbsp;Help center
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/dashboard/support-chat">
                            <svg width="16px" height="16px" viewBox="0 0 16 16"><path d="M2.16667004,7.66649992 C2.16710533,6.52150113 2.48632243,5.3992339 3.08855898,4.42540413 C3.69079721,3.45157834 4.55226423,2.66465325 5.57457442,2.15372043 C6.4302775,1.72150545 7.37597063,1.49751755 8.33333,1.49994062 L8.69421982,1.50076048 C10.2066614,1.58422226 11.6352296,2.22261546 12.7063642,3.29371739 C13.7773821,4.3648006 14.4157547,5.79333466 14.5000778,7.33335 L14.5000778,7.66669 C14.5025024,8.62403705 14.2785101,9.56973153 13.8472516,10.4235308 C13.3353416,11.4477861 12.5484299,12.3092326 11.5745973,12.9114439 C10.6009115,13.5136318 9.47863982,13.8328558 8.33458012,13.8333984 C7.44657651,13.8356187 6.56980538,13.6436659 5.76543534,13.2719645 L2.1581065,14.474345 C1.7672287,14.6046309 1.39536626,14.2327624 1.52565846,13.8418867 L2.72810036,10.2345696 C2.35632578,9.43011861 2.16435063,8.55339337 2.16667004,7.66649992 Z M5.6418935,12.2590559 C5.76836246,12.2169018 5.90642868,12.2269967 6.02542105,12.2870981 C6.74043146,12.6482403 7.53076187,12.8354051 8.3330924,12.8334001 C9.29252773,12.8329441 10.2328309,12.5654801 11.0486239,12.0609429 C11.8645506,11.5563795 12.5238481,10.8346345 12.9537005,9.97457438 C13.3149043,9.25946001 13.5020975,8.46913106 13.5000208,7.6679861 L13.5007794,7.36091355 C13.4308444,6.09422805 12.8962057,4.89782715 11.999252,4.00081878 C11.1021977,3.10379183 9.90577711,2.56913987 8.66667,2.49994878 L8.3320339,2.49994878 C7.5308752,2.49792246 6.74054771,2.68511192 6.02353076,3.04727161 C5.16541125,3.47614901 4.44364013,4.13546595 3.93906183,4.95137456 C3.43448627,5.76728436 3.16703467,6.70756034 3.16666829,7.66799695 C3.16457414,8.46915749 3.351756,9.25947681 3.71296498,9.97456532 C3.77307371,10.0935631 3.78317029,10.2316383 3.74101154,10.3581142 L2.79056411,13.2094497 L5.6418935,12.2590559 Z"></path></svg>
                            &nbsp;Support chat
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/dashboard/log-out">
                            <svg width="16px" height="16px" viewBox="0 0 16 16"><path d="M12.7928858,8.5 L6,8.5 C5.72385763,8.5 5.5,8.27614237 5.5,8 C5.5,7.72385763 5.72385763,7.5 6,7.5 L12.7929109,7.5 L10.313145,5.0202118 C10.1178838,4.82494878 10.1178852,4.50836629 10.3131482,4.31310502 C10.5084112,4.11784375 10.8249937,4.11784518 11.020255,4.3131082 L14.353555,7.6464382 C14.5488154,7.8417004 14.5488149,8.15828125 14.3535539,8.35354286 L11.0202539,11.6868529 C10.8249921,11.8821153 10.5084096,11.8821158 10.3131471,11.6868539 C10.1178847,11.4915921 10.1178842,11.1750096 10.3131461,10.9797471 L12.7928858,8.5 L12.7928858,8.5 Z M6,13.5 C6.27614237,13.5 6.5,13.7238576 6.5,14 C6.5,14.2761424 6.27614237,14.5 6,14.5 L3.33333,14.5 C2.84713906,14.5 2.38083141,14.3068494 2.0369242,13.963011 C1.69313845,13.6191427 1.5,13.1528825 1.5,12.6667 L1.5,3.33333 C1.5,2.84710825 1.69315353,2.38079344 2.03697368,2.03695954 C2.38079344,1.69315353 2.84710825,1.5 3.33333,1.5 L6,1.5 C6.27614237,1.5 6.5,1.72385763 6.5,2 C6.5,2.27614237 6.27614237,2.5 6,2.5 L3.33333,2.5 C3.11232115,2.5 2.90035321,2.58779982 2.74408046,2.74406632 C2.58779982,2.90035321 2.5,3.11232115 2.5,3.33333 L2.5,12.6667 C2.5,12.8876813 2.58779596,13.0996317 2.74403804,13.2559113 C2.9003494,13.4121914 3.11233863,13.5 3.33333,13.5 L6,13.5 Z"></path></svg>
                            &nbsp;Log out
                        </NavDropdown.Item>
                    </NavDropdown>

                    {/* <Nav.Link href="#" type="button" className="btn btn-primary text-white">
                        User Name
                    </Nav.Link>


                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to={"/dashboard/notifications"}>
                                <svg width="16px" height="16px" viewBox="0 0 16 16"><path d="M14.2939 10.3418C13.7629 9.81731 13.2143 9.27488 13.2143 6.71425C13.2143 4.11969 11.3094 1.96194 8.82469 1.56544C8.93914 1.39911 9.00028 1.2019 9.00001 1C9.00001 0.447719 8.55229 0 8.00001 0C7.44773 0 7.00001 0.447719 7.00001 1C6.99972 1.20191 7.06086 1.39912 7.17529 1.56547C4.69066 1.96197 2.78573 4.11972 2.78573 6.71428C2.78573 9.27469 2.23726 9.81716 1.70626 10.3417C0.203257 11.8263 1.30394 14 3.09123 14H6.00001C6.00001 15.1046 6.89544 16 8.00001 16C9.10457 16 10 15.1046 10 14H12.9088C14.6959 14 15.7967 11.8255 14.2939 10.3418V10.3418ZM8.00001 14.75C7.58644 14.75 7.25001 14.4136 7.25001 14H8.75001C8.75001 14.4136 8.41357 14.75 8.00001 14.75ZM12.9091 12.5H3.09063C2.56682 12.5 2.30516 11.8628 2.67394 11.494C3.56723 10.6007 4.28573 9.75266 4.28573 6.71428C4.28573 4.66622 5.95194 3 8.00001 3C10.0481 3 11.7143 4.66622 11.7143 6.71428C11.7143 9.76584 12.4399 10.6072 13.3258 11.494C13.6962 11.8644 13.4307 12.5 12.9091 12.5Z"></path></svg>
                                &nbsp;Notifications
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/dashboard/user-settings"}>
                                <svg width="16px" height="16px" viewBox="0 0 16 16"><path d="M13.8333,14 C13.8333,14.2761424 13.6094424,14.5 13.3333,14.5 C13.0571576,14.5 12.8333,14.2761424 12.8333,14 L12.8333,12.6667 C12.8333,12.0919718 12.6050526,11.5408594 12.198782,11.1345887 C11.7924073,10.7282953 11.2412525,10.5 10.6667,10.5 L5.33333,10.5 C4.75874748,10.5 4.2076098,10.7282882 3.80126693,11.1345499 C3.39493706,11.5408878 3.16666,12.0920148 3.16666,12.6667 L3.16666,14 C3.16666,14.2761424 2.94280237,14.5 2.66666,14.5 C2.39051763,14.5 2.16666,14.2761424 2.16666,14 L2.16666,12.6667 C2.16666,11.826804 2.50028959,11.0213255 3.09419196,10.4274113 C3.68809182,9.83363016 4.49354791,9.5 5.33333,9.5 L10.6667,9.5 C11.5064521,9.5 12.3119253,9.83363723 12.9058534,10.4274466 C13.499708,11.0213012 13.8333,11.8267725 13.8333,12.6667 L13.8333,14 Z M8,7.83333 C6.25109763,7.83333 4.83334,6.41557237 4.83334,4.66667 C4.83334,2.9177663 6.25109895,1.5 8,1.5 C9.74890636,1.5 11.1667,2.91777161 11.1667,4.66667 C11.1667,6.41556706 9.74890769,7.83333 8,7.83333 Z M8,6.83333 C9.19662757,6.83333 10.1667,5.86327768 10.1667,4.66667 C10.1667,3.47005984 9.19662509,2.5 8,2.5 C6.80338486,2.5 5.83334,3.47004989 5.83334,4.66667 C5.83334,5.86328763 6.80338237,6.83333 8,6.83333 Z"></path></svg>
                                &nbsp;User settings
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/dashboard/feedback-roadmap"}>
                                <svg width="16" height="16" viewBox="0 0 16 16"><path d="M5.60786919,5.04988294 L7.55164619,1.11199833 C7.73506377,0.740413891 8.26493623,0.740413891 8.44835381,1.11199833 L10.3921306,5.04988258 L14.7390132,5.68523684 C15.1489733,5.74515791 15.3123644,6.24908332 15.015563,6.53816236 L11.8705632,9.60133409 L12.6128037,13.9287746 C12.6828666,14.3372583 12.254088,14.6487433 11.8872716,14.4558353 L8,12.4115267 L4.11272844,14.4558353 C3.74591332,14.6487426 3.31713571,14.3372604 3.3871958,13.9287777 L4.12940886,9.60133221 L0.984473238,6.5381587 C0.687676851,6.24907843 0.851068892,5.74515811 1.26102614,5.68523693 L5.60786919,5.04988294 Z M8,2.46293862 L6.38835381,5.72796167 C6.31558395,5.87538565 6.17499116,5.97761543 6.01231386,6.00139307 L2.40754501,6.52828218 L5.01553676,9.0684713 C5.13347355,9.18334196 5.18730469,9.34890766 5.1594742,9.51117232 L4.54409325,13.0991279 L7.76727156,11.4040647 C7.91296449,11.3274451 8.08703551,11.3274451 8.23272844,11.4040647 L11.4558996,13.0991279 L10.8404963,9.51117545 C10.8126643,9.34890803 10.8664969,9.18333914 10.984437,9.06846764 L13.5924806,6.52828135 L9.98768676,6.00139316 C9.82500921,5.97761569 9.68441615,5.87538585 9.61164619,5.72796167 L8,2.46293862 Z"></path></svg>
                                &nbsp;Feedback & roadmap
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/dashboard/help-center"}>
                                <svg width="16" height="16" viewBox="0 0 16 16"><path d="M4.00730362,12.6997758 C5.08314197,13.6146601 6.4771052,14.1667 8,14.1667 C9.52288658,14.1667 10.9168469,13.6146669 11.9926881,12.6997936 L9.85771751,10.5648095 C9.3358902,10.9434364 8.69401536,11.1667 8,11.1667 C7.30598193,11.1667 6.66410848,10.9434342 6.14228495,10.5648095 L4.00730362,12.6997758 Z M3.3002022,11.9926636 L5.4352075,9.85769466 C5.05658213,9.33587471 4.83333,8.69401261 4.83333,8.00001 C4.83333,7.30599501 5.05659036,6.66412486 5.4352075,6.14230313 L3.30023463,4.00732271 C2.38536122,5.08315873 1.83333,6.4771175 1.83333,8.00001 C1.83333,9.52288209 2.3853487,10.9168286 3.3002022,11.9926636 L3.3002022,11.9926636 Z M10.5648127,6.14230411 C10.9434353,6.66412615 11.1667,7.30599626 11.1667,8.00001 C11.1667,8.69401767 10.9434395,9.3358851 10.5648127,9.85770793 L12.6997951,11.9926871 C13.6146677,10.916848 14.1667,9.52289152 14.1667,8.00001 C14.1667,6.47710807 13.6146551,5.08313938 12.6997627,4.00729928 L12.5979156,4.10914783 L12.5935534,4.11356339 L10.5648127,6.14230411 L10.5648127,6.14230411 Z M11.992648,3.30020039 C10.9168133,2.38535385 9.52286964,1.83334 8,1.83334 C6.47712214,1.83334 5.08317552,2.38536061 4.00734374,3.30021825 L6.14231764,5.43519971 C6.66413496,5.05659337 7.30599588,4.83334 8,4.83334 C8.69400141,4.83334 9.33586372,5.05659123 9.85768481,5.43519971 L11.992648,3.30020039 Z M8,15.1667 C4.04196431,15.1667 0.83333,11.9580491 0.83333,8.00001 C0.83333,4.04196763 4.04195763,0.83334 8,0.83334 C11.9580474,0.83334 15.1667,4.04197265 15.1667,8.00001 C15.1667,11.958044 11.9580407,15.1667 8,15.1667 Z M8,10.1667 C9.19662011,10.1667 10.1667,9.19662514 10.1667,8.00001 C10.1667,6.80339984 9.19662509,5.83334 8,5.83334 C6.80338237,5.83334 5.83333,6.80339237 5.83333,8.00001 C5.83333,9.1966326 6.80338735,10.1667 8,10.1667 Z"></path></svg>
                                &nbsp;Help center
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/dashboard/support-chat"}>
                                <svg width="16px" height="16px" viewBox="0 0 16 16"><path d="M2.16667004,7.66649992 C2.16710533,6.52150113 2.48632243,5.3992339 3.08855898,4.42540413 C3.69079721,3.45157834 4.55226423,2.66465325 5.57457442,2.15372043 C6.4302775,1.72150545 7.37597063,1.49751755 8.33333,1.49994062 L8.69421982,1.50076048 C10.2066614,1.58422226 11.6352296,2.22261546 12.7063642,3.29371739 C13.7773821,4.3648006 14.4157547,5.79333466 14.5000778,7.33335 L14.5000778,7.66669 C14.5025024,8.62403705 14.2785101,9.56973153 13.8472516,10.4235308 C13.3353416,11.4477861 12.5484299,12.3092326 11.5745973,12.9114439 C10.6009115,13.5136318 9.47863982,13.8328558 8.33458012,13.8333984 C7.44657651,13.8356187 6.56980538,13.6436659 5.76543534,13.2719645 L2.1581065,14.474345 C1.7672287,14.6046309 1.39536626,14.2327624 1.52565846,13.8418867 L2.72810036,10.2345696 C2.35632578,9.43011861 2.16435063,8.55339337 2.16667004,7.66649992 Z M5.6418935,12.2590559 C5.76836246,12.2169018 5.90642868,12.2269967 6.02542105,12.2870981 C6.74043146,12.6482403 7.53076187,12.8354051 8.3330924,12.8334001 C9.29252773,12.8329441 10.2328309,12.5654801 11.0486239,12.0609429 C11.8645506,11.5563795 12.5238481,10.8346345 12.9537005,9.97457438 C13.3149043,9.25946001 13.5020975,8.46913106 13.5000208,7.6679861 L13.5007794,7.36091355 C13.4308444,6.09422805 12.8962057,4.89782715 11.999252,4.00081878 C11.1021977,3.10379183 9.90577711,2.56913987 8.66667,2.49994878 L8.3320339,2.49994878 C7.5308752,2.49792246 6.74054771,2.68511192 6.02353076,3.04727161 C5.16541125,3.47614901 4.44364013,4.13546595 3.93906183,4.95137456 C3.43448627,5.76728436 3.16703467,6.70756034 3.16666829,7.66799695 C3.16457414,8.46915749 3.351756,9.25947681 3.71296498,9.97456532 C3.77307371,10.0935631 3.78317029,10.2316383 3.74101154,10.3581142 L2.79056411,13.2094497 L5.6418935,12.2590559 Z"></path></svg>
                                &nbsp;Support chat
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/dashboard/log-out"}>
                                <svg width="16px" height="16px" viewBox="0 0 16 16"><path d="M12.7928858,8.5 L6,8.5 C5.72385763,8.5 5.5,8.27614237 5.5,8 C5.5,7.72385763 5.72385763,7.5 6,7.5 L12.7929109,7.5 L10.313145,5.0202118 C10.1178838,4.82494878 10.1178852,4.50836629 10.3131482,4.31310502 C10.5084112,4.11784375 10.8249937,4.11784518 11.020255,4.3131082 L14.353555,7.6464382 C14.5488154,7.8417004 14.5488149,8.15828125 14.3535539,8.35354286 L11.0202539,11.6868529 C10.8249921,11.8821153 10.5084096,11.8821158 10.3131471,11.6868539 C10.1178847,11.4915921 10.1178842,11.1750096 10.3131461,10.9797471 L12.7928858,8.5 L12.7928858,8.5 Z M6,13.5 C6.27614237,13.5 6.5,13.7238576 6.5,14 C6.5,14.2761424 6.27614237,14.5 6,14.5 L3.33333,14.5 C2.84713906,14.5 2.38083141,14.3068494 2.0369242,13.963011 C1.69313845,13.6191427 1.5,13.1528825 1.5,12.6667 L1.5,3.33333 C1.5,2.84710825 1.69315353,2.38079344 2.03697368,2.03695954 C2.38079344,1.69315353 2.84710825,1.5 3.33333,1.5 L6,1.5 C6.27614237,1.5 6.5,1.72385763 6.5,2 C6.5,2.27614237 6.27614237,2.5 6,2.5 L3.33333,2.5 C3.11232115,2.5 2.90035321,2.58779982 2.74408046,2.74406632 C2.58779982,2.90035321 2.5,3.11232115 2.5,3.33333 L2.5,12.6667 C2.5,12.8876813 2.58779596,13.0996317 2.74403804,13.2559113 C2.9003494,13.4121914 3.11233863,13.5 3.33333,13.5 L6,13.5 Z"></path></svg>
                                &nbsp;Log out
                            </NavLink>
                        </NavItem>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default DashboardNavbar;