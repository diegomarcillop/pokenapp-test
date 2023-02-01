import {StyleSheet} from 'react-native';
import {fonts} from '../../style/Index';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: fonts.poppinsBold,
    fontSize: 22,
  },
  icon: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
  },
});
