import { initialState } from '../store'

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        userName: action.payload,
      }
    case 'SET_USERSURNAME':
      return {
        ...state,
        userSurname: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
