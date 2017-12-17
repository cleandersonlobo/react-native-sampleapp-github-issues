import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from 'services/api';
import { View, TouchableOpacity, TextInput, AsyncStorage, ActivityIndicator } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { colors } from 'styles';
import 'config/reactotron';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    setRepository: PropTypes.func.isRequired,
  }
  state = {
    repositoryname: '',
    loading: false,
  }
  addRepository = () => {
    if (this.state.repositoryname.length === 0) return;
    this.setState({ loading: true });
    this.findRepository()
      .then(() => this.setState({ repositoryname: '', loading: false }))
      .catch(() => this.setState({ loading: false }));
  }
  findRepository = async () => {
    const response = await api.get(`/repos/${this.state.repositoryname}`);
    if (!response.ok) throw Error();
    this.props.setRepository(response.data);
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={[styles.input, this.state.erroInput]}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={repositoryname => this.setState({ repositoryname })}
          value={this.state.repositoryname}
          placeholder="Adicionar repositório"
          underlineColorAndroid="transparent"
        />
        {this.state.loading && <ActivityIndicator size="small" color={colors.dark} style={styles.loading} />}
        <TouchableOpacity onPress={this.addRepository}>
          <Icon name="plus" size={14} color={colors.primary} />
        </TouchableOpacity>
      </View>
    );
  }
}
