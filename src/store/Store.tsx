import {logger} from 'redux-logger';
import {getDefaultMiddleware, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './Reducers';
import rootSagas from './Sagas';

let sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    serializableCheck: false,
    immutableCheck: false,
  })
    .concat(sagaMiddleware)
    .concat(logger),
];

const store = configureStore({
  reducer: rootReducers,
  middleware,
});

sagaMiddleware.run(rootSagas);

export default store;
