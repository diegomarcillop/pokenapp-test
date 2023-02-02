import React from 'react';
import {Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {useSelector} from 'react-redux';
import {Header} from '../../components/Header/Header';

import {TypesList} from '../../components/List/TypesList/TypesList';
import {CharacteristicsPokemon} from '../../components/CharacteristicsPokemon/CharacteristicsPokemon';
import {style} from './PokemonDetailStyle';

interface Props {
  route: any;
  navigation: any;
}

export const PokemonDetail = ({navigation}: Props) => {
  const {detail} = useSelector((state: any) => state.pokemon);

  const handleFavoritePokemon = () => {};

  return (
    <View style={{...style.container, backgroundColor: detail.background}}>
      <Header
        iconLeft="arrow-left"
        onPressLeft={() => navigation.goBack()}
        iconRight="heart-line"
        onPressRight={handleFavoritePokemon}
      />
      <View style={style.information}>
        <Text style={style.title}>{detail.name}</Text>
        <TypesList types={detail?.types || []} />
      </View>
      <View style={style.content}>
        <SvgUri
          width={250}
          height={250}
          uri={detail?.image}
          style={style.image}
        />
        <CharacteristicsPokemon />
      </View>
    </View>
  );
};
