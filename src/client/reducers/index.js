import { combineReducers } from 'redux'
import usersReducer from './usersReducers'
import authReducer from './authReducer'

export default combineReducers({
  users: usersReducer,
  auth: authReducer
})
