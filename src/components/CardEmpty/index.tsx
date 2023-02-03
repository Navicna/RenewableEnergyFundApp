import React from 'react';

import StyledView, { StyledViewProps } from '../../modules/ui/StyledView';
import Typography from '../../modules/ui/Typography';

export default function CardEmpty({ ...props }: StyledViewProps) {
  return (
    <StyledView
      bgColor="greyLight"
      borderRadius={10}
      height={215}
      width={159}
      p="s"
      {...props}>
      <Typography variant="cardEmptyLabel">
        Why should you invest here?
      </Typography>
    </StyledView>
  );
}
