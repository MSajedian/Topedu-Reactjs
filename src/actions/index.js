export const addItemToInstitutionsAction = (book) => {
  return {
    type: 'ADD_ITEM_TO_INSTITUTIONS',
    payload: book,
  }
}

export const removeItemFromInstitutionsAction = (index) => ({
  type: 'REMOVE_ITEM_FROM_INSTITUTIONS',
  payload: index,
})

export const setUsernameAction = (name) => ({
  type: 'SET_USERNAME',
  payload: name,
})

export const setUserSurnameAction = (name) => ({
  type: 'SET_USERSURNAME',
  payload: name,
})
