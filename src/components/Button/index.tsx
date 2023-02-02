import React from 'react';
import {TouchableOpacity} from 'react-native';
import {responsiveWidth} from '../../constants/metrics';
import StyledView from '../../modules/ui/StyledView';
import Typography from '../../modules/ui/Typography';

type ButtonProps = {
  title: string;
  onPress(): void;
};

export default function Button({title, onPress}: ButtonProps) {
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
      <Typography variant="button">{title}</Typography>
    </StyledView>
  );
}
