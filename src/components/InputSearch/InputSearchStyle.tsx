import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../style/Index';

export const style = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray700,
    backgroundColor: colors.gray50,
    padding: 5,
  },
  card: {
    width: '46%',
    marginVertical: '1%',
  },
  icon: {
    width: 30,
    height: 30,
    opacity: 0.5,
  },
  input: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 16,
    padding: 5,
  },
});
