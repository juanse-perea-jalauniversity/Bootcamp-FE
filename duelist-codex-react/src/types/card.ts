export interface Card {
	id: number;
	name: string;
	type: string;
	frameType: string;
	desc: string;
	ygoprodeck_url: string;
	humanReadableCardType?: string;
	race?: string;
	archetype?: string;
	atk?: number;
	def?: number;
	level?: number;
	attribute?: string;
	card_images: { image_url: string; image_url_small: string }[];
}

export interface YgoprodeckApiData {
	data: Card[];
	meta: meta
}

export interface meta {
	current_rows: number;
	generated: string;
	next_page: string;
	next_page_offset: number;
	pages_remaining: number;
	rows_remaining: number;
	total_pages: number;
	total_rows: number;
}