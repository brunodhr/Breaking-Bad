const initialState = {
  loading: false,
  characters: [],
  error: ''
}

const characters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHARACTERS_REQUEST':
      return { ...state, loading: true }
    case 'SET_CHARACTERS_SUCCESS':
      return { ...state, loading: false, characters: action.payload }
    case 'SET_CHARACTERS_ERROR':
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export default characters
