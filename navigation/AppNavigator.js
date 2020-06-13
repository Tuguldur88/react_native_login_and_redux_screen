import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import MainTabNavigator from './MainTabNavigator';
import LoginTabNAvigator from './LoginTabNAvigator';

export default createAppContainer(
  createSwitchNavigator ({
    Loginn: {screen: LoginTabNAvigator},
    Main: {screen: MainTabNavigator},
    
  })
);
