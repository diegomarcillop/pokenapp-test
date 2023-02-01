import React from 'react';
import {FlatList, View} from 'react-native';

import {PokemonCard} from '../../Cards/PokemonCard/PokemonCard';
import {style} from './PokemonListStyle';

interface Props {
  items: Array<{name: string; url: string}>;
}

export const PokemonList = ({items}: Props) => {
  return (
    <FlatList
      style={style.scrollView}
      contentContainerStyle={style.container}
      scrollEnabled={true}
      nestedScrollEnabled={true}
      data={items}
      renderItem={({item}) => (
        <View style={style.card}>
          <PokemonCard url={item.url} />
        </View>
      )}
      keyExtractor={item => item.name}
    />
  );
};
