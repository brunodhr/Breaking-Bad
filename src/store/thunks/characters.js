import {
  setCharactersRequest,
  setCharactersSuccess,
  setCharactersError
} from 'store/actions/characters'
import API from 'utils/api'

export const getCharacters = () => async dispatch => {
  dispatch(setCharactersRequest())
  try {
    const response = await API.get('characters')
    dispatch(setCharactersSuccess(response.data))
  } catch (error) {
    dispatch(setCharactersError(error))
  }
}
