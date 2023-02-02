import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { designColors } from './src/modules/ui/colors';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: designColors.light,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </SafeAreaView>
  );
}

export default App;
