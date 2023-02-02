import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../style/Index';

export const style = StyleSheet.create({
  container: {
    flex: 1,
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
    color: colors.black,
  },
  content: {
    paddingHorizontal: 10,
  },
  list: {
    paddingTop: 20,
  },
  icon: {
    width: 25,
    height: 25,
  },
  feedback: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    color: colors.black,
  },
});
