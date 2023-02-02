import React from 'react';

import StyledView from '../../modules/ui/StyledView';
import Typography from '../../modules/ui/Typography';

import { designColors } from '../../modules/ui/colors';

import * as Icon from 'phosphor-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HEADER_HEIGHT } from '../../constants/metrics';

type HeaderProps = {
  variant: 'login' | 'singup' | 'home' | 'detailed';
};

export default function Header({ variant }: HeaderProps) {
  const { top } = useSafeAreaInsets();
  switch (variant) {
    case 'login':
      return (
        <StyledView
          flexDirection="row"
          borderBottomWidth={1}
          borderColor={designColors.greyLight}
          height={HEADER_HEIGHT - top}
          p="s"
        />
      );

    default:
      return null;
  }
}
