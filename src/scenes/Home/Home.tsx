import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import {InputSearch} from '../../components/InputSearch/InputSearch';

import {PokemonList} from '../../components/List/PokemonList/PokemonList';
import {style} from './HomeStyle';

export const Home = () => {
  const navigation = useNavigation();

  const {all} = useSelector((state: any) => state.pokemon);

  return (
    <View style={style.container}>
      <View style={style.containerTitle}>
        <Text style={style.title}>PokenAPP</Text>
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
        <PokemonList items={all} />
      </View>
    </View>
  );
};
