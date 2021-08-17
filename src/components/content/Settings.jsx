import React from "react";

import { Container, Tabs, Tab, Form, Button } from 'react-bootstrap';

const Settings = () => {

  return (
    <Container>
      <Tabs defaultActiveKey="general" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="general" title="General">



          <Form>
            <Form.Group className="mb-3" controlId="formInstitutionName">
              <Form.Label><b>Institution name</b></Form.Label>
              <Form.Control type="text" placeholder="Institution Name" />
              <Button variant="outline-secondary" type="submit">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="blue"><path d="M13.6869 3.64645C13.8822 3.84171 13.8822 4.15829 13.6869 4.35355L6.35357 11.6869C6.15831 11.8821 5.84173 11.8821 5.64647 11.6869L2.31313 8.35355C2.11787 8.15829 2.11787 7.84171 2.31313 7.64645C2.5084 7.45118 2.82498 7.45118 3.02024 7.64645L6.00002 10.6262L12.9798 3.64645C13.1751 3.45118 13.4916 3.45118 13.6869 3.64645Z"></path></svg>
                {' '}Save changes
              </Button>
            </Form.Group>
          </Form>
          
          Eduflow’s live support chatPREMIUM
          Decide what role types get access to Eduflow’s live support chat

          Institution admins

          Instructors

          Learners
          Delete institution
          Remove all courses and participants from the institution in order to delete it

          Delete institution

        </Tab>
        <Tab eventKey="zapier-api" title="Zapier & API">
          Zapier
          PRO
          Use our Zapier integration to build powerful workflows between Eduflow and thousands of other apps.

          Learn more about Zapier
          API
          PRO
          Leverage our extensive GraphQL API and access your data programmatically on your own terms.

          Documentation
          API Reference
          API Explorer
          Query data from your institution with our API
          Upgrade to our Pro plan to get access
          Upgrade subscription
        </Tab>
        <Tab eventKey="logos-theme" title="Logos & theme">
          Logo
          PRO
          Upload your logo to make Eduflow uniquely yours.

          Big logo
          Used in the institution header. Will render with a max-height of 24px and max-width of 192px. SVG or PNG allowed.
          Upload logo
          HEADER PREVIEW
          Theme
          PRO
          The theme settings will be used throughout the whole institution, but can be overwritten on a course level.
          Font family

          System default
          Accent color (HEX)
          #006CFA
          Border radius
          Sharp
          Soft
          Softer
          Reset to default theme

          Allow instructors to override the theme settings in courses
          When checked, instructors can override font family, accent color and border radius styles in their own courses
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Settings;
