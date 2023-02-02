import React from 'react';
import {Text, View} from 'react-native';
import {style} from './TypesListStyle';

interface Props {
  types: Array<{}>;
}

export const TypesList = ({types}: Props) => {
  return (
    <View style={style.types}>
      {types.map((type: any) => (
        <View key={type.type.name} style={style.containerType}>
          <Text style={style.textType}>{type.type.name}</Text>
        </View>
      ))}
    </View>
  );
};
