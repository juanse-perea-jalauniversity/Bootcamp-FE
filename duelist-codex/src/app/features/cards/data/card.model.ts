export interface CardPrice {
	cardmarket_price: string;
	tcgplayer_price: string;
	ebay_price: string;
	amazon_price: string;
	coolstuffinc_price: string;
}

export interface CardSet {
	set_name: string;
	set_code: string;
	set_rarity: string;
	set_rarity_code?: string;
	set_price: string;
}

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
	card_sets?: CardSet[];
	card_prices?: CardPrice[];
}

export interface CardApiResponse {
	data: Card[];
	meta?: { total_pages: number };
}