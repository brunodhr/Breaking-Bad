import { toogleSpoiler } from 'store/actions/spoiler'

export const alternateSpoiler = value => async dispatch => {
  dispatch(toogleSpoiler(value))
}
