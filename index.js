/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as MusicL } from './app.json';
import TrackPlayer from 'react-native-track-player';

AppRegistry.registerComponent(MusicL, () => App);
TrackPlayer.registerPlaybackService(() => require('./service'));
