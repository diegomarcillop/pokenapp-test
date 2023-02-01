import {all, put, takeLatest} from 'redux-saga/effects';

import api from '../../common/api/api';
import {PokemonActions} from './PokemonSlice';

function* getAll({payload}) {
  yield put(PokemonActions.setLoading({key: 'getAll', newState: true}));

  const response = yield api.get('/pokemon', payload);

  if (response.ok) {
    yield put(
      PokemonActions.setState({key: 'all', newState: response.payload.results}),
    );
  }

  yield put(PokemonActions.setLoading({key: 'getAll', newState: false}));
}

function* ActionWatcher() {
  yield takeLatest(PokemonActions.getAll, getAll);
}

export default function* () {
  yield all([ActionWatcher()]);
}
