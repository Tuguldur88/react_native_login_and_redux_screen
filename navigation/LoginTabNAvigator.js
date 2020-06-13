import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';



const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });
  
const HomeStack = createStackNavigator(
    {
      Login: LoginScreen,
      Register:RegisterScreen
    },
    config
  );
  
  HomeStack.navigationOptions = {
    tabBarLabel: 'none',
    
  };
  
  HomeStack.path = '';
  
  
  
  export default HomeStack;
  