import {StyleSheet} from 'react-native';

import normalize from '../../common/utils/normalize';
import {colors, fonts} from '../../style/Index';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: normalize(50),
    minHeight: '100%',
    backgroundColor: colors.gray50,
  },
  title: {
    fontFamily: fonts.poppinsExtraBold,
    fontSize: normalize(30),
    lineHeight: normalize(33),
    color: colors.white,
    textTransform: 'capitalize',
    paddingBottom: normalize(5),
  },
  subtitle: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(20),
    color: colors.white,
    textTransform: 'capitalize',
    textAlign: 'right',
    transform: [{translateY: -normalize(20)}],
    position: 'absolute',
  },
  image: {
    alignSelf: 'center',
    position: 'absolute',
    transform: [{translateY: -normalize(180)}],
  },
  content: {
    flex: 2,
    borderTopLeftRadius: normalize(50),
    borderTopEndRadius: normalize(50),
    backgroundColor: colors.white,
    elevation: 2,
  },
  information: {
    flex: 1,
    padding: normalize(10),
  },
  tabs: {
    paddingTop: normalize(80),
    paddingHorizontal: normalize(10),
  },
});
