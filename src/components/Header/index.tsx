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
import Tag from '../Tag';

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

    case 'home':
      return (
        <StyledView
          borderBottomWidth={1}
          borderColor={designColors.greyLight}
          flex={1}>
          <StyledView
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            height={HEADER_HEIGHT - top}
            p="s">
            <StyledView
              height={32}
              width={32}
              borderRadius={32 / 2}
              bgColor="greyLight"
              alignItems="center"
              justifyContent="center">
              <Icon.User size="24px" color={designColors.dark} />
            </StyledView>

            <StyledView flexDirection="row">
              <Typography variant="homeTitle" mr="xs">
                Account: $1,457.23
              </Typography>
              <Icon.CaretDown size="16px" color={designColors.dark} />
            </StyledView>

            <Icon.Bell size="24px" color={designColors.dark} />
          </StyledView>
          <StyledView flexDirection="row" alignItems="center" p="s" flex={1}>
            <StyledView flex={1}>
              <Typography color="dark" mb="xxs">
                Portfolio
              </Typography>
              <StyledView flexDirection="row">
                <Typography variant="currencyLarge">$1,245.23</Typography>
                <StyledView mt={14}>
                  <Icon.ArrowUpRight size="14px" color={designColors.green} />
                </StyledView>
                <StyledView justifyContent="flex-end" bgColor="white">
                  <Typography variant="percentageUpper">31.82%</Typography>
                </StyledView>
              </StyledView>
            </StyledView>

            <Tag />
          </StyledView>
        </StyledView>
      );

    default:
      return null;
  }
}
