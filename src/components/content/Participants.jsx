import React from "react";

import { Container, Row, Col, Table, Form, FormControl, Button } from 'react-bootstrap';

const Participants = () => {

  return (
    <Container>
      <h2>Participants</h2>
      <Row>
        <Col>
          <Form className="d-flex">
            <FormControl
              type="SearchForParticipant"
              placeholder="Search for participant"
              className="mr-2"
              aria-label="SearchForParticipant"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Col>
        <Col>
          <button className="btn btn-info d-flex ms-auto" type="button" data-test="" data-clipboard-text="">
            <svg width="16px" height="16px" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.87 1.07216C13.8593 1.07797 13.8488 1.08412 13.8384 1.09063L1.51649 8.79323C1.3384 8.90468 1.23 9.10001 1.23 9.31C1.23 9.64652 1.5028 9.91933 1.83933 9.91933H7.15121L13.87 1.07216ZM14.7667 1.54479L8.02594 10.421L11.2728 14.7552C11.3646 14.877 11.4988 14.9605 11.6481 14.9887C11.9787 15.0508 12.2971 14.8332 12.3593 14.5028L14.7593 1.72106C14.7703 1.66267 14.7727 1.60325 14.7667 1.54479ZM1.83933 10.9193H5.23334V13.8667C5.23334 14.7546 5.953 15.4753 6.842 15.4753C7.16528 15.4753 7.48133 15.3777 7.74815 15.1959L7.74827 15.1958L9.47285 14.0204L10.4732 15.3558L10.4739 15.3568C10.7154 15.6774 11.068 15.8968 11.4626 15.9713C12.3358 16.1357 13.1776 15.5614 13.342 14.6878L15.7419 1.90656C15.8171 1.50915 15.7398 1.09669 15.5253 0.753616C15.0541 -0.00016313 14.0615 -0.228168 13.3083 0.242696L0.986295 7.94535C0.516451 8.23925 0.229996 8.7547 0.229996 9.31C0.229996 10.1988 0.95052 10.9193 1.83933 10.9193ZM6.23334 10.9193V13.8667C6.23334 14.2027 6.50568 14.4753 6.842 14.4753C6.96401 14.4753 7.08392 14.4384 7.18507 14.3695L7.18519 14.3694L8.87184 13.2199L7.14972 10.9193H6.23334Z"></path></svg>
            &nbsp;
            <span>Invite participants</span>
          </button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email / username</th>
              <th>Last Active</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Mark@school.com</td>
              <td>Less than 1 day ago</td>
              <td>Owner</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Participants;
