import { combineReducers } from "redux"
import userReducer from './auth'

const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer