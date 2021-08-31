import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  // useLocation
} from "react-router-dom";

import Main from './components/Main'
import LogIn from './components/LogIn'
import Signup from './components/Signup'
import Home from './components/Home'
import Courses from './components/Courses'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />
          <hr />
          <Switch>
            <Route exact path="/"> <Main /> </Route>
            <Route path="/login"> <LogIn /> </Route>
            <Route path="/signup"> <Signup /> </Route>
            <PrivateRoute path="/home"> <Home /> </PrivateRoute>
            <PrivateRoute path="/courses"> <Courses /> </PrivateRoute>
            <PrivateRoute path="/dashboard"> <Dashboard /> </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth >
  );
}

const checkAuth = {
  isAuthenticated: false,
  signin(cb) {
    checkAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    checkAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}

let url = "http://localhost:3001/users/login";

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (email, password, cb) => {
    try {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "email": email, "password": password }) // body data type must match "Content-Type" header
      })
        .then(res => res.json())
        .then(
          (result) => {
            console.log('result:', result)
            return checkAuth.signin(() => {
              setUser(email);
              cb();
            });
          }
        )
    } catch (error) {
      console.log('error:', error)
    }

  };

  const signout = (cb) => {
    return checkAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <>
      <span>{`Welcome ${auth.user} `}</span>
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}