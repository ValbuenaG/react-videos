import data from './data'
import modal from './modal'
import {combineReducers} from 'redux-immutable'
import isLoading from './loading'

const rootReducer = combineReducers({
    data,
    modal,
    isLoading
})

export default rootReducer