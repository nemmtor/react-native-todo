import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import Home from '../screens/home';
import Header from '../shared/header'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {headerTitle: () => <Header navigation={navigation} title="Todo app" />}
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 },
  },
});

export default HomeStack;
