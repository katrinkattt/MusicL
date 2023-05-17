import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyMusicScreen } from './src/pages/MyMusicScreen';
import { HomeScreen } from './src/pages/HomeScreen';
import { SettingsScreen } from './src/pages/SettingScreen';
import { PlayListScreen } from './src/pages/PlayListScreen';
import { PlayerScreen } from './src/pages/PlayerScreen';
import { ProfileScreen } from './src/pages/ProfileScreen';
import { FindScreen } from './src/pages/FindScreen';
import { AcentColor } from './src/style/theme';
import { Logo } from './src/components/logo';

const Tab = createBottomTabNavigator();

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="Settings" component={SettingsScreen} />
    </ProfileStack.Navigator>
  );
};

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="Playlist" component={PlayListScreen} />
      <HomeStack.Screen name="Player" component={PlayerScreen} />
    </HomeStack.Navigator>
  );
};

const TabStack = () => {
  const isDarkMode = true;
  const colorTxt = !isDarkMode ? '#000' : '#fff';
  const colorBar = isDarkMode ? '#000' : '#fff';
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: 'absolute', borderColor: AcentColor },
        tabBarActiveTintColor: AcentColor,
        tabBarInactiveTintColor: colorTxt,
        tabBarActiveBackgroundColor: colorBar,
        tabBarInactiveBackgroundColor: colorBar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: AcentColor,
          tabBarInactiveTintColor: colorTxt,
          tabBarIcon: () => <Logo size={0.7} />,
        }}
      />
      <Tab.Screen
        name="My music"
        component={MyMusicScreen}
        options={{
          tabBarActiveTintColor: AcentColor,
          tabBarInactiveTintColor: colorTxt,
        }}
      />
      <Tab.Screen
        name="Find"
        component={FindScreen}
        options={{
          tabBarActiveTintColor: AcentColor,
          tabBarInactiveTintColor: colorTxt,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarActiveTintColor: AcentColor,
          tabBarInactiveTintColor: colorTxt,
        }}
      />
    </Tab.Navigator>
  );
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    text: AcentColor,
    notification: 'rgb(255, 255, 255, 0.3)',
    headerTintColor: AcentColor,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <TabStack />
    </NavigationContainer>
  );
}
