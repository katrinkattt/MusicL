import { Image, View } from 'react-native';

export const Logo = ({ size }: LogoProps) => (
  <View>
    <Image
      style={{ aspectRatio: size || 2, resizeMode: 'contain' }}
      source={require('../public/logo.png')}
    />
  </View>
);

export declare interface LogoProps {
  size?: number;
}
