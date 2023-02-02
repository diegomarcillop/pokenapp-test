import {all, put, takeLatest} from 'redux-saga/effects';

import api from '../../common/api/api';
import * as TeamStorage from '../../common/storage/team';
import {modalActions} from '../Modal/ModalSlice';
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

function* getAllTeam() {
  yield put(PokemonActions.setLoading({key: 'getAllTeam', newState: true}));

  const data = yield TeamStorage.get();
  yield put(
    PokemonActions.setState({
      key: 'allFavorites',
      newState: data,
    }),
  );

  yield put(PokemonActions.setLoading({key: 'getAllTeam', newState: false}));
}

function* addPokemon({payload}) {
  yield put(PokemonActions.setLoading({key: 'addPokemon', newState: true}));

  //validations
  const evolvesSpecies = payload.detail.species.evolves_from_species;
  console.log(evolvesSpecies);

  //validations

  yield TeamStorage.add(payload.values);
  yield put(PokemonActions.getAllTeam());
  yield put(PokemonActions.setLoading({key: 'addPokemon', newState: false}));

  yield put(
    modalActions.setModal({
      keyModal: 'alertMessage',
      visible: true,
      params: {
        title: 'Added a new Pokemon to your team!',
        typeModal: 'success',
      },
    }),
  );
}

function* removeFavourite({payload}) {
  yield put(
    PokemonActions.setLoading({key: 'removeFavourite', newState: true}),
  );
  yield TeamStorage.removeOne(payload.name, 'name');
  yield put(PokemonActions.getAllTeam());
  yield put(
    PokemonActions.setLoading({key: 'removeFavourite', newState: false}),
  );

  yield put(
    modalActions.setModal({
      keyModal: 'alertMessage',
      visible: true,
      params: {
        title: 'Your pokemon has been eliminated',
        type: 'danger',
      },
    }),
  );
}

function* ActionWatcher() {
  yield takeLatest(PokemonActions.getAll, getAll);
  yield takeLatest(PokemonActions.getAllTeam, getAllTeam);
  yield takeLatest(PokemonActions.addPokemon, addPokemon);
  yield takeLatest(PokemonActions.removeFavourite, removeFavourite);
}

export default function* () {
  yield all([ActionWatcher()]);
}
