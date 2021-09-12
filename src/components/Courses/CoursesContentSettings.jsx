import { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

class CoursesContentSettings extends Component {
    render() {
        return (
            <>
                <Form>
                    <Row>
                        <Col className="mb-1">
                            <b>Content Title</b>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control value={this.props.title} />
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Form>
            </>
        )
    }
}

export default CoursesContentSettings;




