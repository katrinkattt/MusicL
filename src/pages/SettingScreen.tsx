import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity } from 'react-native';
import { IconGoBack } from '../components/icons';
import { useTypedSelector } from '../hook/useTypedSelector';
import { AlbumSection } from '../components/album';
import { DropDownLang } from '../components/DropDownLang';
import { lang } from '../lang/lang';

export const SettingsScreen = () => {
  const navigation = useNavigation();
  // const titleS = lang[lng].menu.profile.settings;

  navigation.setOptions({ title: 'titleS' });
  const lng = useTypedSelector((state) => state.language);
  return (
    <View>
      <View style={{ alignItems: 'flex-start' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconGoBack />
        </TouchableOpacity>
        <AlbumSection title={lang[lng].menu.lang} />
        <View style={{ width: '80%', alignSelf: 'center' }}>
          <DropDownLang />
        </View>
        <AlbumSection title={lang[lng].menu.theme} />
      </View>
    </View>
  );
};
