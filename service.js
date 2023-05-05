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
        url: "require('../../files/Nirvana_Smells_Like_Teen_Spirit_Official_Music_.mp3')",
        title: 'Smells Like Teen Spirit',
        artist: 'Nirvana',
        artwork: 'https://i1.sndcdn.com/artworks-000661266283-od11y9-t500x500.jpg',
        duration: 278,
        loadImg: '',
        genre: 'Progressive House, rock',
      },
      {
        url: "require('../../files/Nirvana_Smells_Like_Teen_Spirit_Official_Music_.mp3')",
        title: "I'm Good",
        artist: 'David Guetta',
        artwork: "require('../public/musicimg.jpeg')",
        duration: 177,
        loadImg: '../public/musicimg.jpeg',
        genre: 'Progressive House, Electro House',
      },
      {
        url: "require('../../files/Nirvana_Smells_Like_Teen_Spirit_Official_Music_.mp3')",
        title: 'Like',
        artist: 'Nirvana',
        artwork: '',
        duration: 278,
        loadImg: '',
        genre: 'Progressive House, rock',
      },
      {
        url: "require('../../files/Nirvana_Smells_Like_Teen_Spirit_Official_Music_.mp3')",
        title: "I'm Good",
        artist: 'David Guetta dchghcs cshi ui  h ehfihf vkv ',
        artwork: "require('../public/musicimg.jpeg')",
        duration: 177,
        loadImg: '../public/musicimg.jpeg',
        genre: 'Progressive House, Electro House',
      },
    ]);
  }
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}
export async function playbackService() {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    console.log('Event.RemotePause');
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    console.log('Event.RemotePlay');
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    console.log('Event.RemoteNext');
    TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    console.log('Event.RemotePrevious');
    TrackPlayer.skipToPrevious();
  });
}
