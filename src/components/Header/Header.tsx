import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {style} from './HeaderStyle';

interface Props {
  iconLeft: string;
  onPressLeft: any;
  iconRight?: string;
  onPressRight?: any;
  title?: string;
}

const icons: any = {
  'arrow-left': require('../../assets/icons/arrow-left.png'),
  'heart-line': require('../../assets/icons/heart-line.png'),
  'heart-fill': require('../../assets/icons/heart-fill.png'),
  'arrow-left-black': require('../../assets/icons/arrow-left-black.png'),
};

export const Header = ({
  iconLeft,
  iconRight,
  onPressLeft,
  onPressRight,
  title,
}: Props) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onPressLeft}>
        <Image source={icons[iconLeft]} style={style.icon} />
      </TouchableOpacity>
      <Text style={style.title}>{title}</Text>
      {iconRight && (
        <TouchableOpacity onPress={onPressRight}>
          <Image source={icons[iconRight]} style={style.icon} />
        </TouchableOpacity>
      )}
      {!iconRight && <View />}
    </View>
  );
};
