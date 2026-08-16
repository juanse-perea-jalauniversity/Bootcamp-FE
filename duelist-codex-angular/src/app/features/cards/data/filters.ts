export const CARD_TYPES = [
	'Effect Monster',
	'Normal Monster',
	'Ritual Monster',
	'Fusion Monster',
	'Synchro Monster',
	'XYZ Monster',
	'Link Monster',
	'Pendulum Effect Monster',
	'Spell Card',
	'Trap Card',
] as const;

export const CARD_ATTRIBUTES = [
	'DARK',
	'LIGHT',
	'EARTH',
	'WATER',
	'FIRE',
	'WIND',
	'DIVINE',
] as const;

export interface SearchCriteria {
	fname: string;
	type: string;
	attribute: string;
}
