import 'react-native-gesture-handler';
import React, {useState, Component} from 'react';
import {Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default class Welcome extends Component {
render(){
  return (
    <Text style={styles.title}>Welcome</Text>

  );
}
}
const styles = StyleSheet.create({
    title: {
      fontSize: 50,
      marginTop:300,
      marginLeft:100,
    },
  });
