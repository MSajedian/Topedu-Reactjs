import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProvideAuth, PrivateRoute } from "./components/auth/UseAuth";

import Main from './components/main/Main'
import Login from './components/login/Login'
import Signup from './components/Signup'
import Join from './components/Join'
import Institution from './components/institution/Institution'
// import CodePlayground from './components/courses/CodePlayground'
import Courses from './components/courses/Courses'

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/"> <Main /> </Route>
          <Route exact path="/login"> <Login /> </Route>
          <Route path="/signup"> <Signup /> </Route>
          <Route path="/join/course/:courseId/:userId"> <Join /> </Route>
          <Route path="/join/institution/:institutionId/:userId"> <Join /> </Route>
          <PrivateRoute path="/institution"> <Institution /> </PrivateRoute>
          <PrivateRoute path="/courses/:courseId"> <Courses /> </PrivateRoute>
          {/* <PrivateRoute path="/code-playground"> <CodePlayground /> </PrivateRoute> */}
        </Switch>
      </Router>
    </ProvideAuth >
  );
}