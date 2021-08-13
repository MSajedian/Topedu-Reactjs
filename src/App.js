import { Component } from 'react';
// import { Nav, Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from "react-router-dom";
import LogInPage from './components/LogInPage'
import HomePage from './components/HomePage'
import InstitutionPage from './components/InstitutionPage'
import Dashboard from './components/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/institution">
            <InstitutionPage />
          </Route>
          <Route exact path="/log-in">
            <LogInPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    );
  }
}


export default App;
