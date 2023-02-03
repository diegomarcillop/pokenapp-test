import {StyleSheet} from 'react-native';

import normalize from '../../common/utils/normalize';
import {colors, fonts} from '../../style/Index';

export const style = StyleSheet.create({
  container: {
    height: normalize(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: normalize(10),
    borderColor: colors.gray700,
    backgroundColor: colors.gray50,
    padding: normalize(5),
  },
  card: {
    width: '46%',
    marginVertical: '1%',
  },
  icon: {
    width: normalize(30),
    height: normalize(30),
    opacity: 0.5,
  },
  input: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(16),
    padding: normalize(5),
  },
});
