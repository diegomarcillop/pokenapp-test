import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Fuse from 'fuse.js';

import {InputSearch} from '../../components/InputSearch/InputSearch';
import {PokemonList} from '../../components/List/PokemonList/PokemonList';
import {colors} from '../../style/Index';
import {GenericStyle} from '../../style/GenericStyle';
import {style} from './HomeStyle';

const options = {
  includeScore: false,
  // Search in `author` and in `tags` array
  keys: ['name'],
};

export const Home = () => {
  const {all, points, loading} = useSelector((state: any) => state.pokemon);

  const navigation = useNavigation();
  const [search, setSearch] = useState<string>();
  const [listSearch, setListSearch] = useState<any>();

  const handleSearch = (value: string) => {
    const fuse = new Fuse(all, options);
    const result = fuse.search(value);
    const transformResult = result.map(e => e.item);
    setSearch(value);

    if (transformResult.length === 0) {
      setListSearch(undefined);
      return;
    }

    setListSearch(transformResult);
  };

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
      <InputSearch
        value={search}
        placeholder="Search your pokemon"
        onChangeText={handleSearch}
      />
      <View style={style.content}>
        {loading.getAll && (
          <ActivityIndicator color={colors.blue50} size={30} />
        )}
        <PokemonList items={listSearch || all} />
      </View>
    </View>
  );
};
