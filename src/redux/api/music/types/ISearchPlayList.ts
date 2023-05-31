export interface ISearchPlayList {
	data: Datum[]
	total: number
	next: string
}

export interface Datum {
	id: number
	title: string
	public: boolean
	nb_tracks: number
	link: string
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
	user: User
	type: string
}

export interface User {
	id: number
	name: string
	tracklist: string
	type: string
}
