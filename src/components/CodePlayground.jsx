import { Component } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
// import { Tabs, Tab } from 'react-bootstrap';

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
            <p>this is a paraghraph</p> 
            </body> 
            </html>`,
            cssTextArea: `p{color:red}`,
            jsTextArea: ``
        };
    }

    runCodes = () => {
        this.setState({ srcdocOfIframe: this.state.htmlTextAreaValue + '<style>' + this.state.cssTextArea + '</style><script>' + this.state.jsTextArea + '</script>' })
    }

    // let iFrame = document.getElementById('iFrame').contentWindow.document
    // let htmlTextArea = document.getElementById('htmlTextarea')
    // let cssTextArea = document.getElementById('cssTextarea')
    // let jsTextArea = document.getElementById('jsTextarea')

    // runCodes = () => {
    //     srcOfIframe.open()
    //     srcOfIframe.writeln(
    //         htmlTextArea.value +
    //         '<style>' +
    //         cssTextArea.value +
    //         '</style>' +
    //         '<script>' +
    //         jsTextArea.value +
    //         '</script>'
    //     )
    //     srcOfIframe.close()
    // }

    render() {
        return (
            <Container>
                <h3>HTML/CSS/JS Playground</h3>
                <Form>
                    <input type="button" onClick={this.runCodes} value="Run" id="run-codes" />
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="htmlTextArea">
                                <Form.Label>HTML</Form.Label>
                                <Form.Control as="textarea" rows={8} value={this.state.htmlTextAreaValue} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="cssTextArea">
                                <Form.Label>CSS</Form.Label>
                                <Form.Control as="textarea" rows={8} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="jsTextArea">
                                <Form.Label>JavaScript</Form.Label>
                                <Form.Control as="textarea" rows={8} />
                            </Form.Group>

                        </Col>
                        <Row>
                            <Col>
                                <h2>Result</h2>
                                <iframe
                                    className='border'
                                    id="iFrame"
                                    title="iFrame"
                                    width='100%'
                                    // height='100%'
                                    // ref={this.onIframeRef}
                                    // sandbox="allow-same-origin"
                                    srcdoc={this.state.srcdocOfIframe}
                                ></iframe>
                            </Col>
                        </Row>
                    </Row>
                </Form>
            </Container>
        )
    }
}

export default CodePlayground;




