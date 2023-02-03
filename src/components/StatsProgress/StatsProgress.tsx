import React from 'react';
import {Text, View} from 'react-native';
import {ProgressBar} from '../ProgressBar/ProgressBar';
import {style} from './StatsProgressStyle';

export const StatsProgress = ({stats}: any) => {
  return (
    <View>
      {stats?.map((item: any) => (
        <View style={style.item__row} key={item.stat.name}>
          <Text style={style.value__capitalize}>
            {item.stat.name} ({item.base_stat})
          </Text>
          <View style={style.progress}>
            <ProgressBar currentStep={item.base_stat} totalSteps={100} />
          </View>
        </View>
      ))}
    </View>
  );
};
