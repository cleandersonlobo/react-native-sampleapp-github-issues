import React, { Component } from 'react';
import { Text, View, AsyncStorage, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import 'config/reactotron';
import Header from './components/Header';
import Repository from './components/Repository';
import styles from './styles';


export default class Repositories extends Component {
  static navigationOptions = {
    header: null,
  }
  static propTypes = { };
  state = {
    repositories: [],
    refreshing: false,
  }
  componentWillMount() {
    this.setState({ loading: true });
    this.loadRepositories()
      .then(() => this.setState({ loading: false }))
      .catch(() => this.setState({ loading: false }));
  }
  setRepository = (response) => {
    this.setStoreRepository(response)
      .then(() => {
        this.loadRepositories();
      });
  }
  setStoreRepository = async (response) => {
    const {
      id, name, issues_url, organization: { login, avatar_url },
    } = response;
    const newRepository = {
      id, name, issues_url, login, avatar_url,
    };
    const data = await AsyncStorage.getItem('@GithuberRepo:repositories');
    if (data !== null) {
      const items = JSON.parse(data);
      const isExistisId = items.filter(it => it.id === newRepository.id).length > 0;
      let repositories;
      if (isExistisId) {
        repositories = items.map((it) => {
          let temp = it;
          if (it.id === newRepository.id) temp = newRepository;
          return temp;
        });
      } else {
        repositories = [newRepository, ...items];
      }
      await AsyncStorage.setItem('@GithuberRepo:repositories', JSON.stringify(repositories));
    } else {
      await AsyncStorage.setItem('@GithuberRepo:repositories', JSON.stringify([newRepository]));
    }
  }
  loadRepositories = async () => {
    this.setState({ refreshing: true });
    const repositories = await AsyncStorage.getItem('@GithuberRepo:repositories');
    // const response = await api.get(`/users/${username}/repos`);
    if (repositories === null) throw Error();

    this.setState({ repositories: JSON.parse(repositories), refreshing: false });
  }
  renderRepositories = () =>
    (<FlatList
      refreshControl={<RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={this.loadRepositories}
      />}
      data={this.state.repositories}
      keyExtractor={repository => repository.id}
      renderItem={({ item }) => <Repository {...this.props} repository={item} />}
    />)

renderList = () => (
  this.state.repositories.length
    ? this.renderRepositories()
    : <Text style={styles.empty}>Nenhum repositório foi adicionado</Text>
)
render() {
  return (
    <View style={styles.container}>
      <Header setRepository={this.setRepository} />
      <View style={styles.container}>
        {this.state.loading
            ? <ActivityIndicator size="small" color="#999999" style={styles.loading} />
            : this.renderList()}
      </View>
    </View>
  );
}
}
