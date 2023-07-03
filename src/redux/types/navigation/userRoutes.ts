import Catalog from '@/pages/catalog/catalog'
import AlbumWrapperCatalog from '@/pages/catalog/wrappers/album/album'
import ArtistWrapperCatalog from '@/pages/catalog/wrappers/artist/artist'
import PlaylistWrapperCatalog from '@/pages/catalog/wrappers/playlist/playlist'
import Error from '@/pages/error/error'
import Favorites from '@/pages/favorites/favorites'
import Home from '@/pages/home/home'
import GenreCatalog from '@/pages/search/genreCatalog/genreCatalog'
import Search from '@/pages/search/search'
import Settings from '@/pages/settings/settings'
import Song from '@/pages/song/song'
import { iRoutes } from './navigationTypes'

export const userRoutes: iRoutes[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Settings',
		component: Settings
	},
	{
		name: 'catalog',
		component: Catalog
	},
	{
		name: 'genreCatalog',
		component: GenreCatalog
	},
	{
		name: 'favorites',
		component: Favorites
	},
	{
		name: 'Song',
		component: Song
	},
	
	{
		name: 'Search',
		component: Search
	},
	
	{
		name: 'ArtistWrapperCatalog',
		component: ArtistWrapperCatalog
	},
	{
		name: 'AlbumWrapperCatalog',
		component: AlbumWrapperCatalog
	},
	{
		name: 'PlayListWrapperCatalog',
		component: PlaylistWrapperCatalog
	},
	{
		name: 'Error',
		component: Error
	}
]
