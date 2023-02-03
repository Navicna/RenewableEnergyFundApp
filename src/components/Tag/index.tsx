import React from 'react';

import StyledView, { StyledViewProps } from '../../modules/ui/StyledView';
import Typography from '../../modules/ui/Typography';
import * as Icon from 'phosphor-react-native';
import { designColors } from '../../modules/ui/colors';

export default function Tag({ ...props }: StyledViewProps) {
  return (
    <StyledView
      bgColor="purpleLight"
      p="xs"
      borderRadius={4}
      {...props}
      flexDirection="row"
      alignItems="center"
      justifyContent="center">
      <Icon.Coin size="14px" color={designColors.purple} />
      <Typography variant="tag" ml="xs">
        Earn Rewards
      </Typography>
    </StyledView>
  );
}
