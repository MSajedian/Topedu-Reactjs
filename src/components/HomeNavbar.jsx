import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
// import { Form, FormControl, Button } from 'react-bootstrap';
// import { FcAbout } from 'react-icons/fc';
// import { Container, Row, Col } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

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

class HomeNavbar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" className="mx-3">
                <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" >
                        <svg fill="blue" width="16px" height="16px" viewBox="0 0 16 16"><path d="M8.00153734,2.69897622 L8.13621208,2.70709225 C8.31426802,2.72819767 8.48503447,2.79003078 8.63481582,2.88748177 L8.74300314,2.96716853 L14.4169403,7.65301691 C14.6291453,7.85008031 14.7688408,8.11101643 14.81696,8.41179926 L14.8333,8.5654 L14.8333,15.0001 C14.8333,15.3094472 14.7104706,15.6060611 14.491512,15.8251947 C14.3039256,16.0126312 14.059207,16.1296498 13.7983082,16.1592585 L13.6667,16.1667 L9.66666,16.1667 C9.42120011,16.1667 9.21705163,15.9898248 9.17471567,15.7565756 L9.16666,15.6667 L9.166,10.833 L6.833,10.833 L6.83332,15.6667 C6.83332,15.8814774 6.69789996,16.0646258 6.5077862,16.1354187 L6.42319563,16.1586443 L6.33332,16.1667 L2.33332,16.1667 C2.02391734,16.1667 1.72718201,16.0438338 1.50826768,15.8249544 C1.32078522,15.637367 1.20372419,15.3926357 1.17410436,15.1317181 L1.16666,15.0001 L1.16745742,8.53517264 C1.18380811,8.24600966 1.29557675,7.97189852 1.49688625,7.74261054 L1.60497552,7.63183964 L7.25773779,2.96454152 C7.43234065,2.82095681 7.64408619,2.73181454 7.8668013,2.7064598 L8.00153734,2.69897622 Z M7.99918266,3.69897674 L7.96107195,3.70327833 L7.92537135,3.71593324 L7.92537135,3.71593324 L7.89366448,3.73629036 L2.26356026,8.38378309 C2.2247612,8.41981368 2.19626618,8.46492974 2.18048801,8.50613937 L2.16666,8.5634 L2.16666,15.0001 C2.16666,15.0442916 2.1842156,15.0866713 2.21544511,15.1179183 C2.23626654,15.1387364 2.26204972,15.1534778 2.29003514,15.1609923 L2.33332,15.1667 L5.833,15.166 L5.83332,10.6667 C5.83332,10.5193554 5.87234479,10.3760224 5.94468054,10.250527 L6.00508889,10.1599659 L6.07745317,10.0773901 C6.20769304,9.94719185 6.37657641,9.86455311 6.55713764,9.84062349 L6.66666,9.8334 L9.33332,9.8334 C9.55430451,9.8334 9.76623898,9.92115221 9.92255511,10.0774183 C10.0528044,10.2076468 10.1354888,10.3765672 10.1594323,10.5571599 L10.16666,10.6667 L10.166,15.166 L13.6667,15.1667 L13.7099671,15.1609985 L13.7099671,15.1609985 L13.7499039,15.1444942 L13.7844053,15.118088 C13.8052984,15.0971781 13.820065,15.071367 13.827588,15.0433776 L13.8333,15.0001 L13.8341001,8.59367513 C13.8307265,8.53411334 13.8101977,8.47732826 13.7848516,8.43796924 L13.7583569,8.40496147 L8.10525997,3.7374164 C8.08538208,3.72091204 8.06208438,3.7093292 8.03728003,3.70344112 L7.99918266,3.69897674 Z M8,0.024292 C8.22260693,0.024292 8.43960404,0.0879541032 8.62598148,0.206457031 L8.7339335,0.284069116 L15.3146035,5.61140112 C15.5292318,5.78515183 15.5623696,6.09999522 15.3886189,6.3146235 C15.2341738,6.5054042 14.9682481,6.55278502 14.7603199,6.43892809 L14.6853965,6.38863888 L8.10482013,1.06138267 C8.07516652,1.03738863 8.03815814,1.024292 8,1.024292 C7.97456124,1.024292 7.94963348,1.03011273 7.92708299,1.0410801 L7.8952735,1.06130688 L1.3146035,6.38863888 C1.09997522,6.5623896 0.785131831,6.52925178 0.611381116,6.3146235 C0.456936035,6.1238428 0.465958436,5.8538798 0.620610447,5.67421266 L0.685396499,5.61140112 L7.26616013,0.283993334 C7.4738215,0.115965429 7.73287169,0.024292 8,0.024292 Z"></path></svg>
                        {/* Custom toggle */}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <div><Link to="/dashboard" className="dropdown-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" class=" Icons__icon-size___3XuUV"><path class="fill" d="M2.55556,15.5 C2.01040698,15.5 1.4875625,15.2834329 1.10206873,14.8979655 C0.759404483,14.5553248 0.550212493,14.1041116 0.507955807,13.6251524 L0.5,13.4444 L0.5,2.55556 C0.5,2.01039205 0.716568208,1.48754501 1.10205661,1.10205661 C1.44471297,0.759400253 1.89589961,0.550211703 2.37482185,0.507955684 L2.55556,0.5 L13.4444,0.5 C13.9896118,0.5 14.5124947,0.716571452 14.8979655,1.10206873 C15.2406031,1.44472986 15.4497888,1.89591501 15.4920444,2.37482638 L15.5,2.55556 L15.5,13.4444 C15.5,13.9895969 15.2834296,14.5124772 14.8979534,14.8979534 C14.5553079,15.2405989 14.1040962,15.449788 13.6251479,15.4920443 L13.4444,15.5 L2.55556,15.5 Z M5.166,14.5 L5.166,1.5 L2.55556,1.5 C2.27560729,1.5 2.00711453,1.61121225 1.80916339,1.80916339 C1.63949099,1.9788358 1.53354511,2.2003347 1.50673756,2.43645415 L1.5,2.55556 L1.5,13.4444 C1.5,13.7243977 1.61121525,13.992912 1.80915127,14.1908345 C1.97883371,14.3605053 2.20034112,14.4664539 2.43645699,14.4932622 L2.55556,14.5 L5.166,14.5 Z M13.4444,1.5 L6.166,1.5 L6.166,14.5 L13.4444,14.5 C13.7243885,14.5 13.9929125,14.3887808 14.1908466,14.1908466 C14.3605044,14.0211888 14.4664534,13.799669 14.4932621,13.5635208 L14.5,13.4444 L14.5,2.55556 C14.5,2.27561651 14.3887838,2.00711411 14.1908345,1.80915127 C14.0211867,1.63949183 13.7996754,1.5335456 13.5635236,1.50673768 L13.4444,1.5 Z"></path></svg>
                            &nbsp;
                            Institution Name · Dashboard
                        </Link></div>
                        <Dropdown.Divider />
                        <p className="px-2 my-0 text-secondary">Switch Institution</p>
                        <div><Link to="#" className="dropdown-item">
                            <svg width="16px" height="16px" viewBox="0 0 16 16"><path d="M8.00153734,2.69897622 L8.13621208,2.70709225 C8.31426802,2.72819767 8.48503447,2.79003078 8.63481582,2.88748177 L8.74300314,2.96716853 L14.4169403,7.65301691 C14.6291453,7.85008031 14.7688408,8.11101643 14.81696,8.41179926 L14.8333,8.5654 L14.8333,15.0001 C14.8333,15.3094472 14.7104706,15.6060611 14.491512,15.8251947 C14.3039256,16.0126312 14.059207,16.1296498 13.7983082,16.1592585 L13.6667,16.1667 L9.66666,16.1667 C9.42120011,16.1667 9.21705163,15.9898248 9.17471567,15.7565756 L9.16666,15.6667 L9.166,10.833 L6.833,10.833 L6.83332,15.6667 C6.83332,15.8814774 6.69789996,16.0646258 6.5077862,16.1354187 L6.42319563,16.1586443 L6.33332,16.1667 L2.33332,16.1667 C2.02391734,16.1667 1.72718201,16.0438338 1.50826768,15.8249544 C1.32078522,15.637367 1.20372419,15.3926357 1.17410436,15.1317181 L1.16666,15.0001 L1.16745742,8.53517264 C1.18380811,8.24600966 1.29557675,7.97189852 1.49688625,7.74261054 L1.60497552,7.63183964 L7.25773779,2.96454152 C7.43234065,2.82095681 7.64408619,2.73181454 7.8668013,2.7064598 L8.00153734,2.69897622 Z M7.99918266,3.69897674 L7.96107195,3.70327833 L7.92537135,3.71593324 L7.92537135,3.71593324 L7.89366448,3.73629036 L2.26356026,8.38378309 C2.2247612,8.41981368 2.19626618,8.46492974 2.18048801,8.50613937 L2.16666,8.5634 L2.16666,15.0001 C2.16666,15.0442916 2.1842156,15.0866713 2.21544511,15.1179183 C2.23626654,15.1387364 2.26204972,15.1534778 2.29003514,15.1609923 L2.33332,15.1667 L5.833,15.166 L5.83332,10.6667 C5.83332,10.5193554 5.87234479,10.3760224 5.94468054,10.250527 L6.00508889,10.1599659 L6.07745317,10.0773901 C6.20769304,9.94719185 6.37657641,9.86455311 6.55713764,9.84062349 L6.66666,9.8334 L9.33332,9.8334 C9.55430451,9.8334 9.76623898,9.92115221 9.92255511,10.0774183 C10.0528044,10.2076468 10.1354888,10.3765672 10.1594323,10.5571599 L10.16666,10.6667 L10.166,15.166 L13.6667,15.1667 L13.7099671,15.1609985 L13.7099671,15.1609985 L13.7499039,15.1444942 L13.7844053,15.118088 C13.8052984,15.0971781 13.820065,15.071367 13.827588,15.0433776 L13.8333,15.0001 L13.8341001,8.59367513 C13.8307265,8.53411334 13.8101977,8.47732826 13.7848516,8.43796924 L13.7583569,8.40496147 L8.10525997,3.7374164 C8.08538208,3.72091204 8.06208438,3.7093292 8.03728003,3.70344112 L7.99918266,3.69897674 Z M8,0.024292 C8.22260693,0.024292 8.43960404,0.0879541032 8.62598148,0.206457031 L8.7339335,0.284069116 L15.3146035,5.61140112 C15.5292318,5.78515183 15.5623696,6.09999522 15.3886189,6.3146235 C15.2341738,6.5054042 14.9682481,6.55278502 14.7603199,6.43892809 L14.6853965,6.38863888 L8.10482013,1.06138267 C8.07516652,1.03738863 8.03815814,1.024292 8,1.024292 C7.97456124,1.024292 7.94963348,1.03011273 7.92708299,1.0410801 L7.8952735,1.06130688 L1.3146035,6.38863888 C1.09997522,6.5623896 0.785131831,6.52925178 0.611381116,6.3146235 C0.456936035,6.1238428 0.465958436,5.8538798 0.620610447,5.67421266 L0.685396499,5.61140112 L7.26616013,0.283993334 C7.4738215,0.115965429 7.73287169,0.024292 8,0.024292 Z"></path></svg>
                            &nbsp;
                            Current Institution
                        </Link></div>
                        <Dropdown.Divider />
                        <div><Link to="#" className="dropdown-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" class=" Icons__icon-size___3XuUV"><path class="fill" d="M6.26627873,8.96615096 C6.10087444,8.74502649 6.14604457,8.43168302 6.36716904,8.26627873 C6.58829351,8.10087444 6.90163698,8.14604457 7.06704127,8.36716904 C7.31040447,8.69251463 7.6208836,8.96171068 7.97742724,9.15650662 C8.33396779,9.35130088 8.72823323,9.46714 9.13344077,9.49616474 C9.53877569,9.525164 9.94557266,9.46669467 10.3261319,9.32472858 C10.706796,9.18271484 11.0524857,8.96049503 11.3397466,8.67310661 L13.3336588,6.67930108 C13.8497849,6.14492523 14.1353788,5.42921575 14.1289189,4.68633771 C14.1224584,3.94338593 13.8245025,3.23278131 13.299138,2.70748481 C12.7738401,2.18216138 12.063248,1.88419106 11.3203581,1.87773115 C10.5774485,1.87127956 9.8617205,2.15686733 9.33252061,2.66791316 L8.18585061,3.80791316 C7.99001974,4.00260492 7.67343859,4.00168148 7.47874684,3.80585061 C7.28405508,3.61001974 7.28497852,3.29343859 7.48080939,3.09874684 L8.63264404,1.95368595 C9.35561168,1.25542022 10.3239406,0.869040341 11.3290477,0.877768903 C12.3341452,0.886508881 13.2955551,1.28965381 14.0062305,2.00036373 C14.71701,2.71105124 15.1201405,3.67249036 15.1288811,4.67764229 C15.137621,5.68272534 14.7512282,6.65104117 14.0468534,7.38021339 L12.0469318,9.38013492 C11.6583677,9.76887154 11.1906748,10.0695187 10.6756589,10.2616548 C10.1607378,10.4537441 9.61040197,10.5328444 9.06203686,10.4936122 C8.5137631,10.4543397 7.98034898,10.2976174 7.49797276,10.0340734 C7.01559138,9.77052657 6.5955321,9.40632079 6.26627873,8.96615096 Z M9.73372254,7.03383073 C9.89912589,7.25495589 9.85395444,7.56829918 9.63282927,7.73370254 C9.41170411,7.89910589 9.09836082,7.85393444 8.93295746,7.63280927 C8.68960425,7.30747416 8.37912457,7.03827764 8.02257276,6.84347338 C7.66602945,6.64867761 7.27176693,6.53284152 6.86651761,6.50382228 C6.46126956,6.47479524 6.05453124,6.53326448 5.67386442,6.67526653 C5.29318413,6.81727361 4.94750985,7.03947642 4.66022339,7.32687339 L2.66631405,9.32067596 C2.15020359,9.85504438 1.86461961,10.5707539 1.87107115,11.3136581 C1.87752248,12.0565392 2.17549405,12.7671343 2.70084341,13.2924666 C3.22612001,13.8178027 3.9367264,14.1157584 4.67967771,14.1222189 C5.42253507,14.1286786 6.13826695,13.8430983 6.66644661,13.3331466 L7.80644661,12.1931466 C8.00170876,11.9978845 8.31829124,11.9978845 8.51355339,12.1931466 C8.70881554,12.3884088 8.70881554,12.7049912 8.51355339,12.9002534 L7.36732931,14.0463698 C6.64433283,14.7445599 5.67602122,15.1309207 4.67098229,15.1221811 C3.66583259,15.1134406 2.70439444,14.7103117 1.99372233,13.9995591 C1.28298391,13.2888437 0.879837246,12.3274297 0.871108853,11.3223419 C0.862380375,10.3172445 1.24875755,9.34893444 1.95311661,8.61976661 L3.95304862,6.61983461 C4.34164809,6.23108565 4.80932664,5.9304573 5.32435558,5.73833347 C5.83937764,5.54621221 6.38967989,5.46710544 6.93795273,5.50637703 C7.4862253,5.54563793 8.01964371,5.70235865 8.50203089,5.96590862 C8.98442045,6.2294651 9.40447918,6.59367042 9.73372254,7.03383073 Z"></path></svg>
                            &nbsp;
                            Link another account
                        </Link></div>
                        <div><Link to="#" className="dropdown-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" class=" Icons__icon-size___3XuUV"><path class="fill" d="M8.5,7.5 L12.6667,7.5 C12.9428424,7.5 13.1667,7.72385763 13.1667,8 C13.1667,8.27614237 12.9428424,8.5 12.6667,8.5 L8.5,8.5 L8.5,12.6667 C8.5,12.9428424 8.27614237,13.1667 8,13.1667 C7.72385763,13.1667 7.5,12.9428424 7.5,12.6667 L7.5,8.5 L3.33333,8.5 C3.05718763,8.5 2.83333,8.27614237 2.83333,8 C2.83333,7.72385763 3.05718763,7.5 3.33333,7.5 L7.5,7.5 L7.5,3.33333 C7.5,3.05718763 7.72385763,2.83333 8,2.83333 C8.27614237,2.83333 8.5,3.05718763 8.5,3.33333 L8.5,7.5 Z"></path></svg>
                            &nbsp;
                            Create new institution
                        </Link></div>
                    </Dropdown.Menu>
                </Dropdown>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Nav.Link href="#" className="text-dark alert-dismissible fade show">Institution Name</Nav.Link>
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

                    <Nav.Link href="#" type="button" className="btn btn-primary text-white">
                        User Name
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default HomeNavbar;