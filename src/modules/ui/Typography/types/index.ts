import { DesignColors } from '../../colors';

export enum Sora {
  Light = 'Sora-Light',
  ExtraLight = 'Sora-ExtraLight',
  Regular = 'Sora-Regular',
  SemiBold = 'Sora-SemiBold',
  Medium = 'Sora-Medium',
  Bold = 'Sora-Bold',
  ExtraBold = 'Sora-ExtraBold',
  Thin = 'Sora-Thin',
}

export type Typographies = {
  fontFamily: Sora;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  variants:
    | 'formLabel'
    | 'formPlaceholder'
    | 'formInput'
    | 'header'
    | 'button'
    | 'formError';
  color: DesignColors;
};
