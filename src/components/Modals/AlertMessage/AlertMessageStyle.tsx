import {StyleSheet} from 'react-native';

import normalize from '../../../common/utils/normalize';
import {colors, fonts} from '../../../style/Index';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    top: normalize(80),
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: normalize(5),
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    zIndex: 5,
  },
  content: {
    width: '96%',
    position: 'absolute',
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(10),
    borderRadius: normalize(10),
  },
  title: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(15.01),
    color: colors.white,
    textAlign: 'left',
  },
});

export default styles;
