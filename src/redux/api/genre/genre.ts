import { api } from '../api'
import { IGetAllGenre } from './types/IGetAllGenre'
import { IGetChartInGenre } from './types/IGetChartInGenre'

export const musicApi = api.injectEndpoints({
	endpoints: build => ({
		getAllGenre: build.query<IGetAllGenre, null>({
			query: () => ({
				url: '/genre'
			})
		}),
		getChartInGenre: build.query<IGetChartInGenre, number>({
			query: id => ({
				url: `/editorial/${id}/charts`
			})
		})
	})
})
export const { useGetAllGenreQuery, useGetChartInGenreQuery } = musicApi
