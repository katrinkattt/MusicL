import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type LanguageState = 'en' | 'ru' | 'ua' | 'pl'
export const LanguageSlice = createSlice({
	name: 'language',
	initialState: 'en' as LanguageState,
	reducers: {
		setLanguage: (state, { payload }: PayloadAction<LanguageState>) => {
			return payload
		}
	}
})
export const { reducer: LanguageReducer, actions: LanguageAction } =
	LanguageSlice
