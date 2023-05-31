import { api } from '../api'
import { IGetTrackByID } from './types/IGetTrackById'

export const songApi = api.injectEndpoints({
	endpoints: build => ({
		getTrackById: build.query<IGetTrackByID, number | string>({
			query: id => ({
				url: `/track/${id}`
			})
		})
	})
})
export const { useGetTrackByIdQuery } = songApi
