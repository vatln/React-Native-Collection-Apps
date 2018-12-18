import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 360;
// const guidelineBaseHeight = 640;

const ratioWidth = (size) => {
  return (width / 360) * size;
};

const ratioHeight = (size) => {
  return (height / 640) * size;
};

const scale = (size) => {
  return (width / guidelineBaseWidth) * size;
};

const moderateScale = (size, factor = 0.5) => {
  return size + ((scale(size) - size) * factor);
};

export { ratioWidth, ratioHeight, moderateScale };
