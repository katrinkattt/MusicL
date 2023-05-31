import { PressableProps } from 'react-native'

export interface IFlatListItem extends PressableProps {
	name: string
	image: {
		url: string
		width: number
		height: number
	}
	ImageClassNames?: string
	WrapClassNames?: string
	textCenter?: boolean
	artists?: string
}
