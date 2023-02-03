import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../style/Index';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    minHeight: '100%',
    backgroundColor: colors.gray50,
  },
  sectionTop: {
    padding: 10,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  title: {
    fontFamily: fonts.poppinsExtraBold,
    fontSize: 20,
    color: colors.black,
    textAlign: 'center',
  },
  resume: {
    borderWidth: 1,
    borderColor: colors.gray200,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    paddingVertical: 10,
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
  label: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    color: colors.black,
    textTransform: 'capitalize',
  },
});
