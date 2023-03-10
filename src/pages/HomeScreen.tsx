import { useNavigation } from '@react-navigation/native';
import { ScrollView, StatusBar, View, Button } from 'react-native';
import { Section } from '../components/section';
import { Logo } from '../components/logo';
import { RUS } from '../lang/lang';
import { MainTheme, AcentColor } from '../style/theme';
import { AlbumSection } from '../components/album';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <MainTheme>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Logo />
          <Button
            color={AcentColor}
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile')}
          />
          <AlbumSection title="qwer" />
          <Section title={RUS.tracks.title}>{RUS.tracks.descr}</Section>
          <Section title={RUS.tracks.title}>{RUS.tracks.descr}</Section>
          <Section title={RUS.tracks.title}>{RUS.tracks.descr}</Section>
          <Section title={RUS.tracks.title}>{RUS.tracks.descr}</Section>
        </ScrollView>
      </MainTheme>
    </View>
  );
};
