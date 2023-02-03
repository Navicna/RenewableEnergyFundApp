import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, ScrollView } from 'react-native';
import { Pressable, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { responsiveWidth } from '../../constants/metrics';
import StyledView from '../../modules/ui/StyledView';
import Typography from '../../modules/ui/Typography';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IAuthContextData, useAuthContext } from '../../contexts/AuthContext';

export default function Signup() {
  const [isChecked, setIsChecked] = useState(false);

  const { navigate, reset } = useNavigation();
  const { createUser } = useAuthContext();

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Please, enter your first name'),
    lastName: Yup.string().required('Please, enter your last name'),
    email: Yup.string().email('Please, enter a valid email'),
    password: Yup.string()
      .required('Please, enter your password')
      .test('password', '(min 8 characters)', value =>
        value ? value?.length >= 8 : false,
      ),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleSubmitForm = async (data: IAuthContextData['user']) => {
    if (data && !isChecked) {
      return Alert.alert('You must accept the privacy terms to continue.');
    }
    isChecked &&
      createUser(data).then(() => {
        reset({
          index: 0,
          routes: [{ name: 'Login' as never }],
        });
      });
  };

  return (
    <StyledView>
      <Header variant="signup" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StyledView alignItems="center" justifyContent="center" pb="xl">
          <Typography variant="header" mv="m">
            Create your account
          </Typography>
          <Input
            label="First Name"
            mb="m"
            placeholder="Victor"
            form={{
              name: 'firstName',
              control,
            }}
          />
          <Input
            label="Last Name"
            mb="m"
            placeholder="Pinheiro"
            form={{
              name: 'lastName',
              control,
            }}
          />
          <Input
            label="Email"
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
            mb="m"
            placeholder="Minimum 8 characters"
            form={{
              name: 'password',
              control,
            }}
          />
          <StyledView
            flexDirection="row"
            width={responsiveWidth(20)}
            mb="l"
            pr="l">
            <Checkbox
              isChecked={isChecked}
              onPress={() => setIsChecked(prevState => !prevState)}
              mr="xs"
            />
            <Typography>
              I am over 18 years of age and I have read and agree to the{' '}
              <Typography color="dark">Terms of Service</Typography> and{' '}
              <Typography color="dark">Privacy policy</Typography>.
            </Typography>
          </StyledView>
          <Button
            title="Create account"
            onPress={handleSubmit(handleSubmitForm)}
          />
          <Pressable onPress={() => navigate('Login' as never)}>
            <Typography mt="s" color="greyMedium" mb="xxxl">
              Already have an account?{' '}
              <Typography color="dark" style={styles.singup}>
                Log in Here
              </Typography>
            </Typography>
          </Pressable>
        </StyledView>
      </ScrollView>
    </StyledView>
  );
}

const styles = StyleSheet.create({
  singup: { textDecorationLine: 'underline' },
});
