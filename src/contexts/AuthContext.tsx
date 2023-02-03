import React, { createContext, useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';

export interface IAuthContextData {
  user: {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
  };
  logout(): Promise<void>;
  login(response: { email: string; password: string }): Promise<void>;
  createUser(data: IAuthContextData['user']): Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export interface IAuthProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log({ user });

  useEffect(() => {
    const checkIsLoggedIn = async () => {
      setIsLoading(true);
      const storedUser = await AsyncStorage.getItem(
        '@RenewableEnergyFundApp:USER',
      );

      console.log({ storedUser });

      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      }

      setIsLoading(false);
    };

    checkIsLoggedIn();
  }, []);

  const login = async (response: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      const createdUsers = await AsyncStorage.getItem('@CREATED_USERS');
      if (createdUsers) {
        const parsedUsers = JSON.parse(createdUsers);
        const myUser = parsedUsers.find(
          ({ email, password }: IAuthContextData['user']) =>
            email === response.email && password === response.password,
        );
        if (myUser) {
          await AsyncStorage.setItem(
            '@RenewableEnergyFundApp:USER',
            JSON.stringify(myUser),
          );
          setUser(myUser);
          Toast.show({
            type: 'error',
            text1: 'Ops...',
            text2:
              'Não existe empresa avaliadora cadastrada com esse CNJP, fale com a equipe administrativa.',
            visibilityTime: 5000,
            props: {
              text2Style: {
                width: '50px',
              },
            },
          });
        }
      } else {
        Alert.alert('Ops', 'Não conseguimos encontrar este usuário.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('@AvaliaGAB:TOKEN');
    await AsyncStorage.removeItem('@AvaliaGAB:USER');
    setUser(null);
  };

  const createUser = async (data: IAuthContextData['user']) => {
    try {
      setIsLoading(true);
      const createdUsers = await AsyncStorage.getItem('@CREATED_USERS');
      const users = [];
      users.push(data);
      if (createdUsers) {
        users.push(...createdUsers);
      }
      await AsyncStorage.setItem('@CREATED_USERS', JSON.stringify(users));
      Alert.alert('Tudo certo!', 'Conta criada com sucesso!!!');
    } finally {
      setIsLoading(false);
    }
  };

  const defaultContext = {
    logout,
    login,
    createUser,
    user,
    isLoading,
  };

  return (
    <AuthContext.Provider value={defaultContext}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => React.useContext(AuthContext);
export { AuthProvider, useAuthContext };
