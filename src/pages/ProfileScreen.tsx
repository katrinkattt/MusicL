import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Section } from '../components/section';
import { AlbumSection } from '../components/album';
import { MainText } from '../style/theme';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Section title="User" />
      <AlbumSection title="Account" />
      <AlbumSection title="My downloads" />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}
      >
        <AlbumSection title="Settings" />
        <AlbumSection title="About Us" />
      </TouchableOpacity>
    </View>
  );
};
