import {StyleSheet} from 'react-native';
import {colors} from '../../style/Colors';
import {fonts} from '../../style/Fonts';

export const style = StyleSheet.create({
  item__row: {
    width: '100%',
    height: 40,
  },
  progress: {
    marginTop: 4,
  },
  label: {
    width: '35%',
    fontFamily: fonts.poppinsBold,
    fontSize: 14,
    color: colors.gray700,
  },
  value__capitalize: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    color: colors.black,
    textTransform: 'capitalize',
  },
});
