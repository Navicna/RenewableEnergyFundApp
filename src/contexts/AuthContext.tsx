import React, { createContext, useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IAuthContextData {
  user: any;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export interface IAuthProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkIsLoggedIn = async () => {
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

  const login = async (response: any) => {
    try {
      if (response && response.token) {
        await AsyncStorage.setItem(
          '@AvaliaGAB:TOKEN',
          JSON.stringify(response.token),
        );
        await AsyncStorage.setItem(
          '@RenewableEnergyFundApp:USER',
          JSON.stringify(response),
        );

        setUser(response);
        setIsLoading(false);
      }
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('@AvaliaGAB:TOKEN');
    await AsyncStorage.removeItem('@AvaliaGAB:USER');
    setUser(null);
  };

  const defaultContext = {
    logout,
    login,
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
