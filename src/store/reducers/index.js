import { combineReducers } from 'redux'
import characters from './characters'
import spoiler from './spoiler'

const reducers = combineReducers({
  characters: characters,
  spoiler: spoiler
})

export default reducers
