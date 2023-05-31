export interface IPlayListByID {
	id: string
	title: string
	description: string
	duration: number
	public: boolean
	is_loved_track: boolean
	collaborative: boolean
	nb_tracks: number
	fans: number
	link: string
	share: string
	picture: string
	picture_small: string
	picture_medium: string
	picture_big: string
	picture_xl: string
	checksum: string
	tracklist: string
	creation_date: Date
	md5_image: string
	picture_type: string
	creator: Creator
	type: string
	tracks: Tracks
}

export interface Creator {
	id: string
	name: string
	tracklist: string
	type: string
	link?: string
}

export interface Tracks {
	data: Datum[]
	checksum: string
}

export interface Datum {
	id: string
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
	time_add: number
	artist: Creator
	album: Album
	type: string
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
