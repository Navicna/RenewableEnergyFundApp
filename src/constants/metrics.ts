import { Dimensions, Platform } from 'react-native';

export const fullWidth = Dimensions.get('window').width;

export const isIos = Platform.OS === 'ios';

export const responsiveWidth = (value: number, sides: number = 2) =>
  fullWidth - value * sides;

export const HEADER_HEIGHT = 65;
