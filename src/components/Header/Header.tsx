import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import {style} from './HeaderStyle';

interface Props {
  iconLeft: string;
  onPressLeft: any;
  iconRight?: string;
  onPressRight?: any;
}

const icons: any = {
  'arrow-left': require('../../assets/icons/arrow-left.png'),
  'heart-line': require('../../assets/icons/heart-line.png'),
};

export const Header = ({
  iconLeft,
  iconRight,
  onPressLeft,
  onPressRight,
}: Props) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onPressLeft}>
        <Image source={icons[iconLeft]} style={style.icon} />
      </TouchableOpacity>
      {iconRight && (
        <TouchableOpacity onPress={onPressRight}>
          <Image source={icons[iconRight]} style={style.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};
