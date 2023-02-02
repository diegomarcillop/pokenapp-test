import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../style/Index';

export const style = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: fonts.poppinsExtraBold,
    fontSize: 16,
    color: colors.black,
  },
  icon: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
  },
});
