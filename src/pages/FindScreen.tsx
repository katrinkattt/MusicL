import { View, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { ScreenWidth, AcentColor } from '../style/theme';
import { IconFind } from '../components/icons';

export const FindScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View
        style={{ width: ScreenWidth * 0.85, height: 50, backgroundColor: '#222', borderRadius: 6 }}
      >
        <Image
          style={{
            aspectRatio: 0.07,
            resizeMode: 'contain',
            tintColor: AcentColor,
            marginTop: -230,
            marginLeft: ScreenWidth * 0.74,
          }}
          source={require('../public/research.png')}
        />
      </View>
    </View>
  );
};
