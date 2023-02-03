import React from 'react';
import Lottie from 'lottie-react-native';
import StyledView from '../../modules/ui/StyledView';
import Button from '../../components/Button';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function Portfolio() {
  const { logout } = useAuthContext();
  const { navigate } = useNavigation();
  return (
    <StyledView flex={1} bgColor="light">
      <Lottie
        source={require('../../assets/json/animation.json')}
        autoPlay
        loop
      />
      <StyledView mt="m">
        <Button
          title="Logout"
          onPress={async () => {
            await logout().then(() => {
              navigate('Login' as never);
            });
          }}
        />
      </StyledView>
    </StyledView>
  );
}
