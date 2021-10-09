import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Editor from "@monaco-editor/react";

export default function OffCanvasCodePlayground({ ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const [srcdocOfIframe, setSrcdocOfIframe] = useState(``)
  const [htmlTextAreaValue, setHtmlTextAreaValue] = useState(`<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<title>Document</title>\n</head>\n\n<body>\n<p id='p1'>this is a paraghraph</p>\n</body>\n\n</html>`)
  const [cssTextAreaValue, setCssTextAreaValue] = useState(`p{\ncolor: red\n}`)
  const [jsTextAreaValue, setJsTextAreaValue] = useState(`let body=document.querySelector('body')\nbody.style.backgroundColor='yellow'`)

  const runCodes = () => {
    setSrcdocOfIframe(htmlTextAreaValue + '<style>' + cssTextAreaValue + '</style><script>' + jsTextAreaValue + '</script>')
  }
  const handleEditorDidMount = (editor, monaco) => {
    // editorRef.current = editor;
  }

  return (
    <>
      <Button variant="outline-success" onClick={toggleShow} >
        👨‍💻 Code Playground
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} scroll={true} backdrop={false} style={{ height: "70vh" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>👨‍💻 Code Playground</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="pt-0">
          <Container>
            <Row>
              <Col xs={12} md={4}>
                <div className="text-center fw-bold">HTML</div>
                <Editor
                  height="200px"
                  defaultLanguage="html"
                  defaultValue={htmlTextAreaValue}
                  onChange={(value, event) => (setHtmlTextAreaValue(value))}
                  theme="vs-dark"
                />
              </Col>
              <Col xs={12} md={4}>
                <div className="text-center fw-bold">CSS</div>
                <Editor
                  height="200px"
                  defaultLanguage="css"
                  defaultValue={cssTextAreaValue}
                  onChange={(value, event) => (setCssTextAreaValue(value))}
                  theme="vs-dark"
                />
              </Col>
              <Col xs={12} md={4}>
                <div className="text-center fw-bold">JavaScript</div>
                <Editor
                  height="200px"
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
                  srcDoc={srcdocOfIframe}
                ></iframe>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}





