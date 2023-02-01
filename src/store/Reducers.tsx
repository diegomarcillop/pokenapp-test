import {combineReducers} from '@reduxjs/toolkit';

import {PokemonReducer} from '../services/Pokemon/PokemonSlice';

const appReducers = combineReducers({
  pokemon: PokemonReducer,
});

const rootReducers = (state: any, action: any) => {
  if (action.type === 'auth/logout') {
    state = undefined;
  }

  return appReducers(state, action);
};

export default rootReducers;
