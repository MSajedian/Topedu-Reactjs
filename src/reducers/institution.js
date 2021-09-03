import { initialState } from '../store'

const institutionsReducer = (state = initialState.institutions, action) => {
  // state now is this:
  // {
  //   institutionNames: [],
  // }

  switch (action.type) {
    case 'ADD_ITEM_TO_INSTITUTIONS':
      //   let newInstitutionNames = state.institutions.institutionNames.concat(action.payload)
      return {
        // the reducer must be a pure function
        // so we always need to remember to not MUTATE our parameter
        // the state we're given must not change
        ...state,
        // institutionNames: state.institutions.institutionNames.push(action.payload) // SUPER WRONG
        // this will lead to unexpected behavior in your redux store
        // institutionNames: state.institutions.institutionNames.concat(action.payload) // THIS IS VALID
        institutionNames: [...state.institutionNames, action.payload], // THIS IS VALID
        // do not use: push, splice, sort, reverse
        // instead use: ..., concat, slice, filter, map
        // https://doesitmutate.xyz/
      }

    case 'REMOVE_ITEM_FROM_INSTITUTIONS':
      // filter
      // slice
      let newInstitutionNames = state.institutionNames.filter((institutionName, i) => i !== action.payload)
      //   let newInstitutionNames = [
      //     ...state.institutions.institutionNames.slice(0, action.payload),
      //     ...state.institutions.institutionNames.slice(action.payload + 1),
      //   ]

      // *** ATTENTION!! WRONG
      //   let newInstitutionNames = state.institutions.institutionNames.splice(action.payload - 1, 1)
      // *** ATTENTION!! WRONG

      return {
        ...state,
        institutionNames: newInstitutionNames,
      }

    default:
      return state
  }
}

export default institutionsReducer
