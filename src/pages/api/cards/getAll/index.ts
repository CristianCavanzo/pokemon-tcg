import { CardRequest } from './../../../../models/Card.model';
import { Card } from '@models/Card.model';
import { getCards } from '@services/cards/getCards';
import { NextApiResponse, NextApiRequest } from 'next';

export default async function App(req: NextApiRequest, res: NextApiResponse<CardRequest>) {
	try {
		const data = await getCards();
		if (typeof data === 'object') {
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
		} else {
			return res.status(200).json({ error: true, message: 'Error de servidor' });
		}
	} catch (error) {
		return res.status(200).json({ error: true, message: 'Error de servidor' });
	}
}
