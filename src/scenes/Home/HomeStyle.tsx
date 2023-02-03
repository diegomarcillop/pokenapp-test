import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../style/Index';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
    minHeight: '100%',
    backgroundColor: colors.gray50,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  title: {
    fontFamily: fonts.poppinsExtraBold,
    fontSize: 30,
  },
  subtitle: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 16,
    color: colors.black,
  },
  subtitle__success: {
    fontFamily: fonts.poppinsExtraBold,
    fontSize: 16,
    color: colors.green400,
    textDecorationLine: 'underline',
  },
  content: {
    paddingTop: 20,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
