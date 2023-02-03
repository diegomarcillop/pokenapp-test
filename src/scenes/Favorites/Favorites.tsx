import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {Header} from '../../components/Header/Header';
import {PokemonList} from '../../components/List/PokemonList/PokemonList';
import {StatsProgress} from '../../components/StatsProgress/StatsProgress';
import {GenericStyle} from '../../style/GenericStyle';
import {style} from './FavoritesStyle';

interface Props {
  route: any;
  navigation: any;
}

export const Favorites = ({navigation}: Props) => {
  const {allTeam, points, resume} = useSelector((state: any) => state.pokemon);

  return (
    <View style={style.container}>
      <Header
        iconLeft="arrow-left-black"
        onPressLeft={() => navigation.goBack()}
        title="Your Pokemos"
      />
      <View style={style.sectionTop}>
        <Text style={GenericStyle.subtitle}>
          Puntos disponibles:{' '}
          <Text style={GenericStyle.subtitle__success}>{points}pts</Text>
        </Text>
      </View>
      <ScrollView style={style.content} nestedScrollEnabled={true}>
        {allTeam.length > 0 && (
          <View style={style.resume}>
            <Text style={style.title}>Summary</Text>
            <View>
              {resume?.stats?.length > 0 && (
                <StatsProgress stats={resume.stats} />
              )}
            </View>
            <Text>
              Regions:{' '}
              <Text style={style.label}>
                {resume.regions.toString().replace(',', '/')}
              </Text>
            </Text>
          </View>
        )}
        <View style={style.list}>
          {allTeam.length === 0 && (
            <View style={style.feedback}>
              <Text style={style.text}>You have no added Pokemons {':('} </Text>
            </View>
          )}
          <PokemonList items={allTeam} />
        </View>
      </ScrollView>
    </View>
  );
};
