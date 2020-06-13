import React from 'react';
import { Text, View,AppRegistry,AsyncStorage, TouchableOpacity, ImageBackground, StyleSheet, Image, Button, Switch, TextInput } from 'react-native';
import { Provider, connect } from 'react-redux';
import { LOGIN_REQUEST, LOGOUT } from '../actions/actionTypes';
const loginimages = require('../assets/images/login_img.jpeg')
class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           username: '',
           password: '',
        }
     }
     
    render(){
       
        return (
            <ImageBackground source={loginimages} style={styles.imges}>
                <TextInput style={styles.input} 
                     placeholder=' User name' 
                     onChangeText={(text) => this.setState({username:text})}
                     value={this.state.username}
                />
                <TextInput style={styles.input} 
                     placeholder=' Password ' 
                     onChangeText={(text) => this.setState({password:text})}
                     value={this.state.password}
                />
                <Button title={"Login"} 
                  onClick={this.props.login}
                />
                <Button title={"Logout"} 
                  onClick={this.props.Logout}
                />
                <Text>{this.props.status}</Text>
                <Text>{this.props.token}</Text>
            </ImageBackground>
            
        )
    }
}


const mapStateToProps = (state, ownProps) => {
  return {
    token: "sda",
    status: "state.login.status",
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch({type:LOGIN_REQUEST, user:this.state.username, password:this.state.password}),
    logout: () => dispatch({type:LOGOUT}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);















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
         color: '#fff'
     },
 
 })