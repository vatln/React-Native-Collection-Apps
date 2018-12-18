import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyA3S0yIwlAIDRay0ZF0DNcckyJVhbaz9Is',
      authDomain: 'one-time-password-7a29b.firebaseapp.com',
      databaseURL: 'https://one-time-password-7a29b.firebaseio.com',
      projectId: 'one-time-password-7a29b',
      storageBucket: 'one-time-password-7a29b.appspot.com',
      messagingSenderId: '743218738310'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
