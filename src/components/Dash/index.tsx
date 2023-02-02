import React from 'react';

import StyledView, { StyledViewProps } from '../../modules/ui/StyledView';

export default function Dash({ ...props }: StyledViewProps) {
  return (
    <StyledView
      bgColor="greyLight"
      width={50}
      height={5}
      borderRadius={4}
      {...props}
    />
  );
}
