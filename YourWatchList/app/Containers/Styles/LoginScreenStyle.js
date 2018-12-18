import { StyleSheet } from 'react-native';
import { ratioWidth, ratioHeight, moderateScale } from '../../Transform/Scalling';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b1f9cf',
    paddingHorizontal: ratioWidth(10),
    paddingVertical: ratioHeight(10),
    alignItems: 'center',
  },
  logo: {
    width: ratioWidth(240),
    height: ratioHeight(240),
    marginVertical: ratioHeight(60),
  },
  input: {
    backgroundColor: '#fff',
    width: ratioWidth(220),
    height: ratioHeight(40),
    borderRadius: moderateScale(5),
    marginTop: ratioHeight(20),
    paddingHorizontal: ratioWidth(10),
    fontSize: moderateScale(18),
    paddingBottom: ratioHeight(5),
    color: '#777676',
  },
  forgotPass: {
    fontSize: moderateScale(12),
    marginTop: ratioHeight(5),
    color: '#a5a2a2',
  },
  button: {
    backgroundColor: 'cyan',
    width: ratioWidth(200),
    borderRadius: moderateScale(10),
    marginTop: ratioHeight(20),
  },
  textButton: {
    fontSize: moderateScale(20),
    color: '#fff',
    textAlign: 'center',
    marginVertical: ratioHeight(10),
  },
});
