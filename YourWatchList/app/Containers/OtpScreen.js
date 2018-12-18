import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StatusBar } from 'react-native';

import styles from './Styles/OtpScreenStyle';

class OtpScreen extends Component {
  render() {
    return (
      <View style={styles.container} >
        <StatusBar 
          translucent={false}
          barStyle="light-content"
        />
        <Text style={styles.subTitle} >Verification {'\n'}Phone Number</Text>
        <View style={styles.boxContainer} >
          <TextInput
            style={styles.phoneNumber}
            placeholder="Phone Number"
            underlineColorAndroid="#cccccc"
            keyboardType="phone-pad"
          />
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText} >Send OTP</Text>
          </TouchableOpacity>
          <View style={styles.otpContainer} >
            <TextInput
              style={styles.otpInput}
              underlineColorAndroid="#cccccc"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.otpInput}
              underlineColorAndroid="#cccccc"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.otpInput}
              underlineColorAndroid="#cccccc"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.otpInput}
              underlineColorAndroid="#cccccc"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.otpInput}
              underlineColorAndroid="#cccccc"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.otpInput}
              underlineColorAndroid="#cccccc"
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText} >Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default OtpScreen;
