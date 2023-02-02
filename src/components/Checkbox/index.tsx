import React from 'react';
import { TouchableOpacity } from 'react-native';
import { designColors } from '../../modules/ui/colors';
import StyledView, { StyledViewProps } from '../../modules/ui/StyledView';

type CheckboxProps = {
  onPress(): void;
  isChecked: boolean;
} & StyledViewProps;

export default function Checkbox({
  onPress,
  isChecked,
  ...props
}: CheckboxProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledView
        width={20}
        height={20}
        borderColor={designColors.greyLight}
        borderRadius={2}
        borderWidth={2}
        bgColor={isChecked ? 'green' : 'transparent'}
        {...props}
      />
    </TouchableOpacity>
  );
}
