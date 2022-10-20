import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from '@models/Card.model';
import Image from 'next/image';
const Home = () => {
	const [state, setState] = useState<{ cards: Card[] | undefined }>({
		cards: undefined,
	});
	const handleCards = async () => {
		const { data } = await axios<Card[]>({ method: 'GET', url: '/api/cards/getAll' });
		return data;
	};
	useEffect(() => {
		(async () => {
			const cards = await handleCards();
			setState({ ...state, cards });
			console.log(state);
		})();
	}, []);

	return (
		<div>
			{state.cards &&
				state.cards.map((card, index) => (
					<div key={`${card}_${index}`}>
						<p>{card.name}</p>
						<div style={{ width: '300px', height: '200px' }}>
							<Image
								src={card.images.large}
								width="94.4"
								height="129.8"
								alt={card.name}
								layout="responsive"
							/>
						</div>
					</div>
				))}
		</div>
	);
};

export default Home;
