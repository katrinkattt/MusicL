import { Image, View } from 'react-native';
import { AcentColor } from '../style/theme';

export const IconMusic = () => (
  <View>
    <Image
      style={{ aspectRatio: 0.1, resizeMode: 'contain', tintColor: AcentColor }}
      source={require('../public/sound.png')}
    />
  </View>
);
export const IconFind = () => (
  <View>
    <Image
      style={{ aspectRatio: 0.07, resizeMode: 'contain', tintColor: AcentColor }}
      source={require('../public/research.png')}
    />
  </View>
);
export const IconUser = () => (
  <View>
    <Image
      style={{ aspectRatio: 0.07, resizeMode: 'contain', tintColor: AcentColor }}
      source={require('../public/user.png')}
    />
  </View>
);
