import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Pressable, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import StyledView from '../../modules/ui/StyledView';
import Typography from '../../modules/ui/Typography';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthContext } from '../../contexts/AuthContext';

export default function Login() {
  const { navigate } = useNavigation();
  const { login, isLoading } = useAuthContext();

  const validationSchema = Yup.object({
    email: Yup.string().email('Please, enter a valid email'),
    password: Yup.string()
      .required('Please, enter your password')
      .test('password', '(min 8 characters)', value =>
        value ? value?.length >= 8 : false,
      ),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: 'victorcorassa@gmail.com',
      password: 'Master123',
    },
  });

  const handleSubmitForm = (data: { email: string; password: string }) => {
    login(data);
  };

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
          form={{
            name: 'email',
            control,
          }}
        />
        <Input
          label="Password"
          isPassword
          mb="xl"
          placeholder="Minimum 8 characters"
          form={{
            name: 'password',
            control,
          }}
        />
        <Button
          title="Login"
          onPress={handleSubmit(handleSubmitForm)}
          isLoading={isLoading}
        />
        <Pressable onPress={() => navigate('Signup' as never)}>
          <Typography mt="s" color="greyMedium">
            Don’t have an account?{' '}
            <Typography style={styles.singup}>Sign up</Typography> here
          </Typography>
        </Pressable>
      </StyledView>
    </StyledView>
  );
}

const styles = StyleSheet.create({
  singup: { textDecorationLine: 'underline' },
});
