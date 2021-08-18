import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Participants from "./Participants";
import CoursesOfDashboard from "./CoursesOfDashboard";
import Subscription from "./Subscription";
import Settings from "./Settings";
// import Topbar from "./Topbar";

const Content = ({ sidebarIsOpen, toggleSidebar }) => {
  let { path } = useRouteMatch();
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": sidebarIsOpen })}
    >
      {/* <Topbar toggleSidebar={toggleSidebar} /> */}
      <Switch>
        <Route exact path={path} component={() => ""} />
        <Route exact path={`${path}/participants`} component={Participants} />
        <Route exact path={`${path}/courses-of-dashboard`} component={CoursesOfDashboard} />
        <Route exact path={`${path}/subscription`} component={Subscription} />
        <Route exact path={`${path}/settings`} component={Settings} />
        <Route exact path={`${path}/notifications`} component={() => "notifications"} />
        <Route exact path={`${path}/user-settings`} component={() => "user-settings"} />
        <Route exact path={`${path}/feedback-roadmap`} component={() => "feedback-roadmap"} />
        <Route exact path={`${path}/help-center`} component={() => "help-center"} />
        <Route exact path={`${path}/support-chat`} component={() => "support-chat"} />
        <Route exact path={`${path}/log-out`} component={() => "log-out"} />
      </Switch>
    </Container>
  );
}
export default Content;
