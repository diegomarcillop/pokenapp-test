import {StyleSheet} from 'react-native';
import {colors} from '../../style/Colors';
import {fonts} from '../../style/Fonts';

export const style = StyleSheet.create({
  tabs: {
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  content: {
    paddingTop: 20,
    height: 100,
  },
  item: {
    width: '100%',
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
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
  value: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    color: colors.black,
  },
  value__capitalize: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    color: colors.black,
    textTransform: 'capitalize',
  },
  value__capitalize__large: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 24,
    color: colors.black,
    textTransform: 'capitalize',
  },
});
