import {StyleSheet} from 'react-native';

import {colors} from '../../style/Index';

export const style = StyleSheet.create({
  animatedView: {
    maxWidth: '100%',
    backgroundColor: colors.blue50,
    height: 4,
    borderRadius: 5,
    bottom: 4,
  },
  progressBar: {
    borderRadius: 5,
  },
  progressBar_container: {
    width: '100%',
    height: 4,
    borderRadius: 5,
    backgroundColor: colors.gray50,
  },
});
