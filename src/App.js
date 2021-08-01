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

class App extends Component {
  render() {
    return (
      <Router>
        

        {/* <Route exact path="/">

          
        </Route> */}

        {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/log-in">Log in</Link>
              </li>
            </ul>
          </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        {/* <Route exact path="/users">
              <Users />
            </Route> */}


        <Switch>
          <Route exact path="/">
            <HomePage />
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
