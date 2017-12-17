import { StyleSheet } from 'react-native';
import { fonts, colors, metrics } from 'styles';

export default StyleSheet.create({
  container: {
    height: 50 + metrics.statusBarHeight,
    paddingTop: metrics.statusBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: fonts.big,
    color: colors.primary,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    paddingRight: 20,
  },
});

