import { StyleSheet } from 'react-native';
import { fonts, colors } from 'styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 3,
    shadowColor: colors.inactive,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    marginTop: 20,
    marginHorizontal: 15,
  },
  title: {
    flex: 1,
    color: colors.primary,
    fontSize: fonts.big,
    fontWeight: 'bold',
  },
  organization: {
    color: colors.subText,
    fontSize: fonts.small,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoIcon: {
    color: colors.subText,
  },
  infoContainer: {
    marginHorizontal: 15,
  },
  image: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
});

