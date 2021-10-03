import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import counterReducer from '../reducers/counterReducer';

const rootReducers = combineReducers({
  counter: counterReducer
})

const store = createStore(rootReducers, composeWithDevTools(
  applyMiddleware()
));

export default store;