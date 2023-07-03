// service.js
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Event,
} from 'react-native-track-player';

export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getActiveTrackIndex();
    isSetup = true;
  } catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior: AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
      compactCapabilities: [Capability.Play, Capability.Pause, Capability.SkipToNext],
      progressUpdateEventInterval: 2,
    });
    console.log('isSetup in service', isSetup);
    isSetup = true;
  } finally {
    return isSetup;
  }
}
export async function addTracks(tracks) {
  if (!!tracks) {
    await TrackPlayer.add(tracks);
  } else {
    await TrackPlayer.add([
      {
        url: require('./files/David_Guetta_Bebe_Rexha_I_m_Good_Blue_Offic.mp3'),
        title: "I'm Good",
        artist: 'David Guetta',
        artwork: require('./src/public/musicimg.jpeg'),
        duration: 177,
        loadImg: './src/public/musicimg.jpeg',
        genre: 'Progressive House, Electro House',
      },
      {
        url: require('./files/Nirvana_-_Smells_Like_Teen_Spirit_(musmore.com).mp3'),
        title: 'Smells Like Teen Spirit',
        artist: 'Nirvana',
        artwork: 'https://i1.sndcdn.com/artworks-000661266283-od11y9-t500x500.jpg',
        duration: 278,
        loadImg: '',
        genre: 'Progressive House, rock',
      },

      {
        url: require('./files/The_Beatles_Here_Comes_The_Sun.mp3'),
        title: 'Here comes the sun',
        artist: 'The Beatles',
        artwork: 'https://i.ytimg.com/vi/xUNqsfFUwhY/maxresdefault.jpg',
        duration: 278,
        loadImg: '',
        genre: 'Progressive House, rock',
      },
    ]);
  }
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}
export const PlaybackService = async function () {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());

  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });
};
