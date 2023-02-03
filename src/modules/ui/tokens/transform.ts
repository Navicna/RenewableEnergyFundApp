import { DesignColors } from '../colors';
import { Sora, Typographies } from '../Typography/types';

import { designColors } from '../colors';
import { spacing } from './spacing';

const { xxs, xs, s, m, l, xl, xxl, xxxl } = spacing;

export function transformMixinsToken(value: string | number) {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  const tokens: { [key: string]: number } = {
    xxs,
    xs,
    s,
    m,
    l,
    xl,
    xxl,
    xxxl,
  };

  return `${tokens[value]}px` || 0;
}

const {
  purple,
  purpleLight,
  dark,
  light,
  greyLight,
  greyBackground,
  greyMedium,
  green,
  yellow,
  red,
  blue,
} = designColors;

export function transformColorToken(color: DesignColors) {
  const colors: { [key: string]: string } = {
    purple,
    purpleLight,
    dark,
    light,
    greyLight,
    greyBackground,
    greyMedium,
    green,
    yellow,
    red,
    blue,
  };

  return colors[color] || color;
}

export function transformTypography(variant: Typographies['variants']) {
  const typographys: { [key: string]: Partial<Typographies> } = {
    formLabel: {
      fontFamily: Sora.Medium,
      fontSize: 11,
      lineHeight: 13.86,
      letterSpacing: 0,
      color: designColors.greyMedium,
    },
    formPlaceholder: {
      fontFamily: Sora.Regular,
      fontSize: 14,
      lineHeight: 17.64,
      letterSpacing: 0,
      color: designColors.greyThin,
    },
    formInput: {
      fontFamily: Sora.Regular,
      fontSize: 14,
      lineHeight: 17.64,
      letterSpacing: 0,
      color: designColors.dark,
    },
    formError: {
      fontFamily: Sora.Regular,
      fontSize: 10,
      lineHeight: 13.86,
      letterSpacing: 0,
      color: designColors.red,
    },
    header: {
      fontFamily: Sora.Bold,
      fontSize: 18,
      lineHeight: 22.68,
      letterSpacing: 0,
      color: designColors.dark,
    },
    button: {
      fontFamily: Sora.Medium,
      fontSize: 16,
      lineHeight: 20.16,
      letterSpacing: 0,
      color: designColors.light,
    },
    homeTitle: {
      fontFamily: Sora.Bold,
      fontSize: 14,
      lineHeight: 17.64,
      letterSpacing: 0,
      color: designColors.dark,
    },
    currencyLarge: {
      fontFamily: Sora.Bold,
      fontSize: 24,
      lineHeight: 30.24,
      letterSpacing: 0,
      color: designColors.dark,
    },
    tag: {
      fontFamily: Sora.Medium,
      fontSize: 11,
      lineHeight: 13.86,
      letterSpacing: 0,
      color: designColors.purple,
    },
    percentageUpper: {
      fontFamily: Sora.Regular,
      fontSize: 14,
      lineHeight: 17.64,
      letterSpacing: 0,
      color: designColors.green,
    },
    cardFundLabel: {
      fontFamily: Sora.Medium,
      fontSize: 12,
      lineHeight: 15.12,
      letterSpacing: 0,
      color: designColors.dark,
    },
    cardCurrency: {
      fontFamily: Sora.Regular,
      fontSize: 14,
      lineHeight: 17.64,
      letterSpacing: 0,
      color: designColors.dark,
    },
    cardCurrencyGreen: {
      fontFamily: Sora.Regular,
      fontSize: 14,
      lineHeight: 17.64,
      letterSpacing: 0,
      color: designColors.green,
    },
    purpleCardLabel: {
      fontFamily: Sora.SemiBold,
      fontSize: 16,
      lineHeight: 20,
      letterSpacing: 0,
      color: designColors.light,
    },
    purpleCardDescription: {
      fontFamily: Sora.Regular,
      fontSize: 12,
      lineHeight: 15,
      letterSpacing: 0,
      color: designColors.light,
    },
    cardEmptyLabel: {
      fontFamily: Sora.SemiBold,
      fontSize: 12,
      lineHeight: 15,
      letterSpacing: 0,
      color: designColors.dark,
    },
  };

  return typographys[variant] || typographys.formLabel;
}
