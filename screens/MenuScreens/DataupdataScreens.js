import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity,Button, View } from 'react-native';
export default class DataupdataScreens extends React.Component {

  render() {
    
      return (
          <View style={styles.container}>
               <Text>
                    Data udpata
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