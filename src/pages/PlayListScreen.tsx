import { useNavigation } from '@react-navigation/native';
import { View, Button, Text } from 'react-native';

export const PlayListScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>PlayList</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
