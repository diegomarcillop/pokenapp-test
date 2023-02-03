import {StyleSheet} from 'react-native';

import normalize from '../../common/utils/normalize';
import {colors, fonts} from '../../style/Index';

export const style = StyleSheet.create({
  container: {
    height: normalize(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(10),
  },
  title: {
    fontFamily: fonts.poppinsExtraBold,
    fontSize: normalize(16),
    color: colors.black,
  },
  icon: {
    width: normalize(30),
    height: normalize(20),
    resizeMode: 'contain',
  },
});
