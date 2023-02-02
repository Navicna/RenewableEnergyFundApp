import {css} from 'styled-components/native';

import {transformMixinsToken as transformPaddingToken} from '../tokens';

export type PaddingMixin = {
  p?: number | string;
  pl?: number | string;
  pr?: number | string;
  pt?: number | string;
  pb?: number | string;
  ph?: number | string;
  pv?: number | string;
};

export const paddingMixin = css<Partial<PaddingMixin>>`
  ${({p}) => p && `padding: ${transformPaddingToken(p)}`};
  ${({pl}) => pl && `padding-left: ${transformPaddingToken(pl)}`};
  ${({pr}) => pr && `padding-right: ${transformPaddingToken(pr)}`};
  ${({pt}) => pt && `padding-top: ${transformPaddingToken(pt)}`};
  ${({pb}) => pb && `padding-bottom: ${transformPaddingToken(pb)}`};

  ${({ph}) =>
    ph &&
    `padding-left: ${transformPaddingToken(ph)};
     padding-right:${transformPaddingToken(ph)};
`};

  ${({pv}) =>
    pv &&
    `padding-bottom: ${transformPaddingToken(pv)};
     padding-top: ${transformPaddingToken(pv)};
`};
`;
