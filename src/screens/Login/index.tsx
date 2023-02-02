import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import StyledView from '../../modules/ui/StyledView';
import Typography from '../../modules/ui/Typography';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <StyledView>
      <Header variant="login" />
      <StyledView alignItems="center" justifyContent="center">
        <Typography variant="header" mv="m">
          Login
        </Typography>
        <Input
          label="E-mail"
          mb="m"
          placeholder="victorcorassa@gmail.com"
          onChangeText={setEmail}
          value={email}
        />
        <Input
          label="Password"
          isPassword
          mb="xl"
          placeholder="Minimum 8 characters"
          onChangeText={setPassword}
          value={password}
        />
        <Button title="Login" onPress={() => {}} />
        <Typography mt="s" color="greyMedium">
          Don’t have an account?{' '}
          <Typography style={styles.singup}>Sign up</Typography> here
        </Typography>
      </StyledView>
    </StyledView>
  );
}

const styles = StyleSheet.create({
  singup: { textDecorationLine: 'underline' },
});
