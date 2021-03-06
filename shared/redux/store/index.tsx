import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from '../reducers';

let middlewares = [thunkMiddleware];
if (__DEV__) {
  const loggerMiddleware = createLogger();
  middlewares = [...middlewares, loggerMiddleware];
}

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
