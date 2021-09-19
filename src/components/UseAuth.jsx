import React, { useContext, createContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { setUsernameAction, setUserSurnameAction } from '../actions';
import { useSelector, useDispatch } from 'react-redux'

const BEURL = process.env.REACT_APP_FE_URL || "http://localhost:3001"

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

export default function useAuth() {
    return useContext(authContext);
}

function useProvideAuth() {
    const userName = useSelector((state) => state.user.userName)
    const dispatch = useDispatch()

    const signin = (email, password, cb) => {
        try {
            fetch(BEURL + "/users/login", {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json', 'Accepts': 'application/json' },
                body: JSON.stringify({ "email": email, "password": password }) // body data type must match "Content-Type" header
            })
                .then(res => res.json())
                .then((response) => {
                    console.log('response:', response)
                    dispatch(setUsernameAction(response.name))
                    dispatch(setUserSurnameAction(response.surname))
                    // dispatch(addItemToInstitutionsAction(response.institutions))
                    // setUserName(response.name);
                    return (cb())
                })
        } catch (error) {
            console.log('error:', error)
        }
    };

    const signout = (cb) => {
        dispatch(setUsernameAction(null))
        dispatch(setUserSurnameAction(null))
        // dispatch(removeItemFromInstitutionsAction(null))
        // setUserName(null);
        return (cb())
    };

    return {
        userName,
        signin,
        signout
    };
}

export function PrivateRoute({ children, ...rest }) {
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