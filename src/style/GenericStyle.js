import {StyleSheet} from 'react-native';
import {colors} from './Colors';
import {fonts} from './Fonts';

export const GenericStyle = StyleSheet.create({
  subtitle: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 16,
    color: colors.black,
  },
  subtitle__success: {
    fontFamily: fonts.poppinsExtraBold,
    fontSize: 16,
    color: colors.green400,
    textDecorationLine: 'underline',
  },
});
