import { FlexAlignType, FlexStyle } from 'react-native';

import styled from 'styled-components/native';

import { DesignColors } from '../colors';
import { flexMixin, FlexMixin } from '../mixins/flex';
import { marginMixin, MarginMixin } from '../mixins/margin';
import { paddingMixin, PaddingMixin } from '../mixins/padding';
import { positionedMixin, PositionedMixin } from '../mixins/positioned';
import { transformColorToken } from '../tokens';

export type StyledViewProps = {
  bgColor?: DesignColors;

  overflow?: 'visible' | 'hidden' | 'scroll';

  height?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  width?: number | string;

  alignSelf?: FlexStyle['alignSelf'];
  alignItems?: FlexAlignType;
  justifyContent?: FlexStyle['justifyContent'];

  borderRadius?: number | string;
  zIndex?: number;
  opacity?: number;
  borderWidth?: number;
  borderColor?: DesignColors;
  borderTopWidth?: number;
  borderBottomWidth?: number;
  borderTopRadius?: number;
  borderEndRadius?: number;
  aspectRatio?: number;
} & Partial<MarginMixin & PaddingMixin & PositionedMixin & FlexMixin>;

const StyledView = styled.View<StyledViewProps>`
  ${marginMixin}
  ${paddingMixin}
  ${positionedMixin}  
  ${flexMixin}
  ${({ bgColor }) =>
    bgColor && `background-color: ${transformColorToken(bgColor)}`};
  ${({ opacity }) => opacity && `opacity: ${opacity}`};

  ${({ height }) => height && `height: ${height}px`};
  ${({ width }) => width && `width: ${width}px`};

  ${({ overflow }) => overflow && `overflow: ${overflow}`};

  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}`};
  ${({ minHeight }) => minHeight && `min-height: ${minHeight}`};

  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};

  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px`};
  ${({ zIndex }) => zIndex && `z-index: ${zIndex}`};

  ${({ borderColor }) =>
    borderColor && `border-color: ${transformColorToken(borderColor)}`};
  ${({ borderTopWidth }) =>
    borderTopWidth && `border-top-width: ${borderTopWidth}px`};

  ${({ borderBottomWidth }) =>
    borderBottomWidth && `border-bottom-width: ${borderBottomWidth}px`};

  ${({ borderTopRadius }) =>
    borderTopRadius &&
    `border-top-left-radius: ${borderTopRadius}px border-top-right-radius: ${borderTopRadius}px `};

  ${({ borderEndRadius }) =>
    borderEndRadius &&
    `border-bottom-left-radius: ${borderEndRadius}px border-bottom-right-radius: ${borderEndRadius}px `};
`;

export default StyledView;
