import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {style} from './HeaderStyle';

export const Header = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <Image
          source={require('../../assets/icons/menu.png')}
          style={style.icon}
        />
      </TouchableOpacity>
    </View>
  );
};
