import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../style/Index';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    minHeight: '100%',
    backgroundColor: colors.gray50,
  },
  title: {
    fontFamily: fonts.poppinsExtraBold,
    fontSize: 30,
    lineHeight: 33,
    color: colors.white,
    textTransform: 'capitalize',
    paddingBottom: 5,
  },
  subtitle: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 20,
    color: colors.white,
    textTransform: 'capitalize',
    textAlign: 'right',
    transform: [{translateY: -20}],
    position: 'absolute',
  },
  image: {
    alignSelf: 'center',
    position: 'absolute',
    transform: [{translateY: -180}],
  },
  content: {
    flex: 2,
    borderRadius: 50,
    backgroundColor: colors.white,
    elevation: 2,
  },
  information: {
    flex: 1,
    padding: 10,
  },
  tabs: {
    paddingTop: 80,
    paddingHorizontal: 10,
  },
});
