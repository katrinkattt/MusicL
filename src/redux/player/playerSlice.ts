import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PlayerState = {
	songIndex: number
	data: {
		id: number | string
		url: string
		title: string
		artist: string
		artwork: string
	}[]
}
export const playerSlice = createSlice({
	name: 'player',
	initialState: [] as Array<PlayerState>,
	reducers: {
		addToPlayer: (state, { payload }: PayloadAction<PlayerState>) => {
			state.length = 0
			state.push.apply(state, [
				{ songIndex: payload.songIndex, data: payload.data }
			])
		}
	}
})
export const { reducer: playerReducer, actions: PlayerAction } = playerSlice
