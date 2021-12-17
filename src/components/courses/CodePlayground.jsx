import React, { useState, useDebugValue, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, Dropdown, Nav, Navbar } from 'react-bootstrap';
import Editor from "@monaco-editor/react";
import { useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import UseAuth from '../auth/UseAuth';

export default function CodePlayground() {
    const auth = UseAuth();
    const history = useHistory();
    const userName = useSelector((state) => state.user.userName)

    const [srcdocOfIframe, setSrcdocOfIframe] = useStateWithLabel(``, "srcdocOfIframe");
    const [htmlTextAreaValue, setHtmlTextAreaValue] = useStateWithLabel(`<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<title>Document</title>\n</head>\n\n<body>\n<p id='p1'>this is a paragraph</p>\n</body>\n\n</html>`, "htmlTextAreaValue");
    const [cssTextAreaValue, setCssTextAreaValue] = useStateWithLabel(`p{\ncolor: red\n}`, "cssTextAreaValue");
    const [jsTextAreaValue, setJsTextAreaValue] = useStateWithLabel(`let body=document.querySelector('body')\nbody.style.backgroundColor='gray'`, "jsTextAreaValue");

    useEffect(() => {
        setHtmlTextAreaValue(`<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">  <!-- Bootstrap CSS -->\n<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">  <title>Hello, world!</title>\n</head>\n<body>\n<h1>Hello, world!</h1>\n<p>This is a paragraph</p>\n  <!-- Optional JavaScript; choose one of the two! -->  <!-- Option 1: Bootstrap Bundle with Popper -->\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script>  <!-- Option 2: Separate Popper and Bootstrap JS -->\n<!-- <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.min.js" integrity="sha384-PsUw7Xwds7x08Ew3exXhqzbhuEYmA2xnwc8BuD6SEr+UmEHlX8/MCltYEodzWA4u" crossorigin="anonymous"></script> -->\n</body>\n</html>`)
        // eslint-disable-next-line
    }, [])

    function useStateWithLabel(initialValue, name) {
        const [value, setValue] = useState(initialValue);
        useDebugValue(`${name}: ${value}`);
        return [value, setValue];
    }

    const runCodes = () => {
        setSrcdocOfIframe(htmlTextAreaValue + '<style>' + cssTextAreaValue + '</style><script>' + jsTextAreaValue + '</script>')
    }

    const handleEditorDidMount = (editor, monaco) => {
        // editorRef.current = editor;
    }

    return (
        <>
            <Navbar expand="lg" className="navbar-default">
                <div><Link to="/home" className="button rounded mx-3 px-2 py-1">
                    <svg width="16px" height="16px" viewBox="0 0 16 16" ><path className="fill accent-color" d="M10,9 L14,9 C14.5522847,9 15,9.44771525 15,10 L15,14 C15,14.5522847 14.5522847,15 14,15 L10,15 C9.44771525,15 9,14.5522847 9,14 L9,10 C9,9.44771525 9.44771525,9 10,9 Z M10,10 L10,14 L14,14 L14,10 L10,10 Z M2,9 L6,9 C6.55228475,9 7,9.44771525 7,10 L7,14 C7,14.5522847 6.55228475,15 6,15 L2,15 C1.44771525,15 1,14.5522847 1,14 L1,10 C1,9.44771525 1.44771525,9 2,9 Z M2,10 L2,14 L6,14 L6,10 L2,10 Z M10,1 L14,1 C14.5522847,1 15,1.44771525 15,2 L15,6 C15,6.55228475 14.5522847,7 14,7 L10,7 C9.44771525,7 9,6.55228475 9,6 L9,2 C9,1.44771525 9.44771525,1 10,1 Z M10,2 L10,6 L14,6 L14,2 L10,2 Z M2,1 L6,1 C6.55228475,1 7,1.44771525 7,2 L7,6 C7,6.55228475 6.55228475,7 6,7 L2,7 C1.44771525,7 1,6.55228475 1,6 L1,2 C1,1.44771525 1.44771525,1 2,1 Z M2,2 L2,6 L6,6 L6,2 L2,2 Z"></path></svg>
                </Link></div>
                <div className="fs-2"> 👨‍💻 Code Playground </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav navbarScroll > </Nav>
                    <Dropdown className="d-flex ms-lg-auto mx-lg-3 mx-3 my-1">
                        <Dropdown.Toggle variant="success" type="button" id="dropdown-custom-components" className="btn-grad-orange">
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
            </Navbar >
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <div className="fs-3 fw-bold text-center">HTML</div>
                        <Editor
                            height="300px"
                            defaultLanguage="html"
                            defaultValue={htmlTextAreaValue}
                            onChange={(value, event) => (setHtmlTextAreaValue(value))}
                            theme="vs-dark"
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="fs-3 fw-bold text-center">CSS</div>
                        <Editor
                            height="300px"
                            defaultLanguage="css"
                            defaultValue={cssTextAreaValue}
                            onChange={(value, event) => (setCssTextAreaValue(value))}
                            theme="vs-dark"
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="fs-3 fw-bold text-center">JavaScript</div>
                        <Editor
                            height="300px"
                            defaultLanguage="javascript"
                            defaultValue={jsTextAreaValue}
                            onChange={(value, event) => (setJsTextAreaValue(value))}
                            onMount={handleEditorDidMount}
                            theme="vs-dark"
                        />
                    </Col>
                </Row>
                <Button onClick={runCodes} className="mt-2">Run Codes</Button>
                <hr />
                <Row>

                </Row>
                <Row>
                    <Col>
                        <h2>Result</h2>
                        <iframe
                            className='border'
                            id="iFrame"
                            title="iFrame"
                            width='100%'
                            height='100%'
                            // ref={this.onIframeRef}
                            // sandbox="allow-same-origin"
                            srcDoc={srcdocOfIframe}
                        ></iframe>
                    </Col>
                </Row>
            </Container>
        </>
    )
}





