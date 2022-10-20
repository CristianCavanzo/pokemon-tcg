import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardRequest } from '@models/Card.model';
import Image from 'next/image';

const Home = () => {
	interface States {
		cards: Card[] | undefined;
		cardsError: {
			error: boolean;
			message: string;
		};
	}
	const [state, setState] = useState<States>({
		cards: undefined,
		cardsError: {
			error: false,
			message: '',
		},
	});

	const handleCards = async () => {
		try {
			const { data } = await axios<CardRequest>({
				method: 'GET',
				url: '/api/cards/getAll',
			});
			return data;
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				setState({ ...state, cardsError: { error: true, message: 'Error en la peticion' } });
			} else {
				setState({ ...state, cardsError: { error: true, message: 'Error inesperado' } });
			}
		}
	};
	useEffect(() => {
		(async () => {
			const cards = await handleCards();
			if (Array.isArray(cards)) {
				setState({ ...state, cards });
			} else if (cards) {
				setState({ ...state, cardsError: { error: true, message: cards.message } });
			}
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
			{state.cardsError.error && <p>Error {state.cardsError.message}</p>}
		</div>
	);
};

export default Home;
