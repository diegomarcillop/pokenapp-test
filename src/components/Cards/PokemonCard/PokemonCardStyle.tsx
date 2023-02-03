import {StyleSheet} from 'react-native';
import normalize from '../../../common/utils/normalize';
import {colors, fonts} from '../../../style/Index';

export const style = StyleSheet.create({
  container: {
    minWidth: '46%',
    borderRadius: normalize(20),
    padding: normalize(10),
    marginTop: normalize(50),
    minHeight: normalize(150),
  },
  title: {
    fontFamily: fonts.poppinsBold,
    fontSize: normalize(18),
    textTransform: 'capitalize',
    color: colors.white,
    marginBottom: normalize(5),
  },
  containerType: {
    maxWidth: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: normalize(20),
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(2),
    marginVertical: normalize(2),
    marginRight: normalize(4),
    opacity: 0.6,
  },
  textType: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(12),
    color: '#464646',
    textTransform: 'capitalize',
  },
  content: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: normalize(50),
  },
  image: {
    transform: [{translateY: -normalize(50)}],
    alignSelf: 'center',
    position: 'absolute',
  },
  types: {
    flexDirection: 'row',
  },
  generation: {
    fontFamily: fonts.poppinsRegular,
    fontSize: normalize(12),
    color: 'white',
    textTransform: 'capitalize',
    paddingTop: normalize(5),
  },
});
