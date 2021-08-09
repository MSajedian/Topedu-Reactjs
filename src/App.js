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
        </Switch>
      </Router>
    );
  }
}


export default App;
