import React from "react";

import { Container, Nav } from 'react-bootstrap';

const Settings = () => {

  return (
    <Container>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-1" default>General</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Zapier & API</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3"> Logos & theme </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default Settings;
