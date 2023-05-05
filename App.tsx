import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from './src/pages/ProfileScreen';
import { HomeScreen } from './src/pages/HomeScreen';
import { SettingsScreen } from './src/pages/SettingScreen';
import { PlayListScreen } from './src/pages/PlayListScreen';
import { AcentColor, MainThemeColor } from './src/style/theme';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTintColor: AcentColor,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTintColor: AcentColor,
        }}
      />
      <Stack.Screen
        name="PlayList"
        component={PlayListScreen}
        options={{
          headerTintColor: AcentColor,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTintColor: AcentColor,
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer
      screenOptions={{
        headerTitleStyle: {
          color: AcentColor,
        },
      }}
      theme={{
        colors: { background: MainThemeColor() },
      }}
    >
      <MyStack />
    </NavigationContainer>
  );
}
