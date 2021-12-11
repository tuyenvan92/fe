import {combineReducers} from 'redux'
import counterReducer from '../reducers/counterReducer'
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';


import todoReducers from '../reducers/todoReducers'
import globalReducer from '../reducers/globalReducer'

const rootReducers = combineReducers ({
    counter: counterReducer,
    todo: todoReducers,
    global: globalReducer
})
const store = createStore(rootReducers, composeWithDevTools (
    applyMiddleware()
))

export default store; 