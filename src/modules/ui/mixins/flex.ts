import {FlexStyle} from 'react-native';

import {css} from 'styled-components/native';

export type FlexMixin = {
  flex?: number;
  flexBasis?: FlexStyle['flexBasis'];
  flexDirection?: FlexStyle['flexDirection'];
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: FlexStyle['flexWrap'];
};

export const flexMixin = css<Partial<FlexMixin>>`
  ${({flex}) => flex && `flex: ${flex}`};
  ${({flexBasis}) => flexBasis && `flex-basis: ${flexBasis}`};
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({flexGrow}) => flexGrow && `flex-grow: ${flexGrow}`};
  ${({flexShrink}) => flexShrink && `flex-shrink: ${flexShrink}`};
  ${({flexWrap}) => flexWrap && `flex-wrap: ${flexWrap}`};
`;
