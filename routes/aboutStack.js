import { createStackNavigator } from 'react-navigation-stack';
import React from 'react'

import About from '../screens/about';
import Header from '../shared/header'

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return { headerTitle: () => <Header navigation={navigation} title="O projekcie" /> };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 },
  },
});

export default AboutStack;
