import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
// import { Row, Col, CardGroup, Card } from 'react-bootstrap';
// import { FcReadingEbook } from 'react-icons/fc';
// import { FcAbout } from 'react-icons/fc';
import CompanyNavbar from './CompanyNavbar'

class CompanyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <CompanyNavbar />
                <Container>
                    <Row>
                        <Col>
                            
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default CompanyPage;