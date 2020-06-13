import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { StackNavigator, navigate } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import searchh from './SearchScreen';


export default class HomeScreen extends React.Component {

  render() {
      //alert(JSON.stringify(this.props));
      return (
        <View>
          <Text>dsf</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
  }
});