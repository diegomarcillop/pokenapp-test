import createAction from '../../common/utils/create-actions';

export const asyncActions = createAction({
  pokemon: ['getAll', 'setState', 'addPokemon', 'removePokemon', 'getAllTeam'],
});
