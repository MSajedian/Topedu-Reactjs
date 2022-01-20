import React, { useDebugValue, useState } from "react";
import { Offcanvas } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Editor from "@monaco-editor/react";
import { HiOutlineViewBoards } from "react-icons/hi";

export default function OffCanvasCodePlayground({ ...props }) {
  const [show, setShow] = useStateWithLabel(false, "show");
  const [view, setView] = useStateWithLabel(4, "view");
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const [srcDocOfIframe, setSrcDocOfIframe] = useStateWithLabel(``, "srcdocOfIframe");
  const [htmlTextAreaValue, setHtmlTextAreaValue] = useStateWithLabel(`<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<title>Document</title>\n</head>\n\n<body>\n<p id='p1'>this is a paragraph</p>\n</body>\n\n</html>`, "htmlTextAreaValue");
  const [cssTextAreaValue, setCssTextAreaValue] = useStateWithLabel(`p{\ncolor: red\n}`, "cssTextAreaValue");
  const [jsTextAreaValue, setJsTextAreaValue] = useStateWithLabel(`let body=document.querySelector('body')\nbody.style.backgroundColor='yellow'`, "jsTextAreaValue");

  function useStateWithLabel(initialValue, name) {
    const [value, setValue] = useState(initialValue);
    useDebugValue(`${name}: ${value}`);
    return [value, setValue];
  }

  const runCodes = () => {
    setSrcDocOfIframe(htmlTextAreaValue + '<style>' + cssTextAreaValue + '</style><script>' + jsTextAreaValue + '</script>')
  }
  const handleEditorDidMount = (editor, monaco) => {
    // editorRef.current = editor;
  }

  return (
    <>
      <Button variant="success" className="btn-grad-green px-3 py-2" onClick={toggleShow} >
        👨‍💻 Code Playground
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} scroll={true} backdrop={false} className="height-80vh">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>👨‍💻 Code Playground</Offcanvas.Title>
          <Button variant="secondary" onClick={() => (setView(4))} className="mx-1 ms-auto">
            <HiOutlineViewBoards size="1.5em" />
          </Button>
          <Button variant="secondary" onClick={() => (setView(12))} className="mx-1" >
            <HiOutlineViewBoards size="1.5em" className="rotate90deg" />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body className="pt-0">
          <Container>
            <Row>
              <Col xs={12} md={view}>
                <div className="text-center fw-bold">HTML</div>
                <Editor
                  height="35vh"
                  defaultLanguage="html"
                  defaultValue={htmlTextAreaValue}
                  onChange={(value, event) => (setHtmlTextAreaValue(value))}
                  theme="vs-dark"
                />
              </Col>
              <Col xs={12} md={view}>
                <div className="text-center fw-bold">CSS</div>
                <Editor
                  height="35vh"
                  defaultLanguage="css"
                  defaultValue={cssTextAreaValue}
                  onChange={(value, event) => (setCssTextAreaValue(value))}
                  theme="vs-dark"
                />
              </Col>
              <Col xs={12} md={view}>
                <div className="text-center fw-bold">JavaScript</div>
                <Editor
                  height="35vh"
                  defaultLanguage="javascript"
                  defaultValue={jsTextAreaValue}
                  onChange={(value, event) => (setJsTextAreaValue(value))}
                  onMount={handleEditorDidMount}
                  theme="vs-dark"
                />
              </Col>
            </Row>
            <Button onClick={runCodes} className="mt-2">Run Codes</Button>
            <Row>
              <Col>
                <iframe
                  className='border mt-3'
                  id="iFrame"
                  title="iFrame"
                  width='100%'
                  height="170px"
                  // ref={onIframeRef}
                  // sandbox="allow-same-origin"
                  srcDoc={srcDocOfIframe}
                ></iframe>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}





