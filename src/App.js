import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProvideAuth, PrivateRoute } from "./components/auth/UseAuth";

import Main from './components/Main'
import LogIn from './components/LogIn'
import Signup from './components/Signup'
import Home from './components/Home'
import Courses from './components/Courses'
import CodePlayground from './components/Courses/CodePlayground'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <ProvideAuth>
      <Router>
          <Switch>
            <Route exact path="/"> <Main /> </Route>
            <Route path="/login"> <LogIn /> </Route>
            <Route path="/signup"> <Signup /> </Route>
            <PrivateRoute path="/home"> <Home /> </PrivateRoute>
            <PrivateRoute path="/courses/:courseId"> <Courses /> </PrivateRoute>
            <PrivateRoute path="/code-playground"> <CodePlayground /> </PrivateRoute>
            <PrivateRoute path="/dashboard"> <Dashboard /> </PrivateRoute>
          </Switch>
      </Router>
    </ProvideAuth >
  );
}
