import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import RegisterScreen from '../screens/RegisterScreen';


const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });
  
const HomeStack = createStackNavigator(
    {
      Home: RegisterScreen,
    },
    config
  );
  
  HomeStack.navigationOptions = {
    tabBarLabel: ' Register ',
    
  };
  
  HomeStack.path = '';
  
  
  
  export default HomeStack;
  