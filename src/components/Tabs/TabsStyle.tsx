import {StyleSheet} from 'react-native';

import normalize from '../../common/utils/normalize';
import {colors, fonts} from '../../style/Index';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(14),
    color: colors.black,
  },
  titleDisabled: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(14),
    color: colors.gray200,
  },
  item: {
    height: normalize(40),
    borderBottomWidth: normalize(2),
    borderBottomColor: colors.gray200,
    alignItems: 'center',
  },
});
