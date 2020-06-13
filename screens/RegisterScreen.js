import React from 'react';
import { Text, View,AppRegistry, TouchableOpacity, ImageBackground, StyleSheet, Image, Button, Switch, TextInput } from 'react-native';
const loginimages = require('../assets/images/login_img.jpeg')
export default class RegisterScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           username: '',
           password: '',
        }
     }

     UserLoginFunction = () => {
        fetch('http://192.168.1.102:3000/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                email: this.state.username,
                password: this.state.password
            })
        }).then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.yes === 'yes')
            {
               this.props.navigation.navigate('Login', { Email: this.state.username });
            }
            else{
      
               this.props.navigation.navigate('Login', { Email: this.state.username });
            }
        }).catch((error) => {
          console.error(error);
        });
    }
    
     
    render(){

        return (
            <ImageBackground source={loginimages} style={styles.imges}>
                <TextInput style={styles.input} 
                     placeholder=' Name  ' 
                     onChangeText={(text) => this.setState({username:text})}
                     value={this.state.username}
                />
                <TextInput style={styles.input} 
                     placeholder=' Password ' 
                     onChangeText={(text) => this.setState({password:text})}
                     value={this.state.password}
                />

                <Button title={"Login"} 
                onPress={this.UserLoginFunction}
                />
                <Button title={"Буцах"}
                onPress= {() => this.props.navigation.navigate('Login')}
                />

            
            </ImageBackground>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
       padding: 19,
       marginTop: 3,
       alignItems: 'center',
       justifyContent: 'center',
    },
    buttonContainer:{
       backgroundColor: '#2980b6',
       paddingVertical: 15
   },
    logincss: {
       padding: 10,
       marginTop: 3,
       alignItems: 'center',
       justifyContent: 'center',
    },
    imges: {
       width: '100%',
       height: '100%',
    },
    inputcss: {
       borderWidth: 1, 
       width:'80%' , 
       borderColor: 'gray', 
       borderWidth: 1, 
       alignItems:'center',
       justifyContent: 'center',
    },
    input:{
         height: 40,
         backgroundColor: 'rgba(225,225,225,0.2)',

         marginBottom: 10,
         padding: 10,
         color: '#000000'
     },
 
 })