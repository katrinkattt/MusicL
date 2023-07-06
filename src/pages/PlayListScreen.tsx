import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  useColorScheme,
  ActivityIndicator,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import TrackPlayer, {
  useTrackPlayerEvents,
  usePlaybackState,
  Event,
  State,
  RepeatMode,
} from 'react-native-track-player';
// import { PlayerAction } from '../redux/player/playerSlice';
import { useTypedSelector } from '../hook/useTypedSelector';
import { AcentColor, ScreenWidth, colorTxt } from '../style/theme';
import { QueueList } from '../playlists/dayPlayList';
import { setupPlayer, addTracks } from '../../service';
import { MainTheme } from '../style/theme';

function Playlist() {
  console.log('Playlist');
  const [queue, setQueue] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);

  async function loadPlaylist() {
    const queue = await TrackPlayer.getQueue();

    setQueue(queue);
  }

  useEffect(() => {
    loadPlaylist();
  }, []);

  // useTrackPlayerEvents([Event.PlaybackTrackChanged], (event) => {
  //   if (event.state == State.nextTrack) {
  //     TrackPlayer.getActiveTrackIndex().then((index) => setCurrentTrack(index));
  //   }
  // });

  function PlaylistItem({ index, element }) {
    console.log('PlaylistItem', element);

    return (
      <View
        style={
          currentTrack == index
            ? [styles.trackContainer, styles.trackContainerActive]
            : styles.trackContainer
        }
      >
        <View style={styles.img_track_load}>
          {(element?.artwork && element?.loadImg && (
            <Image style={styles.img_track} source={require('../public/musicimg.jpeg')} />
          )) ||
            (element?.artwork && (
              <Image style={styles.img_track} source={{ uri: element?.artwork }} />
            ))}
        </View>

        <View style={{ padding: 10, width: ScreenWidth * 0.55 }}>
          <Text
            numberOfLines={2}
            style={[
              styles.playlistItem,
              { color: currentTrack == index ? AcentColor : colorTxt() },
            ]}
          >
            {element?.title}
          </Text>
          <Text numberOfLines={1} style={{ color: colorTxt() }}>
            {element?.artist}
          </Text>
        </View>
        <Controls onShuffle={handleShuffle} />
      </View>
    );
  }

  async function handleShuffle() {
    console.log('handleShuffle');
    //   let queue = await TrackPlayer.getQueue();
    //   await TrackPlayer.reset();
    //   queue.sort(() => Math.random() - 0.5);
    //   await TrackPlayer.add(queue);

    //   loadPlaylist();
  }
  // console.log(queue, 'QEQEQ');

  return (
    <View>
      <FlatList
        data={queue}
        renderItem={({ item, index }) => <PlaylistItem index={index} element={item} />}
      />
    </View>
  );
}

const Controls = ({ onShuffle }) => {
  const playerState = usePlaybackState();
  console.log('PLAYR STATE', playerState);

  const isPlaying = playerState.state == 'playing';

  async function handlePlayPress() {
    if ((await TrackPlayer.getState()) == State.Playing) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  }

  return (
    <TouchableOpacity onPress={handlePlayPress} style={{ marginTop: 16, width: 60, height: 60 }}>
      {isPlaying ? (
        <Image
          style={{ width: 60, resizeMode: 'contain', tintColor: AcentColor }}
          source={require('../public/icons8-pause-50.png')}
        />
      ) : (
        <Image
          style={{ width: 60, resizeMode: 'contain', tintColor: AcentColor }}
          source={require('../public/icons-play-50.png')}
        />
      )}
    </TouchableOpacity>
  );
};
export const PlayListScreen = () => {
  const navigation = useNavigation();
  /// CURRENT PLAYLIST REDUCER
  const player = useTypedSelector((state) => state.player);
  const nameList = player[0]?.nameList || 'Playlist';
  const dataState = player[0]?.data;

  // const { data, nameList } = QueueList;
  navigation.setOptions({ title: nameList });

  const [isPlayerReady, setIsPlayerReady] = useState(true);

  // useEffect(() => {
  //   async function setup() {
  //     let isSetup = await setupPlayer();
  //     setIsPlayerReady(isSetup);
  //     await TrackPlayer.setRepeatMode(RepeatMode.Queue);
  //   }

  //   setup();
  // }, []);

  // useEffect(() => {
  //   if (data.length <= 0 && !isPlayerReady) return;
  //   const addTracks = async () => {
  //     await TrackPlayer.reset().then(() => {
  //       TrackPlayer.add(
  //         data.map((item) => {
  //           return {
  //             id: item.id,
  //             url: item.url,
  //             title: item.title,
  //             artist: item.artist,
  //             artwork: item.artwork,
  //             color: AcentColor,
  //           };
  //         })
  //       ).then(() => {
  //         TrackPlayer.skip(data[0].id);
  //         TrackPlayer.play();
  //         setIsPlayerReady(true);
  //       });
  //     });
  //   };
  //   addTracks();
  // }, [data]);
  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();
      // setQueueImp(queue);
      if (isSetup && queue.length <= 0) {
        await addTracks(dataState);
      }
      setIsPlayerReady(isSetup);
    }

    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <MainTheme>
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#bbb" />
        </SafeAreaView>
      </MainTheme>
    );
  }
  return (
    <MainTheme>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Playlist />
      </View>
    </MainTheme>
  );
};

const styles = StyleSheet.create({
  trackContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  trackContainerActive: {
    backgroundColor: 'rgba(255, 225, 225, .1)',
  },
  img_track_load: {
    height: ScreenWidth * 0.2,
    width: ScreenWidth * 0.2,
    backgroundColor: AcentColor,
  },
  img_track: {
    height: ScreenWidth * 0.2,
    width: ScreenWidth * 0.2,
    resizeMode: 'contain',
  },
  playlistItem: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'left',
  },
  play_bar: {
    height: 3,
    marginVertical: 12,
    borderWidth: 0,
  },
});
