import {css} from 'styled-components/native';

export type PositionedMixin = {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;

  position?: 'absolute' | 'relative';
};

export const positionedMixin = css<Partial<PositionedMixin>>`
  ${({position}) => position && `position: ${position}`};
  ${({top}) => top && `top: ${top}px`};
  ${({bottom}) => bottom && `bottom: ${bottom}px`};
  ${({left}) => left && `left: ${left}px`};
  ${({right}) => right && `right: ${right}px`};
`;
