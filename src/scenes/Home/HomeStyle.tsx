import {StyleSheet} from 'react-native';

import normalize from '../../common/utils/normalize';
import {colors, fonts} from '../../style/Index';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(10),
    paddingTop: normalize(50),
    minHeight: '100%',
    backgroundColor: colors.gray50,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: normalize(10),
  },
  title: {
    fontFamily: fonts.poppinsExtraBold,
    fontSize: normalize(30),
  },
  subtitle: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(16),
    color: colors.black,
  },
  subtitle__success: {
    fontFamily: fonts.poppinsExtraBold,
    fontSize: normalize(16),
    color: colors.green400,
    textDecorationLine: 'underline',
  },
  content: {
    paddingTop: normalize(20),
  },
  icon: {
    width: normalize(25),
    height: normalize(25),
  },
});
