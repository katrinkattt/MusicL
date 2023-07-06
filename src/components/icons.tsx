import { Image, View } from 'react-native';
import { AcentColor } from '../style/theme';

export const IconMusic = () => (
  <View>
    <Image
      style={{ height: 50, width: 60, resizeMode: 'contain', tintColor: AcentColor }}
      source={require('../public/sound.png')}
    />
  </View>
);
export const IconFind = () => (
  <View>
    <Image
      style={{ height: 40, width: 60, resizeMode: 'contain', tintColor: AcentColor }}
      source={require('../public/research.png')}
    />
  </View>
);
export const IconUser = () => (
  <View>
    <Image
      style={{ height: 40, width: 60, resizeMode: 'contain', tintColor: AcentColor }}
      source={require('../public/user.png')}
    />
  </View>
);
export const IconLikeActive = () => (
  <View>
    <Image
      style={{ aspectRatio: 0.7, resizeMode: 'contain', tintColor: AcentColor }}
      source={require('../public/icons8-like-active-50.png')}
    />
  </View>
);
export const IconLikeUnActive = () => (
  <View>
    <Image
      style={{ aspectRatio: 0.7, resizeMode: 'contain', tintColor: AcentColor }}
      source={require('../public/icons8-like-unactive-50.png')}
    />
  </View>
);
export const IconGoBack = () => (
  <View>
    <Image
      style={{ resizeMode: 'contain', tintColor: AcentColor }}
      source={require('../public/icons-goBack-32.png')}
    />
  </View>
);
