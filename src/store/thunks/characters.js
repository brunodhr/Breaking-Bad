import {
  setCharactersRequest,
  setCharactersSuccess,
  setCharactersError
} from 'store/actions/characters'
import API from 'utils/api'

export const getCharacters = ({ offset }) => async dispatch => {
  dispatch(setCharactersRequest())
  try {
    const response = await API.get(`characters/?limit=8&offset=${offset}`)
    dispatch(setCharactersSuccess(response.data))
  } catch (error) {
    dispatch(setCharactersError(error))
  }
}
