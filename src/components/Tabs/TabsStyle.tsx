import {StyleSheet} from 'react-native';
import {colors} from '../../style/Colors';
import {fonts} from '../../style/Fonts';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    color: colors.black,
  },
  titleDisabled: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    color: colors.gray200,
  },
  item: {
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: colors.gray200,
    alignItems: 'center',
  },
});
