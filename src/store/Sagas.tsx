import {all, fork} from 'redux-saga/effects';

import PokemonSaga from '../services/Pokemon/PokemonSaga';

export default function* rootSagas() {
  yield all([fork(PokemonSaga)]);
}
