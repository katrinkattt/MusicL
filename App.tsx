import React from 'react';
// import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { Section } from './src/components/section';
// import { Logo } from './src/components/logo';
// import { RUS } from './src/lang/lang';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen } from './src/pages/ProfileScreen';
import { HomeScreen } from './src/pages/HomeScreen';
import { SettingsScreen } from './src/pages/SettingScreen';
import { PlayListScreen } from './src/pages/PlayListScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="PlayList" component={PlayListScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
