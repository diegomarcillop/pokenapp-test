import {StyleSheet} from 'react-native';
import normalize from '../../common/utils/normalize';
import {colors} from '../../style/Colors';
import {fonts} from '../../style/Fonts';

export const style = StyleSheet.create({
  item__row: {
    width: '100%',
    height: normalize(40),
  },
  progress: {
    marginTop: normalize(4),
  },
  label: {
    width: '35%',
    fontFamily: fonts.poppinsBold,
    fontSize: normalize(14),
    color: colors.gray700,
  },
  value__capitalize: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(14),
    color: colors.black,
    textTransform: 'capitalize',
  },
});
