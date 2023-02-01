/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SvgUri} from 'react-native-svg';

import api from '../../../common/api/api';
import {getColorType} from '../../../common/utils/get-type-color';
import {style} from './PokemonCardStyle';

interface Props {
  url?: string;
}

interface Character {
  image: string;
  name: string;
  types: Array<{
    type: any;
  }>;
  typePrimary: any;
  background: string;
}

export const PokemonCard = ({url}: Props) => {
  const [characterInformation, setCharacterInformation] = useState<Character>();

  useEffect(() => {
    getPokemonForId();
  }, []);

  const getPokemonForId = async () => {
    const response = await api.get('', undefined, url);
    const data: any = response.payload;

    setCharacterInformation({
      name: data.name,
      types: Object.values(data.types),
      image: data?.sprites?.other?.dream_world?.front_default,
      typePrimary: characterInformation?.types[0].type.name,
      background: getColorType(characterInformation?.types[0].type.name),
    });
  };
  return (
    <TouchableOpacity
      style={{
        backgroundColor: characterInformation?.background,
        ...style.container,
      }}>
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
        <View style={style.types}>
          {characterInformation?.types.map((type: any, index) => (
            <View key={index} style={style.containerType}>
              <Text style={style.textType}>{type.type.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};
