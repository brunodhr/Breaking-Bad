const initialState = {
  spoiler: false
}

const spoiler = (state = initialState, action) => {
  switch (action.type) {
    case 'TOOGLE_SPOILER':
      return { ...state, spoiler: action.payload }

    default:
      return state
  }
}

export default spoiler
