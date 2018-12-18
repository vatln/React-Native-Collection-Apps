import { StyleSheet } from 'react-native';
import { moderateScale, ratioHeight, ratioWidth } from '../../Transform/Scalling';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#b1f9cf',
    paddingHorizontal: ratioWidth(10),
    paddingTop: ratioHeight(50),
  },
  subTitle: {
    fontSize: moderateScale(30),
    textAlign: 'center',
    marginBottom: ratioHeight(50),
    color: '#6d6d6d',
  },
  boxContainer: {
    backgroundColor: '#FFF',
    borderRadius: moderateScale(15),
    width: ratioWidth(300),
    height: ratioHeight(315),
    paddingHorizontal: ratioWidth(20),
    paddingTop: ratioHeight(50),
    borderColor: '#3a99ff',
    borderWidth: moderateScale(0.5),
  },
  phoneNumber: {
    paddingHorizontal: ratioWidth(10),
    paddingBottom: ratioHeight(12),
    fontSize: moderateScale(24),
    marginBottom: ratioHeight(10),
    color: '#777676',
  },
  button: {
    backgroundColor: '#37c4fc',
    width: ratioWidth(150),
    alignSelf: 'center',
    justifyContent: 'center',
    height: ratioHeight(40),
    borderRadius: moderateScale(15),
    marginBottom: ratioHeight(35),
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: moderateScale(18),
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: ratioHeight(15),
  },
  otpInput: {
    width: ratioWidth(40),
    paddingBottom: ratioHeight(5),
    paddingHorizontal: ratioWidth(10),
    fontSize: moderateScale(36),
    color: '#777676',
  },
});
