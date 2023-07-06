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
        url: require('./src/files/David_Guetta_Bebe_Rexha_I_m_Good_Blue_Offic.mp3'),
        title: "I'm Good",
        artist: 'David Guetta',
        artwork: require('./src/public/musicimg.jpeg'),
        duration: 177,
        loadImg: './src/public/musicimg.jpeg',
        genre: 'Progressive House, Electro House',
      },
      {
        url: require('./src/files/Nirvana_-_Smells_Like_Teen_Spirit_(musmore.com).mp3'),
        title: 'Smells Like Teen Spirit',
        artist: 'Nirvana',
        artwork: 'https://i1.sndcdn.com/artworks-000661266283-od11y9-t500x500.jpg',
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
};
// import TrackPlayer, { Capability } from 'react-native-track-player';
// export async function setupPlayer() {
//   let isSetup = false;
//   try {
//     await TrackPlayer.getActiveTrackIndex();
//     isSetup = true;
//   } catch {
//     await TrackPlayer.setupPlayer();
//     await TrackPlayer.updateOptions({
//       android: {
//         appKilledPlaybackBehavior: AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
//       },
//       capabilities: [
//         Capability.Play,
//         Capability.Pause,
//         Capability.SkipToNext,
//         Capability.SkipToPrevious,
//         Capability.SeekTo,
//       ],
//       compactCapabilities: [Capability.Play, Capability.Pause, Capability.SkipToNext],
//       progressUpdateEventInterval: 2,
//     });
//     console.log('isSetup in service', isSetup);
//     isSetup = true;
//   } finally {
//     return isSetup;
//   }
// }
// export async function addTracks(tracks) {
//   if (!!tracks) {
//     await TrackPlayer.add(tracks);
//   } else {
//     await TrackPlayer.add([
//       {
//         id: 1,
//         title: "I'm Good",
//         url: require('./src/files/David_Guetta_Bebe_Rexha_I_m_Good_Blue_Offic.mp3'),
//         artist: 'David Guetta',
//         artwork: 'https://i1.sndcdn.com/artworks-000661266283-od11y9-t500x500.jpg',
//         duration: 177,
//         loadImg: 'https://i.ytimg.com/vi/xUNqsfFUwhY/maxresdefault.jpg',
//         genre: 'Progressive House, Electro House',
//       },
//     ]);
//   }
// }

// module.exports = async function () {
//   TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());
//   TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());
//   TrackPlayer.addEventListener('remote-next', () => TrackPlayer.skipToNext());
//   TrackPlayer.addEventListener('remote-previous', () => TrackPlayer.skipToPrevious());
// }
