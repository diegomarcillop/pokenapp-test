/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';

import * as teamStorage from '../../common/storage/team';
import {CharacteristicsPokemon} from '../../components/CharacteristicsPokemon/CharacteristicsPokemon';
import {Header} from '../../components/Header/Header';
import {TypesList} from '../../components/List/TypesList/TypesList';
import {PokemonActions} from '../../services/Pokemon/PokemonSlice';
import {style} from './PokemonDetailStyle';

interface Props {
  route: any;
  navigation: any;
}

export const PokemonDetail = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {detail, allTeam} = useSelector((state: any) => state.pokemon);

  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    handleIsTeam();
    () =>
      dispatch(
        PokemonActions.setState({
          key: 'detail',
          newState: undefined,
        }),
      );
  }, [dispatch, allTeam]);

  const handleFavouritePokemon = () => {
    const values = {
      name: detail.name,
      url: detail.url,
    };

    if (isFavourite) {
      dispatch(PokemonActions.removePokemon(values));
      navigation.goBack();
    } else {
      dispatch(PokemonActions.addPokemon({values, detail}));
    }
  };

  const handleIsTeam = async () => {
    const isExists = await teamStorage.getOne(detail.name, 'name');
    setIsFavourite(isExists !== undefined);
  };

  return (
    <View style={{...style.container, backgroundColor: detail.background}}>
      <Header
        iconLeft="arrow-left"
        onPressLeft={() => navigation.goBack()}
        iconRight={isFavourite ? 'heart-fill' : 'heart-line'}
        onPressRight={handleFavouritePokemon}
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
