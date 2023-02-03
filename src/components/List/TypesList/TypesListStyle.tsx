import {StyleSheet} from 'react-native';

import normalize from '../../../common/utils/normalize';
import {fonts} from '../../../style/Index';

export const style = StyleSheet.create({
  containerType: {
    maxWidth: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: normalize(20),
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(2),
    marginVertical: normalize(2),
    marginRight: normalize(4),
    opacity: 0.6,
  },
  textType: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 12,
    color: '#464646',
    textTransform: 'capitalize',
  },
  types: {
    flexDirection: 'row',
  },
});
