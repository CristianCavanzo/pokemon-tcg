import { Card } from '@models/Card.model';
import { ErrorsResponse } from '@models/Error.model';
import { getCards } from '@services/cards/getCards';
import { NextApiResponse, NextApiRequest } from 'next';

export default async function App(
	req: NextApiRequest,
	res: NextApiResponse<Card[] | ErrorsResponse>
) {
	try {
		const data = await getCards();
		const cards: Card[] = [];
		data.map((card: Card) => {
			cards.push({
				name: card.name,
				images: {
					large: card.images.large,
					small: card.images.small,
				},
				rarity: card.rarity,
			});
		});

		return res.status(200).json(cards);
	} catch (error) {
		return res.status(500).json({ error: true });
	}
}
