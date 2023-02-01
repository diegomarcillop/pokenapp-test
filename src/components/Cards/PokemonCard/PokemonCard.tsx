/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SvgUri} from 'react-native-svg';

import api from '../../../common/api/api';
import {getColorType} from '../../../common/utils/get-type-color';
import {TypesList} from '../../List/TypesList/TypesList';
import {style} from './PokemonCardStyle';

interface Props {
  url?: string;
  onPress: any;
}

interface Character {
  id: number;
  image: string;
  name: string;
  types: Array<{
    type: any;
  }>;
  typePrimary: any;
  background: string;
  details: any;
}

export const PokemonCard = ({url, onPress}: Props) => {
  const [characterInformation, setCharacterInformation] = useState<Character>();

  useEffect(() => {
    getPokemonForId();
  }, []);

  const getPokemonForId = async () => {
    const response = await api.get('', undefined, url);
    const data: any = response.payload;

    setCharacterInformation({
      id: data.id,
      name: data.name,
      types: Object.values(data.types),
      image: data?.sprites?.other?.dream_world?.front_default,
      typePrimary: characterInformation?.types[0].type.name,
      background: getColorType(characterInformation?.types[0].type.name),
      details: data,
    });
  };

  const getStyle = () => ({
    backgroundColor: characterInformation?.background,
    ...style.container,
  });

  return (
    <TouchableOpacity
      onPress={() => onPress(characterInformation)}
      style={getStyle()}>
      {characterInformation?.image && (
        <SvgUri
          width={100}
          height={100}
          uri={characterInformation?.image}
          style={style.image}
        />
      )}
      <View style={style.content}>
        <Text style={style.title}>{characterInformation?.name}</Text>
        <TypesList types={characterInformation?.types || []} />
      </View>
    </TouchableOpacity>
  );
};
