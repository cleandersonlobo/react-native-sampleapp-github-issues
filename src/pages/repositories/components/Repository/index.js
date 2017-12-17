import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Repository extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    repository: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      issues_url: PropTypes.string,
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }).isRequired,
  }
  navigatoToIssues = () => {
    const { navigate } = this.props.navigation;
    const { repository } = this.props;
    navigate('Issues', repository);
  }
  render() {
    const { repository } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: repository.avatar_url }}
        />
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{repository.name}</Text>
            <Text style={styles.organization}>{repository.login}</Text>
          </View>
          <TouchableOpacity
            onPress={this.navigatoToIssues}
          >
            <Icon name="angle-right" size={20} style={styles.infoIcon} />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
