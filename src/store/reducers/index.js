import { combineReducers } from 'redux'
import characters from './characters'

const reducers = combineReducers({
  characters: characters
})

export default reducers
