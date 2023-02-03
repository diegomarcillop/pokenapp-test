import {StyleSheet} from 'react-native';
import normalize from '../../common/utils/normalize';
import {colors} from '../../style/Colors';
import {fonts} from '../../style/Fonts';

export const style = StyleSheet.create({
  tabs: {
    paddingTop: normalize(80),
    paddingHorizontal: normalize(30),
  },
  content: {
    paddingTop: normalize(20),
    height: normalize(100),
  },
  item: {
    width: '100%',
    minHeight: normalize(35),
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  item__spacing: {
    width: '100%',
    height: normalize(35),
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: normalize(10),
  },
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
  value: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(14),
    color: colors.black,
  },
  value__capitalize: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(14),
    color: colors.black,
    textTransform: 'capitalize',
  },
  value__capitalize__large: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(24),
    color: colors.black,
    textTransform: 'capitalize',
  },
});
