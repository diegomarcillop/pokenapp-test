import {logger} from 'redux-logger';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './Reducers';
import rootSagas from './Sagas';

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSagas);

export default store;
