export const setCharactersRequest = () => ({
  type: 'SET_CHARACTERS_REQUEST'
})

export const setCharactersSuccess = characters => ({
  type: 'SET_CHARACTERS_SUCCESS',
  payload: characters
})

export const setCharactersError = error => ({
  type: 'SET_CHARACTERS_ERROR',
  payload: error
})
