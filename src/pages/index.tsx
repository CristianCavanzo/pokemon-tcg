import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardRequest } from '@models/Card.model';
import Image from 'next/image';
import styled from 'styled-components';
import { getCardsApi } from '@services/cards/getCardsApi';
import { Searcher } from '@components/Searcher';
import { SearcherInterface } from '@models/ComponentModels/Searcher.model';
const Div = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;

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

	const handleCards = async (): Promise<CardRequest> => {
		try {
			const data = await getCardsApi();
			return data;
		} catch (error) {
			return { error: true, message: 'Error al consultar la API interna' };
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
	const busqueda: SearcherInterface[] = [
		{
			name: 'Types',
			type: 'select',
			options: ['Hola', 'Hola 2'],
		},
	];
	return (
		<Fragment>
			<header>
				<Searcher placeholder="Realiza tu busqueda" options={busqueda} />
			</header>
			<Div>
				{state.cards &&
					state.cards?.map((card, index) => (
						<div key={`${card}_${index}`}>
							<p>{card.name}</p>
							<div
								style={{
									width: '315px',
									height: '433px',
									position: 'relative',
								}}
							>
								<Image src={card.images.large} alt={card.name} layout="fill" />
							</div>
						</div>
					))}

				{state.cardsError.error && <p>Error {state.cardsError.message}</p>}
			</Div>
		</Fragment>
	);
};

export default Home;
