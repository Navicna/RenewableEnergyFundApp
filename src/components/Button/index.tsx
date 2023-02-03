import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { fullWidth, responsiveWidth } from '../../constants/metrics';
import { designColors } from '../../modules/ui/colors';
import StyledView from '../../modules/ui/StyledView';
import Typography from '../../modules/ui/Typography';

type ButtonProps = {
  title: string;
  onPress(): void;
  isLoading?: boolean;
  variant?: 'outlined' | 'secondary';
};

export default function Button({
  title,
  onPress,
  isLoading,
  variant,
}: ButtonProps) {
  switch (variant) {
    case 'outlined':
      return (
        <StyledView
          as={TouchableOpacity}
          onPress={onPress}
          width={fullWidth / 2 - 20}
          bgColor="light"
          borderRadius={4}
          alignItems="center"
          justifyContent="center"
          style={{ borderWidth: 1, borderColor: designColors.greyBorder }}
          p="s">
          {isLoading ? (
            <ActivityIndicator color={designColors.light} />
          ) : (
            <Typography variant="buttonOutlined">{title}</Typography>
          )}
        </StyledView>
      );
    case 'secondary':
      return (
        <StyledView
          as={TouchableOpacity}
          onPress={onPress}
          width={fullWidth / 2 - 20}
          bgColor="green"
          borderRadius={4}
          borderWidth={1}
          alignItems="center"
          justifyContent="center"
          borderColor={designColors.greyBorder}
          p="s">
          {isLoading ? (
            <ActivityIndicator color={designColors.light} />
          ) : (
            <Typography variant="button">{title}</Typography>
          )}
        </StyledView>
      );
    default:
      return (
        <StyledView
          as={TouchableOpacity}
          onPress={onPress}
          width={responsiveWidth(20)}
          bgColor="purple"
          borderRadius={4}
          alignItems="center"
          justifyContent="center"
          alignSelf="center"
          p="s">
          {isLoading ? (
            <ActivityIndicator color={designColors.light} />
          ) : (
            <Typography variant="button">{title}</Typography>
          )}
        </StyledView>
      );
  }
}
