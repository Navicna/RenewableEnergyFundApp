import {css} from 'styled-components/native';

import {transformMixinsToken as transformMarginToken} from '../tokens';

export type MarginMixin = {
  m?: number | string;
  ml?: number | string;
  mr?: number | string;
  mt?: number | string;
  mb?: number | string;
  mh?: number | string;
  mv?: number | string;
};

export const marginMixin = css<Partial<MarginMixin>>`
  ${({m}) => m && `margin: ${transformMarginToken(m)}`};
  ${({ml}) => ml && `margin-left: ${transformMarginToken(ml)}`};
  ${({mr}) => mr && `margin-right: ${transformMarginToken(mr)}`};
  ${({mt}) => mt && `margin-top: ${transformMarginToken(mt)}`};
  ${({mb}) => mb && `margin-bottom: ${transformMarginToken(mb)}`};

  ${({mh}) =>
    mh &&
    `margin-left: ${transformMarginToken(mh)};
     margin-right:${transformMarginToken(mh)};
`};
  ${({mv}) =>
    mv &&
    `margin-bottom: ${transformMarginToken(mv)};
     margin-top: ${transformMarginToken(mv)};
`};
`;
