import { Component } from 'react';
// import { Nav, Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from "react-router-dom";
import LogIn from './components/LogIn'
import Main from './components/Main'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Courses from './components/Courses'
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/"> <Main /> </Route>
          <Route exact path="/home"> <Home /> </Route>
          <Route exact path="/log-in"> <LogIn /> </Route>
          <Route path="/dashboard"> <Dashboard /> </Route>
          <Route path="/courses"> <Courses /> </Route>
          <Route path="/test"> <Test /> </Route>
        </Switch>
      </Router>
    );
  }
}


export default App;
