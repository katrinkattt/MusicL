// import { useState, useEffect } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import {
//   View,
//   useColorScheme,
//   ActivityIndicator,
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';
// import TrackPlayer, {
//   useTrackPlayerEvents,
//   usePlaybackState,
//   useProgress,
//   Event,
//   State,
// } from 'react-native-track-player';
// import * as Progress from 'react-native-progress';
// import { MainText } from '../style/theme';
// import { AcentColor, ScreenWidth } from '../style/theme';
// import { QueueList } from '../../playlists/dayPlayList';
// import { setupPlayer, addTracks } from '../../service';

// // const PlayerInfo = () => {
// //   console.log('PlayerInfo');
// //   const isDarkMode = useColorScheme() === 'dark';

// //   const [info, setInfo] = useState({});
// //   useEffect(() => {
// //     setTrackInfo();
// //   }, []);

// //   useTrackPlayerEvents([Event.PlaybackTrackChanged], (event) => {
// //     if (event.state == State.nextTrack) {
// //       setTrackInfo();
// //     }
// //   });

// //   async function setTrackInfo() {
// //     const track = await TrackPlayer.getActiveTrackIndex();
// //     const info = await TrackPlayer.getTrack(track);
// //     setInfo(info);
// //   }
// //   console.log(info, 'INFOOOOO');

// //   return (
// //     <View>
// //       <Text style={{ color: isDarkMode ? '#fff' : '#ccc', fontWeight: '600' }}>{info?.title}</Text>
// //       <Text style={{ color: isDarkMode ? '#fff' : '#ccc' }}>{info?.artist}</Text>
// //     </View>
// //   );
// // };

// function TrackProgress() {
//   console.log('TrackProgress');
//   const isDarkMode = useColorScheme() === 'dark';
//   const { position, duration } = useProgress();

//   function format(seconds) {
//     let mins = parseInt(seconds / 60)
//       .toString()
//       .padStart(2, '0');
//     let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
//     return `${mins}:${secs}`;
//   }

//   return (
//     <View style={{ height: 100 }}>
//       <Progress.Bar
//         style={[styles.play_bar, { backgroundColor: isDarkMode ? '#999' : '#fff' }]}
//         color={AcentColor}
//         width={ScreenWidth * 0.84}
//         progress={0.3}
//       />
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//         <Text style={{ color: AcentColor }}>{format(position)}</Text>
//         <Text style={{ color: AcentColor }}>{format(duration)}</Text>
//       </View>
//     </View>
//   );
// }

// /////
// function Playlist() {
//   console.log('Playlist');
//   const [queue, setQueue] = useState([]);
//   const [currentTrack, setCurrentTrack] = useState(0);

//   async function loadPlaylist() {
//     const queue = await TrackPlayer.getQueue();
//     setQueue(queue);
//   }

//   useEffect(() => {
//     loadPlaylist();
//   }, []);

//   useTrackPlayerEvents([Event.PlaybackTrackChanged], (event) => {
//     if (event.state == State.nextTrack) {
//       TrackPlayer.getActiveTrackIndex().then((index) => setCurrentTrack(index));
//     }
//   });

//   function PlaylistItem({ element }) {
//     console.log('PlaylistItem', element);

//     const isDarkMode = useColorScheme() === 'dark';
//     // function handleItemPress() {
//     //   TrackPlayer.skip(index);
//     // }
//     return (
//       <View>
//         <View style={styles.img_track_load}>
//           {(element?.artwork && element?.loadImg && (
//             <Image style={styles.img_track} source={require('../public/musicimg.jpeg')} />
//           )) ||
//             (element?.artwork && (
//               <Image style={styles.img_track} source={{ uri: element?.artwork }} />
//             ))}
//         </View>
//         <View style={{ marginTop: -5, alignItems: 'center' }}>
//           <Text style={[styles.playlistItem, { color: isDarkMode ? '#fff' : '#ccc' }]}>
//             {element?.title}
//           </Text>
//           <Text style={{ color: isDarkMode ? '#fff' : '#ccc', marginBottom: 10 }}>
//             {element?.artist}
//           </Text>
//         </View>
//         <TrackProgress />
//       </View>
//     );
//   }

