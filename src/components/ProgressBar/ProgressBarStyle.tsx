import {StyleSheet} from 'react-native';

import normalize from '../../common/utils/normalize';
import {colors} from '../../style/Index';

export const style = StyleSheet.create({
  animatedView: {
    maxWidth: '100%',
    backgroundColor: colors.blue50,
    height: normalize(4),
    borderRadius: normalize(5),
    bottom: normalize(4),
  },
  progressBar: {
    borderRadius: normalize(5),
  },
  progressBar_container: {
    width: '100%',
    height: normalize(4),
    borderRadius: normalize(5),
    backgroundColor: colors.gray50,
  },
});
