import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import counterReducer from '../reducers/counterReducer';
import todoReducer from '../reducers/todoReducer';

const rootReducers = combineReducers({
  counter: counterReducer,
  todo: todoReducer
})

const store = createStore(rootReducers, composeWithDevTools(
  applyMiddleware()
));

export default store;