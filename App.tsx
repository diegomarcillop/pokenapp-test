import React from 'react';
import {Provider} from 'react-redux';

import {Main} from './src/scenes/Main';
import initStore from './src/store/Store';

export const store = initStore;

export const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
