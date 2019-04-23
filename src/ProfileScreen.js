import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
export class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Profile',
    };
    render() {
      const profileName = this.props.navigation.getParam('name');
      return (
          <View style={{marginTop: 40}}>
          <Text style={{textAlign:'center',fontWeight:'bold', fontSize: 24}}>Hello {profileName}</Text>
          </View>
      );
    }
  }