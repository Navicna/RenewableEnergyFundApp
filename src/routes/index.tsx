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
    component: () => require('../screens/Home').default,
    tabBarLabel: ({ focused }: { focused: boolean }) => (
      <Typography
        fontSize={10}
        color={focused ? designColors.purple : designColors.dark}>
        Home
      </Typography>
    ),
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <Icon.House
        size="24px"
        color={focused ? designColors.purple : designColors.dark}
      />
    ),
  },
  {
    route: 'Trade',
    component: () => require('../screens/Details').default,
    tabBarLabel: ({ focused }: { focused: boolean }) => (
      <Typography
        fontSize={10}
        color={focused ? designColors.purple : designColors.dark}>
        Trade
      </Typography>
    ),
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <Icon.ArrowsLeftRight
        size="24px"
        color={focused ? designColors.purple : designColors.dark}
      />
    ),
  },
  {
    route: 'Portfolio',
    label: 'Portfolio',
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
      {tabs.map(({ route, component, tabBarLabel, tabBarIcon }) => (
        <Tab.Screen
          key={`tab-navigator-${route}`}
          name={route}
          getComponent={component}
          options={{
            tabBarLabel,
            tabBarIcon,
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
        <Stack.Screen name="Tab" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
