import { initialState } from '../store'

const bookReducer = (state = initialState.books, action) => {
  // console.log('state:', state)
  // console.log('initialState.books:', initialState.books)
  // console.log('action.type:', action.type)
  // console.log('****************')
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        ...state,
        stock: action.payload,
      }

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      }

    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      }

    default:
      return state
  }
}

export default bookReducer
