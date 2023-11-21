import { combineReducers } from 'redux'
import cartReducer from './cart/slice'

export const rootReducer = combineReducers({ cartReducer })
