import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login';
import Signup from '../screens/Signup';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icon from 'phosphor-react-native';
import { designColors } from '../modules/ui/colors';
import Typography from '../modules/ui/Typography';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabs = [
  {
    route: 'Home',
    label: 'Home',
    component: () => require('../screens/Home').default,
  },
];

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      {tabs.map(({ route, label, component }, index) => (
        <Tab.Screen
          name={route}
          getComponent={component}
          options={{
            tabBarLabel: ({ focused }) => (
              <Typography
                fontSize={10}
                color={focused ? designColors.purple : designColors.dark}>
                {label}
              </Typography>
            ),
            tabBarIcon: ({ focused }) => (
              <Icon.House
                size="24px"
                color={focused ? designColors.purple : designColors.dark}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'white' },
        }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
