import {
  setCharactersRequest,
  setCharactersSuccess,
  setCharactersError
} from 'store/actions/characters'
import API from 'utils/api'

export const getCharacters = ({ limit, offset }) => async dispatch => {
  dispatch(setCharactersRequest())
  try {
    const response = await API.get(
      `characters/?limit=${limit}&offset=${offset}`
    )
    dispatch(setCharactersSuccess(response.data))
  } catch (error) {
    dispatch(setCharactersError(error))
  }
}
