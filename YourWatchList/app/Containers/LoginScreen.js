import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StatusBar, KeyboardAvoidingView, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles/LoginScreenStyle';
import { ratioWidth, ratioHeight } from '../Transform/Scalling';

class HomeScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.logoImageWidth = ratioWidth(240);
    this.logoImageHeight = ratioHeight(240);
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow() {
    this.logoImageWidth = ratioWidth(240) / 2;
    this.logoImageHeight = ratioHeight(240) / 2;
    // alert(this.logoImageHeight);
  }

  keyboardDidHide() {
    this.logoImageWidth = ratioWidth(240);
    this.logoImageHeight = ratioHeight(240);
    // alert(this.logoImageHeight);
  }

  render() {
    const logoStyle = [styles.logo, { width: this.logoImageWidth, height: this.logoImageHeight }];

    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          barStyle="light-content"
        />
        <KeyboardAvoidingView behavior="position">
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('../../assets/splash.png')}
              resizeMode="contain"
              style={logoStyle}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Username"
              underlineColorAndroid="#e5e5e5"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              underlineColorAndroid="#e5e5e5"
              secureTextEntry
            />
            <TouchableOpacity>
              <Text style={styles.forgotPass} >Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Otp')} >
              <Text style={styles.textButton} >Submit</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }

}

export default HomeScreen;
