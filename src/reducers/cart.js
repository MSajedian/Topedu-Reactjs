import { initialState } from '../store'

const cartReducer = (state = initialState.cart, action) => {
  // state now is this:
  // {
  //   products: [],
  // }

  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      //   let newProducts = state.cart.products.concat(action.payload)
      return {
        // the reducer must be a pure function
        // so we always need to remember to not MUTATE our parameter
        // the state we're given must not change
        ...state,
        // products: state.cart.products.push(action.payload) // SUPER WRONG
        // this will lead to unexpected behavior in your redux store
        // products: state.cart.products.concat(action.payload) // THIS IS VALID
        products: [...state.products, action.payload], // THIS IS VALID
        // do not use: push, splice, sort, reverse
        // instead use: ..., concat, slice, filter, map
        // https://doesitmutate.xyz/
      }

    case 'REMOVE_ITEM_FROM_CART':
      // filter
      // slice
      let newProducts = state.products.filter((book, i) => i !== action.payload)
      //   let newProducts = [
      //     ...state.cart.products.slice(0, action.payload),
      //     ...state.cart.products.slice(action.payload + 1),
      //   ]

      // *** ATTENTION!! WRONG
      //   let newProducts = state.cart.products.splice(action.payload - 1, 1)
      // *** ATTENTION!! WRONG

      return {
        ...state,
        products: newProducts,
      }

    default:
      return state
  }
}

export default cartReducer
