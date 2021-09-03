// what the initial state of the application will be?

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import institutionsReducer from '../reducers/institution'
// import bookReducer from '../reducers/book'
import userReducer from '../reducers/user'

import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  user: {
    userName: '',
    userSurname: '',
  },
  institutions: {
    institutionNames: [],
  },
  // books: {
  //   stock: [],
  //   error: false,
  //   loading: false,
  // },
}

const bigReducer = combineReducers({
  user: userReducer,
  institutions: institutionsReducer,
  // books: bookReducer,
})

// splitting up the reducers will make them independent and not-aware any more of the big picture
// the state argument every reducer is now receiving is just their slice of the cake

const configureStore = () => createStore(bigReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default configureStore
