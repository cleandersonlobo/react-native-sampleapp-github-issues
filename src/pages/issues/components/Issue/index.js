import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Issue extends Component {
  static propTypes = {
    issues: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      html_url: PropTypes.string,
      user: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
    }).isRequired,
  }
  navigatoToIssue = () => {
    const { html_url } = this.props.issues;
    Linking.openURL(html_url);
  }
  render() {
    const { issues } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: issues.user.avatar_url }}
        />
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <Text style={styles.title} numberOfLines={1}>{issues.title}</Text>
            <Text style={styles.organization}>{issues.user.login}</Text>
          </View>
          <TouchableOpacity
            onPress={this.navigatoToIssue}
            style={styles.button}
          >
            <Icon name="angle-right" size={20} style={styles.infoIcon} />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
