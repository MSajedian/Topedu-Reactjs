export const getBooksAction = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: 'SET_LOADING',
        payload: true,
      })
      let resp = await fetch('https://striveschool-api.herokuapp.com/food-books')
      // console.log(getState())
      if (resp.ok) {
        let books = await resp.json()
        dispatch({
          type: 'GET_BOOKS',
          payload: books,
        })
        dispatch({
          type: 'SET_LOADING',
          payload: false,
        })
        dispatch({
          type: 'SET_ERROR',
          payload: false,
        })
      } else {
        console.log('error')
        dispatch({
          type: 'SET_LOADING',
          payload: false,
        })
        dispatch({
          type: 'SET_ERROR',
          payload: true,
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: 'SET_LOADING',
        payload: false,
      })
      dispatch({
        type: 'SET_ERROR',
        payload: true,
      })
    }
  }
}

export const addItemToCartAction = (book) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: book,
  }
}

export const removeItemFromCartAction = (index) => ({
  type: 'REMOVE_ITEM_FROM_CART',
  payload: index,
})

export const setUsernameAction = (name) => ({
  type: 'SET_USERNAME',
  payload: name,
})
