import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {PokemonActions} from '../services/Pokemon/PokemonSlice';
import {Home} from './Home/Home';

export const Main = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(
      PokemonActions.getAll({
        limit: 20,
        offset: 0,
      }),
    );
  }, [dispath]);

  return (
    <View>
      <Home />
    </View>
  );
};
