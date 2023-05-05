import { useNavigation } from '@react-navigation/native';
import { View, Button, Text } from 'react-native';
import { MainTheme } from '../style/theme';
import { AcentColor } from '../style/theme';
import { Section } from '../components/section';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <MainTheme>
      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
      <View style={{ justifyContent: 'center' }}>
        <Section title="User" />
      </View>
      <Section title="Playlists" text="14 lists" />
      {/* </View> */}
    </MainTheme>
  );
};
