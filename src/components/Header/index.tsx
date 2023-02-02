import React from 'react';

import StyledView from '../../modules/ui/StyledView';
import Typography from '../../modules/ui/Typography';

import { designColors } from '../../modules/ui/colors';

import * as Icon from 'phosphor-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HEADER_HEIGHT } from '../../constants/metrics';
import Dash from '../Dash';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
  variant: 'login' | 'signup' | 'home' | 'detailed';
};

export default function Header({ variant }: HeaderProps) {
  const { top } = useSafeAreaInsets();
  const { goBack } = useNavigation();
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
    case 'signup':
      return (
        <StyledView
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth={1}
          borderColor={designColors.greyLight}
          height={HEADER_HEIGHT - top}
          p="s">
          <Pressable onPress={goBack}>
            <Icon.ArrowLeft size="24px" color={designColors.dark} />
          </Pressable>
          <StyledView
            alignItems="center"
            flexDirection="row"
            justifyContent="center">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <Dash mr="xxs" key={`dash-${index}`} />
              ))}
          </StyledView>
          <StyledView />
        </StyledView>
      );

    default:
      return null;
  }
}
