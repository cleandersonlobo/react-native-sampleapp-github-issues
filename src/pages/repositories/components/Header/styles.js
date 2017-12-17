import { StyleSheet } from 'react-native';
import { fonts, colors, metrics } from 'styles';

export default StyleSheet.create({
  container: {
    height: 54 + metrics.statusBarHeight,
    paddingTop: metrics.statusBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: fonts.small,
    color: colors.primary,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: colors.background,
    alignSelf: 'stretch', // Uses screen full width,
    borderRadius: 5,
    marginVertical: 8,
    fontSize: fonts.small,
    paddingHorizontal: 20,
    width: '85%',
  },
});

