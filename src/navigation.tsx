import React from 'react';
import { ImageBackground, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyMusicScreen } from './pages/MyMusicScreen';
import { HomeScreen } from './pages/HomeScreen';
import { SettingsScreen } from './pages/SettingScreen';
import { PlayListScreen } from './pages/PlayListScreen';
import { PlayerScreen } from './pages/PlayerScreen';
import { ProfileScreen } from './pages/ProfileScreen';
import { FindScreen } from './pages/FindScreen';
import { useTypedSelector } from './hook/useTypedSelector';
import { lang } from './lang/lang';
import { AcentColor } from './style/theme';
import { Logo } from './components/logo';
import { IconMusic, IconFind, IconUser } from './components/icons';

const Tab = createBottomTabNavigator();

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
        headerLeftLabelVisible: false,
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
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: AcentColor,
        headerLeftLabelVisible: false,
      }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="Playlist" component={PlayListScreen} />
      <HomeStack.Screen name="Player" component={PlayerScreen} />
    </HomeStack.Navigator>
  );
};

const TabStack = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const colorTxt = !isDarkMode ? '#000' : '#fff';
  const colorBar = isDarkMode ? '#000' : '#fff';
  const colorsBCG = StyleSheet.create({
    backgroundColor: '#000',
  });

  const lng = useTypedSelector((state) => state.language);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          borderColor: AcentColor,
          paddingBottom: 0,
          bottom: 0,
          height: 90,
          backgroundColor: colorBar,
        },
        tabBarActiveTintColor: AcentColor,
        tabBarInactiveTintColor: colorTxt,
        tabBarActiveBackgroundColor: colorBar,
        tabBarInactiveBackgroundColor: colorBar,
      }}
    >
      <Tab.Screen
        name={lang[lng].menu.home}
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: AcentColor,
          tabBarInactiveTintColor: colorTxt,
          tabBarIcon: () => <Logo size={0.7} />,
        }}
      />
      <Tab.Screen
        name={lang[lng].menu.myMusic}
        component={MyMusicScreen}
        options={{
          tabBarActiveTintColor: AcentColor,
          tabBarInactiveTintColor: colorTxt,
          tabBarIcon: () => <IconMusic />,
        }}
      />
      <Tab.Screen
        name={lang[lng].menu.find}
        component={FindScreen}
        options={{
          tabBarActiveTintColor: AcentColor,
          tabBarInactiveTintColor: colorTxt,
          tabBarIcon: () => <IconFind />,
        }}
      />
      <Tab.Screen
        name={lang[lng].menu.profile.profile}
        component={ProfileStackScreen}
        options={{
          tabBarActiveTintColor: AcentColor,
          tabBarInactiveTintColor: colorTxt,
          tabBarIcon: () => <IconUser />,
        }}
      />
    </Tab.Navigator>
  );
};

export const Navigations = () => (
  <NavigationContainer theme={MyTheme}>
    <TabStack />
  </NavigationContainer>
);

const MyTheme = {
  ...DefaultTheme,
  colors: {
    text: AcentColor,
    notification: 'rgb(255, 255, 255, 0.3)',
    headerTintColor: AcentColor,
  },
};
