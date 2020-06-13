import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { StackNavigator, navigate } from 'react-navigation';
export default class ProfileScreen extends React.Component {

  render() {
    
      return (
          <View style={styles.container}>
                <Text>
                    profile
                </Text>
                <Button title={"Өөрийн " }   onPress={()=>{ this.props.navigation.navigate("Settings")}}
                        
                /> 
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

ProfileScreen.navigationOptions = {
    title: 'Таны танилцуулга',
    
  };
  