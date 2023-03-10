import { useNavigation } from '@react-navigation/native';
import { ScrollView, StatusBar, View, Button, Text } from 'react-native';
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
          <Section title={RUS.tracks.title} text={RUS.tracks.descr} />
          <Section title={RUS.tracks.title} text={RUS.tracks.descr} />
          <Section title={RUS.tracks.title} text={RUS.tracks.descr}>
            <Logo size={0.9} />
          </Section>
        </ScrollView>
      </MainTheme>
    </View>
  );
};
