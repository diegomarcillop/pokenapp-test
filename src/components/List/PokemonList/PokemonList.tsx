import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {PokemonActions} from '../../../services/Pokemon/PokemonSlice';
import {PokemonCard} from '../../Cards/PokemonCard/PokemonCard';
import {style} from './PokemonListStyle';

interface Props {
  items: Array<{name: string; url: string}>;
}

export const PokemonList = ({items}: Props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleDetail = (data: any) => {
    dispatch(
      PokemonActions.setState({
        key: 'detail',
        newState: data,
      }),
    );
    navigation.navigate('Detail' as never);
  };

  return (
    <FlatList
      style={style.scrollView}
      contentContainerStyle={style.container}
      scrollEnabled={true}
      nestedScrollEnabled={true}
      data={items}
      renderItem={({item}) => (
        <View style={style.card}>
          <PokemonCard url={item.url} onPress={handleDetail} />
        </View>
      )}
      keyExtractor={item => item.name}
    />
  );
};
