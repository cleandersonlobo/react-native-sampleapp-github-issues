import React from 'react';
import { StackNavigator } from 'react-navigation';
import Repositories from 'pages/repositories';
import Issues from 'pages/issues';
import Header from 'components/Header';

const Rooter = (StackNavigator({
  Repositories: { screen: Repositories },
  Issues: { screen: Issues },
}, {
  initialRouteName: 'Repositories',
  navigationOptions: {
    header: props => <Header {...props} />,
  },
})
);

export default Rooter;
