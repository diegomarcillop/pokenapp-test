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
  sectionTop: {
    padding: normalize(10),
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: normalize(10),
  },
  title: {
    fontFamily: fonts.poppinsExtraBold,
    fontSize: normalize(20),
    color: colors.black,
    textAlign: 'center',
  },
  resume: {
    borderWidth: 1,
    borderColor: colors.gray200,
    paddingHorizontal: normalize(10),
    marginVertical: normalize(10),
    borderRadius: normalize(10),
    paddingVertical: normalize(10),
  },
  content: {
    paddingHorizontal: normalize(10),
  },
  list: {
    paddingTop: normalize(20),
  },
  icon: {
    width: normalize(25),
    height: normalize(25),
  },
  feedback: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(14),
    color: colors.black,
  },
  label: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(14),
    color: colors.black,
    textTransform: 'capitalize',
  },
});
