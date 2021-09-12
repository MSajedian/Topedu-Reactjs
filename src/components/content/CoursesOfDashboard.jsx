import React from "react";

import { Container, Row, Col, CardGroup, Card, Form, FormControl, Button } from 'react-bootstrap';

const CoursesOfDashboard = () => {

  return (
    <Container>
      <h2>Courses</h2>
      <Row>
        <Col>
          <Form className="d-flex">
            <FormControl
              type="SearchForCourses"
              placeholder="Search for Courses"
              className="me-2"
              aria-label="SearchForCourses"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Col>
        <Col>
        <Button variant="info" className=" d-flex ms-auto" type="button" data-test="" data-clipboard-text="">
            <span>+ Create Courses</span>
            </Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x150" />
            <Card.Body>
              <Card.Title>Course Name</Card.Title>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Create by ...</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x150" />
            <Card.Body>
              <Card.Title>Course Name</Card.Title>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Create by ...</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x150" />
            <Card.Body>
              <Card.Title>Course Name</Card.Title>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Create by ...</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Row>
    </Container>
  );
};

export default CoursesOfDashboard;
