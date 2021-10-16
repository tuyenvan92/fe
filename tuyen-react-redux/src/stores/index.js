import {combineReducers} from 'redux'
import counterReducer from '../reducers/counterReducer'
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducers = combineReducers ({
    counter: counterReducer
})
const store = createStore(rootReducers, composeWithDevTools (
    applyMiddleware()
))

export default rootReducers;