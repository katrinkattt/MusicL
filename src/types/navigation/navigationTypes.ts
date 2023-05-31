import { ComponentType } from 'react'
import { ICatalogList, ICatalogRenderTypes } from '../catalogTypes'

export type TypeRootStackParamList = {
	Home: undefined
	Search: undefined
	Settings: undefined
	catalog: {
		headerImage: string
		headerText: string
		data: ICatalogList[]
		headerDescription?: string
		id: number | string
		type: ICatalogRenderTypes
	}
	ArtistWrapperCatalog: {
		artistId: number | string
	}
	AlbumWrapperCatalog: {
		albumId: number | string
	}
	PlayListWrapperCatalog: {
		playListId: number | string
	}
	favorites: undefined
	Song: undefined
	genreCatalog: {
		genreId: number
		genreName: string
	},
	Error: {
		error: string
	}
}

export interface iRoutes {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
