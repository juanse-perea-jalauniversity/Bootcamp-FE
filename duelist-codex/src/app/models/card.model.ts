interface Card {
	id: number;
	name: string;
	type: string;
	frameType: string;
	desc: string;
	ygoprodeck_url: string;
	humanReadableCardType?: string;
	race?: string;
	archetype?: string;
	card_images: { image_url: string; image_url_small: string }[];
}