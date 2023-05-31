import { TypeRootStackParamList } from '@/types/navigation/navigationTypes'
import { RouteProp, useRoute } from '@react-navigation/native'

export const useTypedRoute = <N extends keyof TypeRootStackParamList>() =>
	useRoute<RouteProp<TypeRootStackParamList, N>>()