//   async function handleShuffle() {
//     console.log('handleShuffle');
//     let queue = await TrackPlayer.getQueue();
//     await TrackPlayer.reset();
//     queue.sort(() => Math.random() - 0.5);
//     await TrackPlayer.add(queue);

//     loadPlaylist();
//   }
//   console.log(queue, 'QEQEQ');

//   return (
//     <View style={styles.trackContainer}>
//       <PlaylistItem element={queue[currentTrack]} />
//       <Controls onShuffle={handleShuffle} />
//     </View>
//   );
// }

// const Controls = ({ onShuffle }) => {
//   console.log('Controls');

//   const playerState = usePlaybackState();

//   async function handlePlayPress() {
//     if ((await TrackPlayer.getState()) == State.Playing) {
//       TrackPlayer.pause();
//     } else {
//       TrackPlayer.play();
//     }
//   }

//   return (
//     <View>
//       <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
//         <TouchableOpacity
//           onPress={() => {
//             TrackPlayer.skipToPrevious();
//           }}
//         >
//           <Image
//             style={{
//               resizeMode: 'contain',
//               transform: [{ rotateY: '180deg' }],
//               tintColor: AcentColor,
//               aspectRatio: 0.6,
//             }}
//             source={require('../public/icons8-next-others-96.png')}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handlePlayPress}>
//           {playerState == State.Playing ? (
//             <Image
//               style={{ resizeMode: 'contain', tintColor: AcentColor, aspectRatio: 2.5 }}
//               source={require('../public/icons8-pause-50.png')}
//             />
//           ) : (
//             <Image
//               style={{ resizeMode: 'contain', tintColor: AcentColor, aspectRatio: 2.5 }}
//               source={require('../public/icons-play-50.png')}
//             />
//           )}
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
//           <Image
//             style={{ resizeMode: 'contain', tintColor: AcentColor, aspectRatio: 0.6 }}
//             source={require('../public/icons8-next-others-96.png')}
//           />
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity
//         style={{ position: 'absolute', right: -36, bottom: -20 }}
//         onPress={onShuffle}
//       >
//         <Image
//           style={{
//             resizeMode: 'contain',
//             tintColor: AcentColor,
//             aspectRatio: 0.4,
//           }}
//           source={require('../public/shuffle.png')}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };
// export const Player = () => {
//   const navigation = useNavigation();

//   const { list, nameList } = QueueList;
//   /// CURRENT PLAYLIST NEED REDUCER

//   const [isPlayerReady, setIsPlayerReady] = useState(false);

//   useEffect(() => {
//     async function setup() {
//       let isSetup = await setupPlayer();

//       const queue = await TrackPlayer.getQueue();

//       console.log('list', list);
//       console.log('queue', queue);

//       if (isSetup && queue.length <= 0) {
//         await addTracks(...queue);
//       }
//       setIsPlayerReady(isSetup);
//     }

//     setup();
//   }, []);
//   if (!isPlayerReady) {
//     return (
//       <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <ActivityIndicator size="large" color="#bbb" />
//       </SafeAreaView>
//     );
//   }
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Playlist />
//       {/* <TrackProgress /> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   trackContainer: {
//     position: 'absolute',
//     top: 0,
//     alignItems: 'center',
//   },
//   img_track_load: {
//     height: ScreenWidth * 0.8,
//     width: ScreenWidth * 0.8,
//     backgroundColor: AcentColor,
//     marginBottom: 16,
//   },
//   img_track: {
//     height: ScreenWidth * 0.8,
//     width: ScreenWidth * 0.8,
//     resizeMode: 'contain',
//   },
//   playlistItem: {
//     fontSize: 20,
//     fontWeight: '700',
//     textAlign: 'center',
//   },
//   play_bar: {
//     height: 3,
//     marginVertical: 12,
//     borderWidth: 0,
//   },
// });
