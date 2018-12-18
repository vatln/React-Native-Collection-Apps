import { StackNavigator } from 'react-navigation';

import LoginScreen from '../Containers/LoginScreen';
import OtpScreen from '../Containers/OtpScreen';

export default StackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    Otp: {
      screen: OtpScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);
