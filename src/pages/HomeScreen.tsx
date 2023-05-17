import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, Button, TouchableOpacity, Text } from 'react-native';
import { Section } from '../components/section';
import { Logo } from '../components/logo';
import { RUS } from '../lang/lang';
import { MainTheme, MainThemeColor, AcentColor } from '../style/theme';
import { AlbumSection } from '../components/album';

export const HomeScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions({ headerShown: false });
  return (
    <View>
      <MainTheme>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Logo />
          {/* <Button
я            color={AcentColor}
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile')}
          /> */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Playlist');
            }}
          >
            <AlbumSection title="Go to playList" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Player');
            }}
          >
            <AlbumSection title="Play" />
          </TouchableOpacity>
          <Section title={RUS.tracks.title} text={RUS.tracks.descr} />
          <Section title={RUS.tracks.title} text={RUS.tracks.descr} />
          <Section title={RUS.tracks.title} text={RUS.tracks.descr} />
          <Section title={RUS.tracks.title} text={RUS.tracks.descr} />
          <Section title={RUS.tracks.title} text={RUS.tracks.descr} />
          <Section title={RUS.tracks.title} text={RUS.tracks.descr} />
          {/* <Logo size={0.9} /> */}
        </ScrollView>
      </MainTheme>
    </View>
  );
};
