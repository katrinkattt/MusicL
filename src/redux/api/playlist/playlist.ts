import { api } from '../api'
import { IPlayListByID } from './types/IGetPlaylistById'
import { IPlayListTrack } from './types/IGetPlayListTrack'

export const playlistApi = api.injectEndpoints({
	endpoints: build => ({
		getPlaylistById: build.query<IPlayListByID, number | string>({
			query: id => ({
				url: `/playlist/${id}`
			})
		}),
		getPlaylistTracks: build.query<IPlayListTrack, number | string>({
			query: id => ({
				url: `/playlist/${id}/tracks`
			})
		})
	})
})
export const { useGetPlaylistByIdQuery, useGetPlaylistTracksQuery } =
	playlistApi
