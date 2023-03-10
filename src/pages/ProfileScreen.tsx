import { useNavigation } from '@react-navigation/native';
import { View, Button } from 'react-native';
import { MainTheme } from '../style/theme';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <MainTheme>
      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      {/* </View> */}
    </MainTheme>
  );
};
