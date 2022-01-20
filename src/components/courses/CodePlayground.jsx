import React, { useState, useDebugValue, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, Dropdown, Nav, Navbar } from 'react-bootstrap';
import Editor from "@monaco-editor/react";
import { useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import UseAuth from '../auth/UseAuth';
import { AiOutlineAppstore } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

export default function CodePlayground() {
    const auth = UseAuth();
    const history = useHistory();
    const userName = useSelector((state) => state.user.userName)

    const [srcdocOfIframe, setSrcdocOfIframe] = useStateWithLabel(``, "srcdocOfIframe");
    const [htmlTextAreaValue, setHtmlTextAreaValue] = useStateWithLabel(`<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<title>Document</title>\n</head>\n\n<body>\n<p id='p1'>this is a paragraph</p>\n</body>\n\n</html>`, "htmlTextAreaValue");
    const [cssTextAreaValue, setCssTextAreaValue] = useStateWithLabel(`p{\ncolor: red\n}`, "cssTextAreaValue");
    const [jsTextAreaValue, setJsTextAreaValue] = useStateWithLabel(`let body=document.querySelector('body')\nbody.style.backgroundColor='gray'`, "jsTextAreaValue");

    function useStateWithLabel(initialValue, name) {
        const [value, setValue] = useState(initialValue);
        useDebugValue(`${name}: ${value}`);
        return [value, setValue];
    }
    
    useEffect(() => {
        setHtmlTextAreaValue(`<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">  <!-- Bootstrap CSS -->\n<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">  <title>Hello, world!</title>\n</head>\n<body>\n<h1>Hello, world!</h1>\n<p>This is a paragraph</p>\n  <!-- Optional JavaScript; choose one of the two! -->  <!-- Option 1: Bootstrap Bundle with Popper -->\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script>  <!-- Option 2: Separate Popper and Bootstrap JS -->\n<!-- <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.min.js" integrity="sha384-PsUw7Xwds7x08Ew3exXhqzbhuEYmA2xnwc8BuD6SEr+UmEHlX8/MCltYEodzWA4u" crossorigin="anonymous"></script> -->\n</body>\n</html>`)
        // eslint-disable-next-line
    }, [])

    

    const runCodes = () => {
        setSrcdocOfIframe(htmlTextAreaValue + '<style>' + cssTextAreaValue + '</style><script>' + jsTextAreaValue + '</script>')
    }

    const handleEditorDidMount = (editor, monaco) => {
        // editorRef.current = editor;
    }

    return (
        <>
            <Navbar expand="lg" className="navbar-default">
                <div><Link to="/institution" className="button rounded mx-3 px-2 py-1">
                    <AiOutlineAppstore size="1.3em"/>
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
                                <FiLogOut/>
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





