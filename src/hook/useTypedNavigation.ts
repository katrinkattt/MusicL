import { TypeRootStackParamList } from '../types/navigation/navigationTypes';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export const useTypedNavigation = () => useNavigation<NavigationProp<TypeRootStackParamList>>();
