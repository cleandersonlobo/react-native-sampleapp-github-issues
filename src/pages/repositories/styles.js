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
  empty: {
    textAlign: 'center',
    width: '100%',
    marginTop: 20,
  },
});

