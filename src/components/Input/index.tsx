import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { isIos, responsiveWidth } from '../../constants/metrics';
import { designColors } from '../../modules/ui/colors';
import StyledView, { StyledViewProps } from '../../modules/ui/StyledView';
import Typography from '../../modules/ui/Typography';
import { Sora } from '../../modules/ui/Typography/types';
import * as Icon from 'phosphor-react-native';
import { Control, Controller } from 'react-hook-form';

type InputProps = {
  label: string;
  placeholder: string;
  isPassword?: boolean;
  form: {
    name: string;
    control: Control<any, any>;
  };
} & StyledViewProps;

export default function Input({
  label,
  placeholder,
  form,
  isPassword,
  ...props
}: InputProps) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Controller
      name={form.name}
      control={form.control}
      render={({ field, fieldState: { error } }) => (
        <StyledView width={responsiveWidth(20)} {...props}>
          <Typography variant="formLabel" mb="xxs">
            {label}
          </Typography>
          <StyledView
            as={TextInput}
            ref={field.ref}
            bgColor="greyLight"
            borderRadius={4}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={designColors.greyThin}
            onChangeText={field.onChange}
            secureTextEntry={!isVisible && isPassword}
            value={field.value}
            borderColor={error ? designColors.red : 'transparent'}
            borderWidth={error ? 1 : 0}
            p={isIos ? 18 : undefined}
          />
          {error?.message && (
            <Typography mt="xxs" variant="formError">
              {error.message}
            </Typography>
          )}
          {isPassword && (
            <StyledView
              position="absolute"
              right={8}
              bottom={error ? 30 : 12}
              onPress={() => setIsVisible(prevState => !prevState)}
              as={TouchableOpacity}>
              {isVisible ? (
                <Icon.Eye size="24px" color={designColors.greyMedium} />
              ) : (
                <Icon.EyeSlash size="24px" color={designColors.greyMedium} />
              )}
            </StyledView>
          )}
        </StyledView>
      )}
    />
  );
}

const styles = StyleSheet.create({
  input: { paddingLeft: 8, fontFamily: Sora.Regular },
});
