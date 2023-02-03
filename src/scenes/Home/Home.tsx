import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import {InputSearch} from '../../components/InputSearch/InputSearch';

import {PokemonList} from '../../components/List/PokemonList/PokemonList';
import {colors} from '../../style/Index';
import {GenericStyle} from '../../style/GenericStyle';
import {style} from './HomeStyle';

export const Home = () => {
  const navigation = useNavigation();

  const {all, points, loading} = useSelector((state: any) => state.pokemon);

  return (
    <View style={style.container}>
      <View style={style.containerTitle}>
        <View>
          <Text style={style.title}>PokenAPP</Text>
          <Text style={GenericStyle.subtitle}>
            Puntos disponibles:{' '}
            <Text style={GenericStyle.subtitle__success}>{points}pts</Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Favorites' as never)}>
          <Image
            source={require('../../assets/icons/menu.png')}
            style={style.icon}
          />
        </TouchableOpacity>
      </View>
      <InputSearch placeholder="Search your pokemon" />
      <View style={style.content}>
        {loading.getAll && (
          <ActivityIndicator color={colors.blue50} size={30} />
        )}
        <PokemonList items={all} />
      </View>
    </View>
  );
};
