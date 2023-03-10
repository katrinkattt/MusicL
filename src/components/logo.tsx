import { Image, View } from 'react-native';

export const Logo = () => (
  <View>
    <Image source={require('../public/logo.png')} />
  </View>
);
