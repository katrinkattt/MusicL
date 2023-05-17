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
} from 'react-native-track-player';
import { AcentColor, ScreenWidth, colorTxt } from '../style/theme';
import { QueueList } from '../../playlists/dayPlayList';
import { setupPlayer, addTracks } from '../../service';

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
    let queue = await TrackPlayer.getQueue();
    await TrackPlayer.reset();
    queue.sort(() => Math.random() - 0.5);
    await TrackPlayer.add(queue);

    loadPlaylist();
  }
  console.log(queue, 'QEQEQ');

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
  console.log('Controls');

  const playerState = usePlaybackState();

  async function handlePlayPress() {
    if ((await TrackPlayer.getState()) == State.Playing) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  }

  return (
    <TouchableOpacity onPress={handlePlayPress} style={{ marginTop: 16, width: 60, height: 60 }}>
      {!playerState == State.Playing ? (
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

  const { list, nameList } = QueueList;
  navigation.setOptions({ title: nameList });
  /// CURRENT PLAYLIST NEED REDUCER

  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();

      console.log('list', list);
      console.log('queue', queue);

      if (isSetup && queue.length <= 0) {
        await addTracks(...queue);
      }
      setIsPlayerReady(isSetup);
    }

    setup();
  }, []);
  if (isPlayerReady) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#bbb" />
      </SafeAreaView>
    );
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Playlist />
    </View>
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
