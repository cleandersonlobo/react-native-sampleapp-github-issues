import { StyleSheet } from 'react-native';
import { colors } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  loading: {
    marginTop: 20,
  },
  emptyOrg: {
    textAlign: 'center',
    width: '100%',
  },
  usernameContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  titleUsername: {
    fontWeight: 'bold',
  },
  iconGithub: {
    marginRight: 5,
  },
  containerFilter: {
    backgroundColor: colors.backgroundFilter,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 8,
  },
  button: {
    padding: 8,
  },
  buttonTextActive: {
    fontWeight: 'bold',
  },
  buttonTextInactive: {
    opacity: 0.5,
  },
  empty: {
    textAlign: 'center',
    width: '100%',
    marginTop: 20,
  },
});

