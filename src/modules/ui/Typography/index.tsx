import {StyleProp, TextStyle} from 'react-native';

import styled from 'styled-components/native';

import {marginMixin, MarginMixin} from '../mixins/margin';
import {paddingMixin, PaddingMixin} from '../mixins/padding';
import {transformTypography, transformColorToken} from '../tokens';
import {DesignColors} from '../colors';
import {Typographies} from './types';

const {Text: StyledText} = styled;

export type TypographyProps = {
  fontSize?: number;
  color?: DesignColors;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  fontWeight?: string;
  variant?: Typographies['variants'];
  opacity?: number;
  style?: StyleProp<TextStyle>;
} & Partial<MarginMixin & PaddingMixin>;

export const Typography = StyledText<TypographyProps>`
  ${marginMixin}
  ${paddingMixin}
  ${({fontSize}) => fontSize && `font-size: ${fontSize}`}px;
  ${({color}) => color && `color: ${transformColorToken(color)}`};

  ${({opacity}) => opacity && `opacity: ${opacity}`};

  ${({variant}) => {
    if (variant) {
      const {fontSize, fontFamily, lineHeight, letterSpacing, color} =
        transformTypography(variant);
      return (
        variant &&
        `font-size: ${fontSize}px  font-family: ${fontFamily} line-height: ${lineHeight}px letter-spacing: ${letterSpacing}px color: ${color}`
      );
    }
    return null;
  }};
`;

export default Typography;
