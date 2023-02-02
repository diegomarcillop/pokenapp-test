import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {colors} from '../../style/Colors';
import {style} from './TabsStyle';

interface Props {
  initialTab: number;
  items: Array<{name: string}>;
  onSelected: any;
}

export const Tabs = ({items, onSelected, initialTab}: Props) => {
  const [itemSelected, setItemSelected] = useState<number>(initialTab);

  const handleSelected = (index: number) => {
    setItemSelected(index);
    onSelected(index);
  };

  const isSelected = (index: number) => itemSelected === index;

  return (
    <View style={style.container}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            ...style.item,
            width: `${100 / items.length}%`,
            borderBottomColor: isSelected(index)
              ? colors.blue50
              : colors.gray700,
          }}
          onPress={() => handleSelected(index)}>
          <Text style={isSelected(index) ? style.title : style.titleDisabled}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
