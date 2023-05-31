import { api } from '../api'
import { IChart } from './types/IChart'
import { ISearchAlbum } from './types/ISearchAlbum'
import { ISearchArtist } from './types/ISearchArtist'
import { ISearchPlayList } from './types/ISearchPlayList'
import { ISearchTrack } from './types/ISearchTrack'

export const musicApi = api.injectEndpoints({
	endpoints: build => ({
		getChart: build.query<IChart, null>({
			query: () => ({
				url: '/chart?limit=100'
			})
		}),
		searchArtist: build.query<ISearchArtist, string>({
			query: term => ({
				url: `/search/artist?q=${term}`
			})
		}),
		searchTrack: build.query<ISearchTrack, string>({
			query: term => ({
				url: `/search/track?q=${term}`
			})
		}),
		searchAlbum: build.query<ISearchAlbum, string>({
			query: term => ({
				url: `/search/album?q=${term}`
			})
		}),
		searchPlayList: build.query<ISearchPlayList, string>({
			query: term => ({
				url: `/search/playlist?q=${term}`
			})
		})
	})
})
export const {
	useSearchArtistQuery,
	useGetChartQuery,
	useSearchTrackQuery,
	useSearchAlbumQuery,
	useSearchPlayListQuery
} = musicApi
