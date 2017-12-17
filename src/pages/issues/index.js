import React, { Component } from 'react';
import { Text, View, FlatList, RefreshControl, ActivityIndicator, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import api from 'services/api';
import 'config/reactotron';
import Issue from './components/Issue';
import styles from './styles';


export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      state: PropTypes.shape({
        params: PropTypes.shape({
          name: PropTypes.string,
          login: PropTypes.string,
        }),
      }),
    }).isRequired,
  }
  state = {
    issues: [],
    refreshing: false,
    loading: true,
    filter: '',
  }
  componentWillMount() {
    this.setState({ loading: true });
    const { name, login } = this.props.navigation.state.params;

    this.loadIssues(login, name)
      .then(() => this.setState({ loading: false }))
      .catch(() => this.setState({ loading: false }));
  }
  getIssues = () => this.state.issues.filter(it => ((this.state.filter !== '') ? it.state === this.state.filter : it));
  filterIssuesAll = () => this.setState({ filter: '' })
  filterIssuesOpen = () => this.setState({ filter: 'open' })
  filterIssuesClose = () => this.setState({ filter: 'close' })

   stylesButton = filter => (
     (filter === this.state.filter) ? styles.buttonTextActive : styles.buttonTextInactive
   );

  loadIssues = async (login, name) => {
    this.setState({ refreshing: true });
    const response = await api.get(`/repos/${login}/${name}/issues`);
    if (!response.ok) throw Error();

    this.setState({ issues: response.data, refreshing: false });
  }
  renderRepositories = () =>
    (<FlatList
      refreshControl={<RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={this.loadRepositories}
      />}
      data={this.getIssues()}
      keyExtractor={repository => repository.id}
      renderItem={({ item }) => <Issue {...this.props} issues={item} />}
    />)

renderList = () => (
  this.getIssues().length
    ? this.renderRepositories()
    : <Text style={styles.empty}>Nenhum issues foi encontrada</Text>
)
render() {
  return (
    <View style={styles.container}>
      <View style={styles.containerFilter}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.filterIssuesAll}
        >
          <Text style={this.stylesButton('')}>Todas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.filterIssuesOpen}
        >
          <Text style={this.stylesButton('open')}>Abertas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.filterIssuesClose}
        >
          <Text style={this.stylesButton('close')}>Fechadas</Text>
        </TouchableOpacity>
      </View>
      {this.state.loading
            ? <ActivityIndicator size="small" color="#999999" style={styles.loading} />
            : this.renderList()}
    </View>
  );
}
}
