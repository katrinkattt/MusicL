import { api } from '../api'
import { IGetArtistByID } from './types/IGetArtistById'
import { IGetArtistTrackByID } from './types/IGetArtistTrackById'

export const artistApi = api.injectEndpoints({
	endpoints: build => ({
		getArtistById: build.query<IGetArtistByID, number | string>({
			query: id => ({
				url: `/artist/${id}`
			})
		}),
		getArtistTracks: build.query<IGetArtistTrackByID, number | string>({
			query: id => ({
				url: `/artist/${id}/top?limit=100`
			})
		})
	})
})
export const { useGetArtistByIdQuery, useGetArtistTracksQuery } = artistApi
