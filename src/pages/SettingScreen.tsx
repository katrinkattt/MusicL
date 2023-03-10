import { useNavigation } from '@react-navigation/native';
import { View, Button } from 'react-native';

export const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
