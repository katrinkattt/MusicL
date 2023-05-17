import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  ActivityIndicator,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import TrackPlayer, {
  useTrackPlayerEvents,
  usePlaybackState,
  useProgress,
  Event,
  State,
} from 'react-native-track-player';
import * as Progress from 'react-native-progress';
import { AcentColor, ScreenWidth, colorTxt } from '../style/theme';
import { QueueList } from '../../playlists/dayPlayList';
import { setupPlayer, addTracks } from '../../service';
import { getPlaybackState } from 'react-native-track-player/lib/trackPlayer';

/////
const events = [Event.PlaybackState, Event.PlaybackError];

function Playlist() {
  console.log('Playlist');
  const [queue, setQueue] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [playerState, setPlayerState] = useState(null);

  async function loadPlaylist() {
    const getQueue = await TrackPlayer.getQueue();
    setQueue(getQueue);
  }

  useEffect(() => {
    loadPlaylist();
  }, []);

  useTrackPlayerEvents(events, (event) => {
    if (event.type === Event.PlaybackError) {
      console.warn('An error occured while playing the current track.');
    }
    if (event.type === Event.PlaybackState) {
      setPlayerState(event.state);
    }
  });
  // const isPlaying = playerState === State.Playing;

  const TrackProgress = ({ durationDefault }) => {
    console.log('TrackProgress');
    const { position, duration } = useProgress();

    const format = (seconds) => {
      let mins = parseInt(seconds / 60)
        .toString()
        .padStart(2, '0');
      let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
      return `${mins}:${secs}`;
    };
    const progress = position !== 0 ? position / duration : 0;
    return (
      <View style={{ height: 100 }}>
        <Progress.Bar
          style={[styles.play_bar, { backgroundColor: colorTxt() }]}
          color={AcentColor}
          width={ScreenWidth * 0.84}
          progress={progress}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: AcentColor }}>{format(position)}</Text>
          <Text style={{ color: AcentColor }}>
            {format(durationDefault ? durationDefault : duration)}
          </Text>
        </View>
      </View>
    );
  };
  const Controls = ({ onShuffle }) => {
    const playerState = usePlaybackState();
    const isPlaying = playerState === State.Playing;
    async function handlePlayPress() {
      console.log('HANDLE PLAYYYYYYYYY  queue', queue);
      const res = (await getPlaybackState()).state;
      console.log('RESSSSS getPlaybackState____', res);

      if (isPlaying) {
        console.log('PAUSEEEEEEEEEEEE');
        TrackPlayer.pause();
      } else {
        console.log('PLAYYYYYYYYYYYY');
        TrackPlayer.play();
      }
    }

    return (
      <View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              TrackPlayer.skipToPrevious();
            }}
          >
            <Image
              style={{
                resizeMode: 'contain',
                transform: [{ rotateY: '180deg' }],
                tintColor: AcentColor,
                aspectRatio: 0.6,
              }}
              source={require('../public/icons8-next-others-96.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePlayPress}>
            {isPlaying ? (
              <Image
                style={{ resizeMode: 'contain', tintColor: AcentColor, aspectRatio: 2.5 }}
                source={require('../public/icons8-pause-50.png')}
              />
            ) : (
              <Image
                style={{ resizeMode: 'contain', tintColor: AcentColor, aspectRatio: 2.5 }}
                source={require('../public/icons-play-50.png')}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
            <Image
              style={{ resizeMode: 'contain', tintColor: AcentColor, aspectRatio: 0.6 }}
              source={require('../public/icons8-next-others-96.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ position: 'absolute', right: -36, bottom: -20 }}
          onPress={onShuffle}
        >
          <Image
            style={{
              resizeMode: 'contain',
              tintColor: AcentColor,
              aspectRatio: 0.4,
            }}
            source={require('../public/shuffle.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const PlaylistItem = ({ element }) => {
    console.log('PlaylistItem', element);

    // function handleItemPress() {
    //   TrackPlayer.skip(index);
    // }
    return (
      <View>
        <View style={styles.img_track_load}>
          {(element?.artwork && element?.loadImg && (
            <Image style={styles.img_track} source={require('../public/musicimg.jpeg')} />
          )) ||
            (element?.artwork && (
              <Image style={styles.img_track} source={{ uri: element?.artwork }} />
            ))}
        </View>
        <View style={{ marginTop: -5, alignItems: 'center' }}>
          <Text style={[styles.playlistItem, { color: colorTxt() }]}>{element?.title}</Text>
          <Text style={{ color: colorTxt(), marginBottom: 10 }}>{element?.artist}</Text>
        </View>
        <TrackProgress durationDefault={element?.duration} />
      </View>
    );
  };

  async function handleShuffle() {
    console.log('handleShuffle');
    // try {
    // SoundPlayer.playUrl('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    // // } catch (e) {

    // let queue = await TrackPlayer.getQueue();
    await TrackPlayer.reset();
    queue.sort(() => Math.random() - 0.5);
    await TrackPlayer.add(queue);
    loadPlaylist();
  }
  console.log(queue, 'QUEUEEEEE');

  return (
    <View style={styles.trackContainer}>
      <PlaylistItem element={queue[currentTrack]} />
      <Controls onShuffle={handleShuffle} />
    </View>
  );
}

export const PlayerScreen = () => {
  const navigation = useNavigation();
  const { list, nameList } = QueueList;
  navigation.setOptions({ title: nameList });
  /// CURRENT PLAYLIST NEED REDUCER

  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();
      console.log('queue:', queue);
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
    position: 'absolute',
    top: 0,
    alignItems: 'center',
  },
  img_track_load: {
    height: ScreenWidth * 0.8,
    width: ScreenWidth * 0.8,
    backgroundColor: AcentColor,
    marginBottom: 16,
  },
  img_track: {
    height: ScreenWidth * 0.8,
    width: ScreenWidth * 0.8,
    resizeMode: 'contain',
  },
  playlistItem: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  play_bar: {
    height: 3,
    marginVertical: 12,
    borderWidth: 0,
  },
});
