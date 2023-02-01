import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, View} from 'react-native';

import {PokemonCard} from '../../Cards/PokemonCard/PokemonCard';
import {style} from './PokemonListStyle';

interface Props {
  items: Array<{name: string; url: string}>;
}

export const PokemonList = ({items}: Props) => {
  const navigation = useNavigation();

  return (
    <FlatList
      style={style.scrollView}
      contentContainerStyle={style.container}
      scrollEnabled={true}
      nestedScrollEnabled={true}
      data={items}
      renderItem={({item}) => (
        <View style={style.card}>
          <PokemonCard
            url={item.url}
            onPress={(data: any) =>
              navigation.navigate('Detail' as never, data as never)
            }
          />
        </View>
      )}
      keyExtractor={item => item.name}
    />
  );
};
