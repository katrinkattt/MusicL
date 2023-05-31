import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, Button, TouchableOpacity, Text } from 'react-native';
import { Section } from '../components/section';
import { Logo } from '../components/logo';
import { ENG, RUS } from '../lang/lang';
import { MainTheme, MainThemeColor, AcentColor } from '../style/theme';
import { AlbumSection } from '../components/album';
// import { useDispatch } from 'react-redux';
// import { PlayerAction } from '../redux/player/playerSlice';
import { QueueList } from '../../playlists/dayPlayList';
import { useState } from 'react';

export const HomeScreen = () => {
  const navigation = useNavigation();
  // const dispatch = useDispatch();
  navigation.setOptions({ headerShown: false });
  const lang = [RUS, ENG];
  const [lng, setLng] = useState(0);

  return (
    <View>
      <MainTheme>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            <Logo />
            <TouchableOpacity onPress={() => (lng === 0 ? setLng(1) : setLng(0))}>
              <AlbumSection title="LNG" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Playlist');
            }}
          >
            <AlbumSection title={lang[lng].buttons.goPlayList} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // dispatch(
              //   PlayerAction.addToPlayer({
              //     data: QueueList.data.map((track) => {
              //       return {
              //         id: track.id,
              //         title: track.title,
              //         url: track.url,
              //         artist: track.artist,
              //         artwork: track.artwork,
              //       };
              //     }),
              //     songIndex: 1,
              //   })
              // );
              navigation.navigate('Player');
            }}
          >
            <AlbumSection title={lang[lng].buttons.play} />
          </TouchableOpacity>
          <Section title={lang[lng].tracks.title} text={lang[lng].tracks.descr} />
          <Section title={lang[lng].karaoke.title} text={lang[lng].karaoke.descr} />
          <Section title={lang[lng].autors.title} text={lang[lng].autors.descr} />
          <Section title={lang[lng].about_me.title} text={lang[lng].about_me.descr} />
          <Section title={lang[lng].tracks.title} text={lang[lng].tracks.descr} />
          {/* <Logo size={0.9} /> */}
        </ScrollView>
      </MainTheme>
    </View>
  );
};
