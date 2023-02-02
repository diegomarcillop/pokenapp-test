import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SvgUri} from 'react-native-svg';

import useFetchPokemon from '../../../hooks/useFetchPokemon';
import {TypesList} from '../../List/TypesList/TypesList';
import {style} from './PokemonCardStyle';

interface Props {
  url?: string;
  onPress: any;
}

export const PokemonCard = ({url, onPress}: Props) => {
  const {data} = useFetchPokemon(url);

  const getStyle = () => ({
    ...style.container,
    backgroundColor: data?.background,
  });

  return (
    <TouchableOpacity onPress={() => onPress(data)} style={getStyle()}>
      {data?.image && (
        <SvgUri
          width={100}
          height={100}
          uri={data?.image}
          style={style.image}
        />
      )}
      <View style={style.content}>
        <Text style={style.title}>{data?.name}</Text>
        <TypesList types={data?.types || []} />
      </View>
      <View>
        <Text style={style.generation}>{data?.species.generation.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
