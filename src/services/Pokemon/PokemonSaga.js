import {ToastAndroid} from 'react-native';
import {all, put, takeLatest} from 'redux-saga/effects';

import api from '../../common/api/api';
import * as favoritesStorage from '../../common/storage/favorites';
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

function* getAllFavorites() {
  yield put(
    PokemonActions.setLoading({key: 'getAllFavorites', newState: true}),
  );

  const data = yield favoritesStorage.get();
  yield put(
    PokemonActions.setState({
      key: 'allFavorites',
      newState: data,
    }),
  );

  yield put(
    PokemonActions.setLoading({key: 'getAllFavorites', newState: false}),
  );
}

function* addFavourite({payload}) {
  yield put(PokemonActions.setLoading({key: 'addFavourite', newState: true}));
  yield favoritesStorage.add(payload);
  yield put(PokemonActions.getAllFavorites());
  yield put(PokemonActions.setLoading({key: 'addFavourite', newState: false}));

  ToastAndroid.show('Has been added to favorites', ToastAndroid.CENTER);
}

function* removeFavourite({payload}) {
  yield put(
    PokemonActions.setLoading({key: 'removeFavourite', newState: true}),
  );
  yield favoritesStorage.removeOne(payload.name, 'name');
  yield put(PokemonActions.getAllFavorites());
  yield put(
    PokemonActions.setLoading({key: 'removeFavourite', newState: false}),
  );

  ToastAndroid.show('Your pokemon has been eliminated', ToastAndroid.CENTER);
}

function* ActionWatcher() {
  yield takeLatest(PokemonActions.getAll, getAll);
  yield takeLatest(PokemonActions.getAllFavorites, getAllFavorites);
  yield takeLatest(PokemonActions.addFavourite, addFavourite);
  yield takeLatest(PokemonActions.removeFavourite, removeFavourite);
}

export default function* () {
  yield all([ActionWatcher()]);
}
