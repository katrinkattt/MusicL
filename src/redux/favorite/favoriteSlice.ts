import { IHeartProps } from '@/types/catalogTypes'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type dataState = {
	id: number | string
}[]

export const favoriteSlice = createSlice({
	name: 'favorites',
	initialState: {
		songs: [],
		artists: [],
		albums: [],
		playlists: []
	} as {
		songs: dataState
		artists: dataState
		albums: dataState
		playlists: dataState
	},
	reducers: {
		toggleFavorite: (state, { payload }: PayloadAction<IHeartProps>) => {
			switch (payload.type) {
				case 'songs':
					state.songs.some(song => song.id === payload.id)
						? (state.songs = state.songs.filter(song => song.id !== payload.id))
						: state.songs.push({ id: payload.id })
					break
				case 'albums':
					state.albums.some(album => album.id === payload.id)
						? (state.albums = state.albums.filter(
							album => album.id !== payload.id
						))
						: state.albums.push({ id: payload.id })
					break
				case 'playlists':
					state.playlists.some(playlists => playlists.id === payload.id)
						? (state.playlists = state.playlists.filter(
							playlists => playlists.id !== payload.id
						))
						: state.playlists.push({ id: payload.id })
					break
				case 'artists':
					state.artists.some(artists => artists.id === payload.id)
						? (state.artists = state.artists.filter(
							artists => artists.id !== payload.id
						))
						: state.artists.push({ id: payload.id })
					break
			}
		}
	}
})
export const { reducer: favoriteReducer, actions: FavoriteAction } =
	favoriteSlice
