import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-7a29b.cloudfunctions.net';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      code: '',
    }
  }

  logIn = async () => {
    const { phone, code } = this.state;
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone, code });

      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return(
      <View>
        <Text>Sign In</Text>
        <View>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput 
            value={this.state.phone}
            onChangeText={(phone) => this.setState({ phone })}
          />
        </View>
        <View>
          <FormLabel>Enter Code Number</FormLabel>
          <FormInput 
            value={this.state.code}
            onChangeText={(code) => this.setState({ code })}
          />
        </View>
        <Button 
          title="Submit"
          onPress={this.logIn}
        />
      </View>
    );
  }
}

export default SignInForm;
