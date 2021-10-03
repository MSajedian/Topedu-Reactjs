import React, { useEffect, useState } from "react";
import { Button, Dropdown, Nav, Navbar, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import UseAuth from '../auth/UseAuth';
import OffCanvasInstitutionParticipants from './OffCanvasInstitutionParticipants';

// ***************************************************
// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <>
        <Link
            to="/"
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            style={{ border: "gray solid 1px", padding: "3px 8px 8px 8px" }} className="rounded"
        >{children}
        </Link>
        {/* 
        <a href="/" ref={ref} onClick={(e) => { e.preventDefault(); onClick(e); }} style={{ border: "gray solid 1px", padding: "3px 8px 8px 8px" }} className="rounded" >
            {children}
        </a> */}
    </>
));
// ***************************************************

function HomeNavbar({ institutions, userType }) {
    const userName = useSelector((state) => state.user.userName)
    let history = useHistory();
    let auth = UseAuth();
    const [selectedInstitution, setSelectedInstitution] = useState({});

    useEffect(() => {
        setSelectedInstitution(institutions[0])
        // eslint-disable-next-line
    }, [institutions])

    return (
        <Navbar bg="light" expand="lg" className="mx-3 flex-row">
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" >
                    <svg fill="blue" width="16px" height="16px" viewBox="0 0 16 16"><path d="M8.00153734,2.69897622 L8.13621208,2.70709225 C8.31426802,2.72819767 8.48503447,2.79003078 8.63481582,2.88748177 L8.74300314,2.96716853 L14.4169403,7.65301691 C14.6291453,7.85008031 14.7688408,8.11101643 14.81696,8.41179926 L14.8333,8.5654 L14.8333,15.0001 C14.8333,15.3094472 14.7104706,15.6060611 14.491512,15.8251947 C14.3039256,16.0126312 14.059207,16.1296498 13.7983082,16.1592585 L13.6667,16.1667 L9.66666,16.1667 C9.42120011,16.1667 9.21705163,15.9898248 9.17471567,15.7565756 L9.16666,15.6667 L9.166,10.833 L6.833,10.833 L6.83332,15.6667 C6.83332,15.8814774 6.69789996,16.0646258 6.5077862,16.1354187 L6.42319563,16.1586443 L6.33332,16.1667 L2.33332,16.1667 C2.02391734,16.1667 1.72718201,16.0438338 1.50826768,15.8249544 C1.32078522,15.637367 1.20372419,15.3926357 1.17410436,15.1317181 L1.16666,15.0001 L1.16745742,8.53517264 C1.18380811,8.24600966 1.29557675,7.97189852 1.49688625,7.74261054 L1.60497552,7.63183964 L7.25773779,2.96454152 C7.43234065,2.82095681 7.64408619,2.73181454 7.8668013,2.7064598 L8.00153734,2.69897622 Z M7.99918266,3.69897674 L7.96107195,3.70327833 L7.92537135,3.71593324 L7.92537135,3.71593324 L7.89366448,3.73629036 L2.26356026,8.38378309 C2.2247612,8.41981368 2.19626618,8.46492974 2.18048801,8.50613937 L2.16666,8.5634 L2.16666,15.0001 C2.16666,15.0442916 2.1842156,15.0866713 2.21544511,15.1179183 C2.23626654,15.1387364 2.26204972,15.1534778 2.29003514,15.1609923 L2.33332,15.1667 L5.833,15.166 L5.83332,10.6667 C5.83332,10.5193554 5.87234479,10.3760224 5.94468054,10.250527 L6.00508889,10.1599659 L6.07745317,10.0773901 C6.20769304,9.94719185 6.37657641,9.86455311 6.55713764,9.84062349 L6.66666,9.8334 L9.33332,9.8334 C9.55430451,9.8334 9.76623898,9.92115221 9.92255511,10.0774183 C10.0528044,10.2076468 10.1354888,10.3765672 10.1594323,10.5571599 L10.16666,10.6667 L10.166,15.166 L13.6667,15.1667 L13.7099671,15.1609985 L13.7099671,15.1609985 L13.7499039,15.1444942 L13.7844053,15.118088 C13.8052984,15.0971781 13.820065,15.071367 13.827588,15.0433776 L13.8333,15.0001 L13.8341001,8.59367513 C13.8307265,8.53411334 13.8101977,8.47732826 13.7848516,8.43796924 L13.7583569,8.40496147 L8.10525997,3.7374164 C8.08538208,3.72091204 8.06208438,3.7093292 8.03728003,3.70344112 L7.99918266,3.69897674 Z M8,0.024292 C8.22260693,0.024292 8.43960404,0.0879541032 8.62598148,0.206457031 L8.7339335,0.284069116 L15.3146035,5.61140112 C15.5292318,5.78515183 15.5623696,6.09999522 15.3886189,6.3146235 C15.2341738,6.5054042 14.9682481,6.55278502 14.7603199,6.43892809 L14.6853965,6.38863888 L8.10482013,1.06138267 C8.07516652,1.03738863 8.03815814,1.024292 8,1.024292 C7.97456124,1.024292 7.94963348,1.03011273 7.92708299,1.0410801 L7.8952735,1.06130688 L1.3146035,6.38863888 C1.09997522,6.5623896 0.785131831,6.52925178 0.611381116,6.3146235 C0.456936035,6.1238428 0.465958436,5.8538798 0.620610447,5.67421266 L0.685396499,5.61140112 L7.26616013,0.283993334 C7.4738215,0.115965429 7.73287169,0.024292 8,0.024292 Z"></path></svg>
                    {/* Custom toggle */}
                </Dropdown.Toggle>
                {selectedInstitution ?
                    <span className="ms-2 text-dark alert-dismissible fade show"> {selectedInstitution.name} </span>
                    :
                    <span>&nbsp;&nbsp;<Spinner animation="border" variant="primary" /></span>
                }

                <Dropdown.Menu>
                    {/* <div><Link to="/dashboard" className="dropdown-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" className=" Icons__icon-size___3XuUV"><path className="fill" d="M2.55556,15.5 C2.01040698,15.5 1.4875625,15.2834329 1.10206873,14.8979655 C0.759404483,14.5553248 0.550212493,14.1041116 0.507955807,13.6251524 L0.5,13.4444 L0.5,2.55556 C0.5,2.01039205 0.716568208,1.48754501 1.10205661,1.10205661 C1.44471297,0.759400253 1.89589961,0.550211703 2.37482185,0.507955684 L2.55556,0.5 L13.4444,0.5 C13.9896118,0.5 14.5124947,0.716571452 14.8979655,1.10206873 C15.2406031,1.44472986 15.4497888,1.89591501 15.4920444,2.37482638 L15.5,2.55556 L15.5,13.4444 C15.5,13.9895969 15.2834296,14.5124772 14.8979534,14.8979534 C14.5553079,15.2405989 14.1040962,15.449788 13.6251479,15.4920443 L13.4444,15.5 L2.55556,15.5 Z M5.166,14.5 L5.166,1.5 L2.55556,1.5 C2.27560729,1.5 2.00711453,1.61121225 1.80916339,1.80916339 C1.63949099,1.9788358 1.53354511,2.2003347 1.50673756,2.43645415 L1.5,2.55556 L1.5,13.4444 C1.5,13.7243977 1.61121525,13.992912 1.80915127,14.1908345 C1.97883371,14.3605053 2.20034112,14.4664539 2.43645699,14.4932622 L2.55556,14.5 L5.166,14.5 Z M13.4444,1.5 L6.166,1.5 L6.166,14.5 L13.4444,14.5 C13.7243885,14.5 13.9929125,14.3887808 14.1908466,14.1908466 C14.3605044,14.0211888 14.4664534,13.799669 14.4932621,13.5635208 L14.5,13.4444 L14.5,2.55556 C14.5,2.27561651 14.3887838,2.00711411 14.1908345,1.80915127 C14.0211867,1.63949183 13.7996754,1.5335456 13.5635236,1.50673768 L13.4444,1.5 Z"></path></svg>
                        &nbsp;
                        Dashboard
                    </Link></div> 
                    <Dropdown.Divider /> */}
                    {institutions.map((institution, index) => (
                        <div key={`course${index}`}><p className="px-2 my-0 text-secondary">Switch Institution</p>
                            <div><Link to="/" className="dropdown-item">
                                <svg width="16px" height="16px" viewBox="0 0 16 16"><path d="M8.00153734,2.69897622 L8.13621208,2.70709225 C8.31426802,2.72819767 8.48503447,2.79003078 8.63481582,2.88748177 L8.74300314,2.96716853 L14.4169403,7.65301691 C14.6291453,7.85008031 14.7688408,8.11101643 14.81696,8.41179926 L14.8333,8.5654 L14.8333,15.0001 C14.8333,15.3094472 14.7104706,15.6060611 14.491512,15.8251947 C14.3039256,16.0126312 14.059207,16.1296498 13.7983082,16.1592585 L13.6667,16.1667 L9.66666,16.1667 C9.42120011,16.1667 9.21705163,15.9898248 9.17471567,15.7565756 L9.16666,15.6667 L9.166,10.833 L6.833,10.833 L6.83332,15.6667 C6.83332,15.8814774 6.69789996,16.0646258 6.5077862,16.1354187 L6.42319563,16.1586443 L6.33332,16.1667 L2.33332,16.1667 C2.02391734,16.1667 1.72718201,16.0438338 1.50826768,15.8249544 C1.32078522,15.637367 1.20372419,15.3926357 1.17410436,15.1317181 L1.16666,15.0001 L1.16745742,8.53517264 C1.18380811,8.24600966 1.29557675,7.97189852 1.49688625,7.74261054 L1.60497552,7.63183964 L7.25773779,2.96454152 C7.43234065,2.82095681 7.64408619,2.73181454 7.8668013,2.7064598 L8.00153734,2.69897622 Z M7.99918266,3.69897674 L7.96107195,3.70327833 L7.92537135,3.71593324 L7.92537135,3.71593324 L7.89366448,3.73629036 L2.26356026,8.38378309 C2.2247612,8.41981368 2.19626618,8.46492974 2.18048801,8.50613937 L2.16666,8.5634 L2.16666,15.0001 C2.16666,15.0442916 2.1842156,15.0866713 2.21544511,15.1179183 C2.23626654,15.1387364 2.26204972,15.1534778 2.29003514,15.1609923 L2.33332,15.1667 L5.833,15.166 L5.83332,10.6667 C5.83332,10.5193554 5.87234479,10.3760224 5.94468054,10.250527 L6.00508889,10.1599659 L6.07745317,10.0773901 C6.20769304,9.94719185 6.37657641,9.86455311 6.55713764,9.84062349 L6.66666,9.8334 L9.33332,9.8334 C9.55430451,9.8334 9.76623898,9.92115221 9.92255511,10.0774183 C10.0528044,10.2076468 10.1354888,10.3765672 10.1594323,10.5571599 L10.16666,10.6667 L10.166,15.166 L13.6667,15.1667 L13.7099671,15.1609985 L13.7099671,15.1609985 L13.7499039,15.1444942 L13.7844053,15.118088 C13.8052984,15.0971781 13.820065,15.071367 13.827588,15.0433776 L13.8333,15.0001 L13.8341001,8.59367513 C13.8307265,8.53411334 13.8101977,8.47732826 13.7848516,8.43796924 L13.7583569,8.40496147 L8.10525997,3.7374164 C8.08538208,3.72091204 8.06208438,3.7093292 8.03728003,3.70344112 L7.99918266,3.69897674 Z M8,0.024292 C8.22260693,0.024292 8.43960404,0.0879541032 8.62598148,0.206457031 L8.7339335,0.284069116 L15.3146035,5.61140112 C15.5292318,5.78515183 15.5623696,6.09999522 15.3886189,6.3146235 C15.2341738,6.5054042 14.9682481,6.55278502 14.7603199,6.43892809 L14.6853965,6.38863888 L8.10482013,1.06138267 C8.07516652,1.03738863 8.03815814,1.024292 8,1.024292 C7.97456124,1.024292 7.94963348,1.03011273 7.92708299,1.0410801 L7.8952735,1.06130688 L1.3146035,6.38863888 C1.09997522,6.5623896 0.785131831,6.52925178 0.611381116,6.3146235 C0.456936035,6.1238428 0.465958436,5.8538798 0.620610447,5.67421266 L0.685396499,5.61140112 L7.26616013,0.283993334 C7.4738215,0.115965429 7.73287169,0.024292 8,0.024292 Z"></path></svg>
                                &nbsp;{institution.name}
                            </Link></div>
                        </div>
                    ))}
                    <Dropdown.Divider />
                    <div><Link to="/" className="dropdown-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" className=" Icons__icon-size___3XuUV"><path className="fill" d="M8.5,7.5 L12.6667,7.5 C12.9428424,7.5 13.1667,7.72385763 13.1667,8 C13.1667,8.27614237 12.9428424,8.5 12.6667,8.5 L8.5,8.5 L8.5,12.6667 C8.5,12.9428424 8.27614237,13.1667 8,13.1667 C7.72385763,13.1667 7.5,12.9428424 7.5,12.6667 L7.5,8.5 L3.33333,8.5 C3.05718763,8.5 2.83333,8.27614237 2.83333,8 C2.83333,7.72385763 3.05718763,7.5 3.33333,7.5 L7.5,7.5 L7.5,3.33333 C7.5,3.05718763 7.72385763,2.83333 8,2.83333 C8.27614237,2.83333 8.5,3.05718763 8.5,3.33333 L8.5,7.5 Z"></path></svg>
                        &nbsp;
                        Create new institution
                    </Link></div>
                </Dropdown.Menu>
            </Dropdown>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav.Item className="d-flex ms-lg-auto mx-1 mx-lg-1 ">
                </Nav.Item>
                {userType === "owner" || userType === "instructor" ?
                    <Nav.Item className="mx-lg-1 mx-3 my-1">
                        <OffCanvasInstitutionParticipants placement="top" institutionId={selectedInstitution._id}/>
                    </Nav.Item>
                    : <></>}
                <Dropdown className="mx-lg-1 mx-3 my-1">
                    <Dropdown.Toggle type="button" id="dropdown-custom-components" className="btn btn-primary text-white ">
                        {userName}
                    </Dropdown.Toggle>
                    <Dropdown.Menu align={{ lg: 'end' }}>
                        <Button className="dropdown-item" onClick={() => { auth.signout(() => history.push("/login")) }} >
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className=""><path className="fill" d="M12.7928858,8.5 L6,8.5 C5.72385763,8.5 5.5,8.27614237 5.5,8 C5.5,7.72385763 5.72385763,7.5 6,7.5 L12.7929109,7.5 L10.313145,5.0202118 C10.1178838,4.82494878 10.1178852,4.50836629 10.3131482,4.31310502 C10.5084112,4.11784375 10.8249937,4.11784518 11.020255,4.3131082 L14.353555,7.6464382 C14.5488154,7.8417004 14.5488149,8.15828125 14.3535539,8.35354286 L11.0202539,11.6868529 C10.8249921,11.8821153 10.5084096,11.8821158 10.3131471,11.6868539 C10.1178847,11.4915921 10.1178842,11.1750096 10.3131461,10.9797471 L12.7928858,8.5 L12.7928858,8.5 Z M6,13.5 C6.27614237,13.5 6.5,13.7238576 6.5,14 C6.5,14.2761424 6.27614237,14.5 6,14.5 L3.33333,14.5 C2.84713906,14.5 2.38083141,14.3068494 2.0369242,13.963011 C1.69313845,13.6191427 1.5,13.1528825 1.5,12.6667 L1.5,3.33333 C1.5,2.84710825 1.69315353,2.38079344 2.03697368,2.03695954 C2.38079344,1.69315353 2.84710825,1.5 3.33333,1.5 L6,1.5 C6.27614237,1.5 6.5,1.72385763 6.5,2 C6.5,2.27614237 6.27614237,2.5 6,2.5 L3.33333,2.5 C3.11232115,2.5 2.90035321,2.58779982 2.74408046,2.74406632 C2.58779982,2.90035321 2.5,3.11232115 2.5,3.33333 L2.5,12.6667 C2.5,12.8876813 2.58779596,13.0996317 2.74403804,13.2559113 C2.9003494,13.4121914 3.11233863,13.5 3.33333,13.5 L6,13.5 Z"></path></svg>
                            &nbsp;
                            Sign Out
                        </Button>
                    </Dropdown.Menu>
                </Dropdown>

            </Navbar.Collapse>
        </Navbar>
    );
}


export default HomeNavbar;