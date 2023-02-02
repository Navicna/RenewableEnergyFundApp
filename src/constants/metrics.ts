import { Dimensions } from 'react-native';

export const fullWidth = Dimensions.get('window').width;

export const responsiveWidth = (value: number, sides: number = 2) =>
  fullWidth - value * sides;

export const HEADER_HEIGHT = 95;
