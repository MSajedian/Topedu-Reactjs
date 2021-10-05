import React, { createContext, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from "react-router-dom";
import { setUsernameAction, setUserSurnameAction } from '../../actions';

const BackendURL = process.env.REACT_APP_BACKEND_CLOUD_URL || process.env.REACT_APP_BACKEND_LOCAL_URL

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

export default function UseAuth() {
    return useContext(authContext);
}

function useProvideAuth() {
    const userName = useSelector((state) => state.user.userName)
    const dispatch = useDispatch()

    const signin = (email, password, cb) => {
        try {
            fetch(BackendURL + "/users/login", {
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
    let auth = UseAuth();
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

// export function GetNewAccessToken() {
//     let history = useHistory();
//     let auth = UseAuth();

//     try {
//         fetch(BEURL + "/users/refreshToken", {
//             credentials: 'include',
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//         })
//             .then(res => {
//                 console.log('res:', res)
//                 if (res.status(401)) { auth.signout(() => history.push("/login")) }
//             })
//     } catch (error) {
//         console.log('error:', error)
//     }
// }