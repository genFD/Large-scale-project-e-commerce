import { createStore, applyMiddleware } from 'redux';
// import { logger } from 'redux-logger';
import { createLogger } from 'redux-logger';
import rootReducer from '../root-reducer';
import { persistStore } from 'redux-persist';

////////////////////////////////////////
// const middleWares = [logger];
const logger = createLogger();
export const store = createStore(rootReducer, applyMiddleware(logger));

export const persistor = persistStore(store);
