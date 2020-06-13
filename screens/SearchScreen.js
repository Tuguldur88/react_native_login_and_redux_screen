import React from 'react';
import { ScrollView, StyleSheet,TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
export default class SearchScreen extends React.Component {

  constructor() {
      super();
      this.state = {
          name: ''
      };
  }

  render() {
      return (
          <View style={styles.container}>
              <Text>nemeh</Text>
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

SearchScreen.navigationOptions = {
  title: 'Search',
};

