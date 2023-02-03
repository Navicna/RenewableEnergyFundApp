import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { responsiveWidth } from '../../constants/metrics';
import { designColors } from '../../modules/ui/colors';
import StyledView from '../../modules/ui/StyledView';
import Typography from '../../modules/ui/Typography';

type ButtonProps = {
  title: string;
  onPress(): void;
  isLoading?: boolean;
};

export default function Button({ title, onPress, isLoading }: ButtonProps) {
  return (
    <StyledView
      as={TouchableOpacity}
      onPress={onPress}
      width={responsiveWidth(20)}
      bgColor="purple"
      borderRadius={4}
      alignItems="center"
      justifyContent="center"
      p="s">
      {isLoading ? (
        <ActivityIndicator color={designColors.light} />
      ) : (
        <Typography variant="button">{title}</Typography>
      )}
    </StyledView>
  );
}
