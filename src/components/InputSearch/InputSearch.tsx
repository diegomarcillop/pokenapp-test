import React from 'react';
import {Image, TextInput, View} from 'react-native';
import {style} from './InputSearchStyle';

export const InputSearch = ({...props}) => {
  return (
    <View style={style.container}>
      <TextInput style={style.input} {...props} />
      <Image
        style={style.icon}
        source={require('../../assets/icons/824565.png')}
      />
    </View>
  );
};
