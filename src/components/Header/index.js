import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { colors } from 'styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
      state: PropTypes.object,
      goBack: PropTypes.func,
    }).isRequired,
  }
  state = {
    name: '',
  }
  componentWillMount() {
    const { routes } = this.props.navigation.state;
    if (routes.length > 1) {
      const { name } = routes[1].params;
      this.setState({ name });
    }
  }
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => goBack()}
        >
          <Icon name="angle-left" size={20} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>{this.state.name}</Text>
      </View>
    );
  }
}
