import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../style/Index';

export const style = StyleSheet.create({
  container: {
    minWidth: '46%',
    borderRadius: 20,
    padding: 10,
    marginTop: 50,
    minHeight: 150,
  },
  title: {
    fontFamily: fonts.poppinsBold,
    fontSize: 18,
    textTransform: 'capitalize',
    color: colors.white,
    marginBottom: 5,
  },
  containerType: {
    maxWidth: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginVertical: 2,
    marginRight: 4,
    opacity: 0.6,
  },
  textType: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 12,
    color: '#464646',
    textTransform: 'capitalize',
  },
  content: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  image: {
    transform: [{translateY: -50}],
    alignSelf: 'center',
    position: 'absolute',
  },
  types: {
    flexDirection: 'row',
  },
  generation: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 12,
    color: 'white',
    textTransform: 'capitalize',
    paddingTop: 5,
  },
});
