import { combineReducers } from '@reduxjs/toolkit'
import { api } from './api/api'
import { favoriteReducer } from './favorite/favoriteSlice'
import { playerReducer } from './player/playerSlice'
import { LanguageReducer } from './settings/languageSlice'
import { ThemeReducer } from './settings/themeSlice'

export const reducers = combineReducers({
	[api.reducerPath]: api.reducer,
	favorites: favoriteReducer,
	theme: ThemeReducer,
	language: LanguageReducer,
	player: playerReducer
})
