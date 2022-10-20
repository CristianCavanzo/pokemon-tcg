import { ErrorsResponse } from '@models/Error.model';
export interface Card {
	name: string;
	images: {
		small: string;
		large: string;
	};
	rarity: string;
}

export type CardRequest = Card[] | ErrorsResponse;
