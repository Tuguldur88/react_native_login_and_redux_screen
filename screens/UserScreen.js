import React from 'react';
import { Text, View,AppRegistry, TouchableOpacity, ImageBackground, StyleSheet, Image, Button, Switch, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppNavigator from '../navigation/AppNavigator';



export default class UserScreen extends React.Component {

  constructor() {
      super();
      this.state = {
          name: ''
      };
      
  }

  render() {
      return (
          <View style={styles.fixToText}>
                
                <Button title={"Өөрийн нүүр хуудас"} style={styles.buttoncss}
                        onPress= {() => this.props.navigation.navigate('Profile')}
                />
                <Button title={"Мэдээллээ шинэчлэх"}
                onPress= {() => this.props.navigation.navigate('UserData')}
                />
                
                <Button title={"Нууц үг солих"}
                        onPress= {() => this.props.navigation.navigate('Password')}
                />
                
                <Button title={"Системээс гарах"}
                        onPress= {() => this.props.navigation.navigate('Login')}
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
  },
  fixToText: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttoncss: {
    textAlign: "left",
    color:"red"
  }
});

UserScreen.navigationOptions = {
  title: 'Menu',

  
};
