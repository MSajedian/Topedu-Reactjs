// what the initial state of the application will be?

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import institutionsReducer from '../reducers/institution'
import userReducer from '../reducers/user'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  user: {
    userName: '',
    userSurname: '',
  },
  institutions: {
    institutionNames: [],
  }
}

const bigReducer = combineReducers({
  user: userReducer,
  institutions: institutionsReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, bigReducer)
export const store = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(thunk)))
export const persistor = persistStore(store)

// const configureStore = () => createStore(bigReducer, initialState, composeEnhancers(applyMiddleware(thunk)))
// export default configureStore
