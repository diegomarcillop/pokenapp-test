import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Header} from '../../components/Header/Header';
import {InputSearch} from '../../components/InputSearch/InputSearch';

import {PokemonList} from '../../components/List/PokemonList/PokemonList';
import {style} from './FavoritesStyle';

interface Props {
  route: any;
  navigation: any;
}

export const Favorites = ({navigation}: Props) => {
  const {allFavorites} = useSelector((state: any) => state.pokemon);

  return (
    <View style={style.container}>
      <Header
        iconLeft="arrow-left-black"
        onPressLeft={() => navigation.goBack()}
        title="Your Pokemos"
      />
      <InputSearch placeholder="Search your pokemon" />
      <View style={style.content}>
        {allFavorites.length === 0 && (
          <View style={style.feedback}>
            <Text style={style.text}>You have no added Pokemons {':('} </Text>
          </View>
        )}
        <PokemonList items={allFavorites} />
      </View>
    </View>
  );
};
