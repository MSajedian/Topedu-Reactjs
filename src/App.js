import React, { useContext, createContext } from "react";

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

import { setUsernameAction, setUserSurnameAction } from './actions';
import { addItemToInstitutionsAction } from './actions';
import { useSelector, useDispatch } from 'react-redux'

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
    setTimeout(cb, 100);
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
  const userName = useSelector((state) => state.user.userName)
  const dispatch = useDispatch()

  const signin = (email, password, cb) => {
    try {
      fetch(url, {
        credentials: 'include',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "email": email, "password": password }) // body data type must match "Content-Type" header
      })
        .then(res => res.json())
        .then(
          (result) => {
            return checkAuth.signin(() => {
              dispatch(setUsernameAction(result.name))
              dispatch(setUserSurnameAction(result.surname))
              dispatch(addItemToInstitutionsAction(result.institutions))
              // setUserName(result.name);
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
      dispatch(setUsernameAction(null))
      // setUserName(null);
      cb();
    });
  };

  return {
    userName,
    signin,
    signout
  };
}


function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.userName ? (
    <>
      <span>{`Welcome ${auth.userName} `}</span>
      <button
        onClick={() => {
          auth.signout(() => history.push("/login"));
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
        auth.userName ? (
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