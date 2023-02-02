import {combineReducers} from '@reduxjs/toolkit';

import {modalReducer} from '../services/Modal/ModalSlice';
import {PokemonReducer} from '../services/Pokemon/PokemonSlice';

const appReducers = combineReducers({
  pokemon: PokemonReducer,
  modal: modalReducer,
});

const rootReducers = (state, action) => {
  if (action.type === 'auth/logout') {
    state = undefined;
  }

  return appReducers(state, action);
};

export default rootReducers;
