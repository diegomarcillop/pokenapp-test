/* eslint-disable curly */
import React, {useEffect, useState} from 'react';
import {Animated, Dimensions, Text, View} from 'react-native';
import {colors} from '../../style/Colors';

import {style} from './ProgressBarStyle';

const {width} = Dimensions.get('screen');

interface Props {
  totalSteps: number;
  currentStep: number;
}

export const ProgressBar = ({totalSteps, currentStep}: Props) => {
  const [progress] = useState(new Animated.Value(0));
  const [porcent, setPorcent] = useState<any>();

  useEffect(() => {
    Animated.timing(progress, {
      toValue: (currentStep / totalSteps) * width,
      duration: 750,
      useNativeDriver: false,
    }).start();

    setPorcent(((currentStep / totalSteps) * 100).toFixed(0));
  }, [currentStep, totalSteps, progress]);

  const getColor = () => {
    if (porcent <= 30) return colors.red;

    if (porcent <= 60) return colors.blue50;

    return colors.success;
  };

  return (
    <View style={style.progressBar}>
      <View style={style.progressBar_container} />
      <Animated.View
        style={{
          ...style.animatedView,
          width: progress,
          backgroundColor: getColor(),
        }}
      />
    </View>
  );
};
