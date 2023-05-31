import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ThemeState = 'light' | 'dark'
export const ThemeSlice = createSlice({
	name: 'theme',
	initialState: 'dark' as ThemeState,
	reducers: {
		setTheme: (state, { payload }: PayloadAction<ThemeState>) => {
			return payload
		}
	}
})
export const { reducer: ThemeReducer, actions: ThemeAction } = ThemeSlice
