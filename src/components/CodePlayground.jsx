import { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Editor from "@monaco-editor/react";


class CodePlayground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            srcdocOfIframe: ``,
            htmlTextAreaValue: `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<title>Document</title>\n</head>\n\n<body>\n<p id='p1'>this is a paraghraph</p>\n</body>\n\n</html>`,
            cssTextAreaValue: `p{\ncolor: red\n}`,
            jsTextAreaValue: `let body=document.querySelector('body')\nbody.style.backgroundColor='yellow'`
        };
    }

    runCodes = () => {
        this.setState({ srcdocOfIframe: this.state.htmlTextAreaValue + '<style>' + this.state.cssTextAreaValue + '</style><script>' + this.state.jsTextAreaValue + '</script>' })
    }
    handleEditorDidMount = (editor, monaco) => {
        // editorRef.current = editor;
    }


    render() {
        return (
            <Container>
                <h3>HTML/CSS/JS Playground</h3>
                <Form>
                    <Row>
                        <Col xs={12} md={3}>
                            <Form.Label>HTML</Form.Label>
                            <Editor
                                height="40vh"
                                defaultLanguage="html"
                                defaultValue={this.state.htmlTextAreaValue}
                                onChange={(value, event) => (this.setState({ htmlTextAreaValue: value }))}
                                theme="vs-dark"
                            />
                        </Col>
                        <Col xs={12} md={3}>
                            <Form.Label>CSS</Form.Label>
                            <Editor
                                height="40vh"
                                defaultLanguage="css"
                                defaultValue={this.state.cssTextAreaValue}
                                onChange={(value, event) => (this.setState({ cssTextAreaValue: value }))}
                                theme="vs-dark"
                            />
                        </Col>
                        <Col xs={12} md={3}>
                            <Form.Label>javascript</Form.Label>
                            <Editor
                                height="40vh"
                                defaultLanguage="javascript"
                                defaultValue={this.state.jsTextAreaValue}
                                onChange={(value, event) => (this.setState({ jsTextAreaValue: value }))}
                                onMount={this.state.handleEditorDidMount}
                                theme="vs-dark"
                            />
                        </Col>
                    </Row>
                    <Button onClick={this.runCodes} className="mt-2">Run Codes</Button>
                    <hr />
                    <Row>

                    </Row>
                    <Row>
                        <Col xs={12} md={9}>
                            <h2>Result</h2>
                            <iframe
                                className='border'
                                id="iFrame"
                                title="iFrame"
                                width='100%'
                                height='100%'
                                // ref={this.onIframeRef}
                                // sandbox="allow-same-origin"
                                srcDoc={this.state.srcdocOfIframe}
                            ></iframe>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}

export default CodePlayground;




