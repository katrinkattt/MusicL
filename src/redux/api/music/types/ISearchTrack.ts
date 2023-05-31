export interface ISearchTrack {
	data: Datum[]
	total: number
	next: string
}

export interface Datum {
	id: number
	readable: boolean
	title: string
	title_short: string
	title_version?: string
	link: string
	duration: string
	rank: string
	explicit_lyrics: boolean
	explicit_content_lyrics: number
	explicit_content_cover: number
	preview: string
	md5_image: string
	artist: Artist
	album: Album
	type: DatumType
}

export interface Album {
	id: string
	title: string
	cover: string
	cover_small: string
	cover_medium: string
	cover_big: string
	cover_xl: string
	md5_image: string
	tracklist: string
	type: string
}

export interface Artist {
	id: string
	name: string
	link: string
	picture: string
	picture_small: string
	picture_medium: string
	picture_big: string
	picture_xl: string
	tracklist: string
	type: string
}

export enum DatumType {
	Track = 'track'
}