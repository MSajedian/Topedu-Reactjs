import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProvideAuth, PrivateRoute } from "./components/auth/UseAuth";

import Main from './components/main/Main'
import LogIn from './components/LogIn'
import Signup from './components/Signup'
import Join from './components/Join'
import Home from './components/home/Home'
import Courses from './components/courses/Courses'
import CodePlayground from './components/courses/CodePlayground'

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/"> <Main /> </Route>
          <Route path="/login"> <LogIn /> </Route>
          <Route path="/signup"> <Signup /> </Route>
          <Route path="/join/:courseId/:userId"> <Join /> </Route>
          <PrivateRoute path="/home"> <Home /> </PrivateRoute>
          <PrivateRoute path="/courses/:courseId"> <Courses /> </PrivateRoute>
          <PrivateRoute path="/code-playground"> <CodePlayground /> </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth >
  );
}