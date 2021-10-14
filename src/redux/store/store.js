import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
// import { createLogger } from 'redux-logger';
import rootReducer from '../root-reducer';
import { persistStore } from 'redux-persist';

////////////////////////////////////////
const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// const logger = createLogger();
export const store = createStore(rootReducer, applyMiddleware(logger));

export const persistor = persistStore(store);
