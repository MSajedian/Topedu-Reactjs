import { Component } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Editor from "@monaco-editor/react";

class CodePlayground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            srcdocOfIframe: ``,
            htmlTextAreaValue: `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            
            <body>
                <p id='p1'>this is a paraghraph</p>
            </body>
            
            </html>`,
            cssTextAreaValue: `p{ color: red }`,
            jsTextAreaValue: `document.querySelector('body').style.backgroundColor='yellow'
            `
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
                        <Col>
                            <Form.Label>HTML</Form.Label>
                            <Editor
                                height="40vh"
                                defaultLanguage="html"
                                defaultValue={this.state.htmlTextAreaValue}
                                onChange={(value, event) => (this.setState({ htmlTextAreaValue: value }))}
                                theme="vs-dark"
                            />
                        </Col>
                        <Col>
                            <Form.Label>CSS</Form.Label>
                            <Editor
                                height="40vh"
                                defaultLanguage="css"
                                defaultValue={this.state.cssTextAreaValue}
                                onChange={(value, event) => (this.setState({ cssTextAreaValue: value }))}
                                theme="vs-dark"
                            />
                        </Col>
                        <Col>
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




