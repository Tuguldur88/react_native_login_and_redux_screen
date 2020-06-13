import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppNavigator from './navigation/AppNavigator';
import Loginnn from './screens/login';

const store = configureStore();

export default class App extends React.Component {

  constructor() {
      super();
      this.state = {
          name: ''
      };
  }

  render() {
      return (
        <Provider store={store}>
          <Loginnn/>
        </Provider>
      );
  }
}

