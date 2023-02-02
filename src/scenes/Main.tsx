import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {PokemonActions} from '../services/Pokemon/PokemonSlice';
import {Favorites} from './Favorites/Favorites';
import {Home} from './Home/Home';
import {PokemonDetail} from './PokemonDetail/PokemonDetail';

const Stack = createStackNavigator();

export const Main = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(
      PokemonActions.getAll({
        limit: 200,
        offset: 0,
      }),
    );
    dispath(PokemonActions.getAllFavorites());
  }, [dispath]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={PokemonDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
