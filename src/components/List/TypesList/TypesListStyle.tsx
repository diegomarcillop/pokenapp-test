import {StyleSheet} from 'react-native';
import {fonts} from '../../../style/Index';

export const style = StyleSheet.create({
  containerType: {
    maxWidth: '50%',
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
  types: {
    flexDirection: 'row',
  },
});
