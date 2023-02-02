import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {responsiveWidth} from '../../constants/metrics';
import {designColors} from '../../modules/ui/colors';
import StyledView from '../../modules/ui/StyledView';
import Typography from '../../modules/ui/Typography';
import {Sora} from '../../modules/ui/Typography/types';
import * as Icon from 'phosphor-react-native';

type InputProps = {
  label: string;
  placeholder: string;
  onChangeText(text: string): void;
  isPassword?: boolean;
  value: string;
};

export default function Input({
  label,
  placeholder,
  onChangeText,
  isPassword,
  value,
}: InputProps) {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <StyledView width={responsiveWidth(20)}>
      <Typography variant="formLabel" mb="xxs">
        {label}
      </Typography>
      <StyledView
        as={TextInput}
        bgColor="greyLight"
        borderRadius={4}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={designColors.greyThin}
        onChangeText={onChangeText}
        secureTextEntry={!isVisible && isPassword}
        value={value}
      />
      {isPassword && (
        <StyledView
          position="absolute"
          right={8}
          bottom={12}
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
  );
}

const styles = StyleSheet.create({
  input: {paddingLeft: 8, fontFamily: Sora.Regular},
});
