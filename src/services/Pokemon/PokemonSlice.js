import {createSlice} from '@reduxjs/toolkit';
import {asyncActions} from './PokemonActions';

const initialState = {
  loading: {
    getAll: false,
  },
  points: 3000,
  defaultPoints: 3000,
  detail: {},
  all: undefined,
  allTeam: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialState,
  reducers: {
    getAll: state => ({...state}),
    getAllTeam: state => ({...state}),
    addPokemon: state => ({...state}),
    removePokemon: state => ({...state}),

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
