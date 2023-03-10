import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {StatsProgress} from '../StatsProgress/StatsProgress';

import {Tabs} from '../Tabs/Tabs';
import {style} from './CharacteristicsPokemonStyle';

const items = [
  {
    name: 'About',
  },
  {
    name: 'Base Stats',
  },
  {
    name: 'Evolution',
  },
  {
    name: 'Moves',
  },
];

export const CharacteristicsPokemon = () => {
  const {detail} = useSelector((state: any) => state.pokemon);

  const [tabSelected, setTabSelected] = useState<number>(0);

  return (
    <View style={style.tabs}>
      <Tabs
        items={items}
        onSelected={setTabSelected}
        initialTab={tabSelected}
      />
      {tabSelected === 0 && (
        <View style={style.content}>
          <View style={style.item}>
            <Text style={style.label}>Species</Text>
            <Text style={style.value__capitalize}>
              {detail?.details?.species.name}
            </Text>
          </View>
          <View style={style.item}>
            <Text style={style.label}>Region</Text>
            <Text style={style.value__capitalize}>
              {detail?.generation.main_region.name}
            </Text>
          </View>
          <View style={style.item}>
            <Text style={style.label}>Height</Text>
            <Text style={style.value}>
              {detail?.details?.height / 10}cm ({detail?.details?.height}ml)
            </Text>
          </View>
          <View style={style.item}>
            <Text style={style.label}>Weight</Text>
            <Text style={style.value}>
              {Math.round(detail?.details?.weight / 100) * 2.2} lb (
              {detail?.details?.weight / 10} kg)
            </Text>
          </View>
          <View style={style.item__spacing}>
            <Text style={style.label}>Abilities</Text>
            <Text style={style.value__capitalize}>
              {detail?.details?.abilities.map(
                (e: any, index: number) =>
                  `${e?.ability?.name}${
                    index < detail?.details?.abilities.length - 1 ? ',' : ' '
                  } `,
              )}
            </Text>
          </View>
          <View style={style.item}>
            <Text style={style.label}>Generation</Text>
            <Text style={style.value__capitalize}>
              {detail?.species.generation.name}
            </Text>
          </View>
        </View>
      )}
      {tabSelected === 1 && (
        <View style={style.content}>
          <StatsProgress stats={detail?.details.stats} />
          <View style={{...style.item, justifyContent: 'space-between'}}>
            <Text style={style.label}>Total</Text>
            <Text style={style.value__capitalize__large}>
              {detail?.totalStats}
            </Text>
          </View>
        </View>
      )}
      {tabSelected === 3 && (
        <View style={style.content}>
          <View style={style.item}>
            <Text style={style.label}>Moves</Text>
            <Text style={style.value__capitalize}>
              {detail?.details?.moves.map(
                (e: any, index: number) =>
                  `${e?.move?.name}${
                    index < detail?.details?.moves.length - 1 ? ',' : ' '
                  } `,
              )}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};
