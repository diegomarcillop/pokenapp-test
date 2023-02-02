import {createSlice} from '@reduxjs/toolkit';
import {asyncActions} from './PokemonActions';

const initialState = {
  loading: {
    getAll: false,
  },
  detail: {},
  all: undefined,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialState,
  reducers: {
    getAll: state => ({...state}),
    setState(state, {payload: {key, newState}}) {
      state[key] = newState;
    },

    setLoading(state, {payload: {key, newState}}) {
      state.loading[key] = newState;
    },
  },
});

const PokemonActions = {...pokemonSlice.actions, ...asyncActions};
const PokemonReducer = pokemonSlice.reducer;

export {PokemonActions, PokemonReducer};
