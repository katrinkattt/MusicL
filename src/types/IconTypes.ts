import {
	AntDesign,
	Entypo,
	EvilIcons,
	FontAwesome,
	Foundation,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
	SimpleLineIcons,
	Zocial
} from '@expo/vector-icons'

export type IIconName =
	keyof typeof Ionicons.glyphMap
	| keyof typeof MaterialCommunityIcons.glyphMap
	| keyof typeof SimpleLineIcons.glyphMap
	| keyof typeof Zocial.glyphMap
	| keyof typeof FontAwesome.glyphMap
	| keyof typeof EvilIcons.glyphMap
	| keyof typeof Foundation.glyphMap
	| keyof typeof Entypo.glyphMap
	| keyof typeof AntDesign.glyphMap
	| keyof typeof MaterialIcons.glyphMap