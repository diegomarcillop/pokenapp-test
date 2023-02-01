import React from 'react';
import {Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {Header} from '../../components/Header/Header';

import {TypesList} from '../../components/List/TypesList/TypesList';
import {style} from './PokemonDetailStyle';

interface Props {
  route: any;
  navigation: any;
}

export const PokemonDetail = ({route, navigation}: Props) => {
  const params = route.params;

  const handleFavoritePokemon = () => {};

  return (
    <View style={{...style.container, backgroundColor: params.background}}>
      <Header
        iconLeft="arrow-left"
        onPressLeft={() => navigation.goBack()}
        iconRight="heart-line"
        onPressRight={handleFavoritePokemon}
      />
      <View style={style.information}>
        <Text style={style.title}>{params.name}</Text>
        <TypesList types={params?.types || []} />
      </View>
      <View style={style.content}>
        <SvgUri
          width={250}
          height={250}
          uri={params?.image}
          style={style.image}
        />
      </View>
    </View>
  );
};
