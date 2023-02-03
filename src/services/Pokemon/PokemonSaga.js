/* eslint-disable curly */
import {all, put, select, takeLatest} from 'redux-saga/effects';

import api from '../../common/api/api';
import * as TeamStorage from '../../common/storage/team';
import {modalActions} from '../Modal/ModalSlice';
import {PokemonActions} from './PokemonSlice';

const titles = {
  add: 'Added a new Pokemon to your team!',
  remove: 'Your pokemon has been eliminated',
  ready_evolution: 'You already have a species of the same evolution.',
  ready_type: 'Already have species of the same type in the team',
  max_points: 'You exceed the maximum points',
};

const INITAL_STATS = [
  {
    base_stat: 0,
    stat: {
      name: 'attack',
    },
  },
  {
    base_stat: 0,
    stat: {
      name: 'defense',
    },
  },
  {
    base_stat: 0,
    stat: {
      name: 'speed',
    },
  },
];

function* getAll({payload}) {
  yield put(PokemonActions.setLoading({key: 'getAll', newState: true}));

  const response = yield api.get('/pokemon', payload);

  if (response.ok) {
    let newState = response.payload.results;
    yield put(PokemonActions.setState({key: 'all', newState}));
  }

  yield put(PokemonActions.setLoading({key: 'getAll', newState: false}));
}

function* getAllTeam() {
  yield put(PokemonActions.setLoading({key: 'getAllTeam', newState: true}));

  const newState = yield TeamStorage.get();
  yield put(PokemonActions.setState({key: 'allTeam', newState}));

  yield calculePoints();
  yield calculeResume();
  yield put(PokemonActions.setLoading({key: 'getAllTeam', newState: false}));
}

function* addPokemon({payload}) {
  yield put(PokemonActions.setLoading({key: 'addPokemon', newState: true}));

  const {allTeam, points} = yield select(state => state.pokemon);
  let modal = {type: 'danger'};

  //validations
  const evolution = payload.detail.species.evolution_chain;
  const newPoints = points - payload.detail.totalStats;
  const types = payload.detail.details.types;
  const isExistsEvolution = allTeam.find(
    e => e?.evolution_chain.url === evolution?.url,
  );

  //opt
  const isExistsType = allTeam.find(
    e =>
      e.types.filter(type =>
        types.find(item => item.type.name === type.type.name),
      ).length > 0,
  );

  //validations
  if (!isExistsEvolution && !isExistsType && newPoints >= 0) {
    yield TeamStorage.add({
      ...payload.values,
      evolution_chain: evolution,
      totalStats: payload.detail.totalStats,
      types,
      stats: payload.detail?.details.stats,
      region: payload.detail?.generation.main_region.name,
    });

    yield put(PokemonActions.getAllTeam());
    yield put(PokemonActions.setLoading({key: 'addPokemon', newState: false}));

    modal = {title: titles.add, type: 'success'};
  } else {
    let title = isExistsEvolution ? titles.ready_evolution : titles.ready_type;
    if (newPoints < 0) title = titles.max_points;

    modal = {title};
  }

  yield put(
    modalActions.setModal({
      keyModal: 'alertMessage',
      visible: true,
      params: modal,
    }),
  );
  yield calculePoints();
  yield calculeResume();
}

function* removePokemon({payload}) {
  yield put(PokemonActions.setLoading({key: 'removePokemon', newState: true}));
  yield TeamStorage.removeOne(payload.name, 'name');
  yield put(PokemonActions.getAllTeam());
  yield put(PokemonActions.setLoading({key: 'removePokemon', newState: false}));

  yield put(
    modalActions.setModal({
      keyModal: 'alertMessage',
      visible: true,
      params: {
        title: titles.remove,
        type: 'danger',
      },
    }),
  );
  yield calculePoints();
  yield calculeResume();
}

function* calculePoints() {
  const {allTeam, defaultPoints} = yield select(state => state.pokemon);

  let total = 0;
  allTeam?.forEach(e => {
    total = total + e.totalStats;
  });

  total = defaultPoints - total;
  yield put(PokemonActions.setState({key: 'points', newState: total}));
}

function* calculeResume() {
  const {allTeam} = yield select(state => state.pokemon);
  let resume = INITAL_STATS;
  const regions = [];

  allTeam?.forEach(e => {
    resume.map((item, index) => {
      item.base_stat = item.base_stat + e.stats[index].base_stat;
    });

    if (!regions.find(reg => reg === e.region)) {
      regions.push(e.region);
    }
  });

  resume.map(item => {
    item.base_stat = Math.round(item.base_stat / allTeam.length);
  });

  yield put(
    PokemonActions.setState({
      key: 'resume',
      newState: {
        stats: resume,
        regions,
      },
    }),
  );
}

function* ActionWatcher() {
  yield takeLatest(PokemonActions.getAll, getAll);
  yield takeLatest(PokemonActions.getAllTeam, getAllTeam);
  yield takeLatest(PokemonActions.addPokemon, addPokemon);
  yield takeLatest(PokemonActions.removePokemon, removePokemon);
}

export default function* () {
  yield all([ActionWatcher()]);
}
