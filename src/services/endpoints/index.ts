const url = process.env.NEXT_PUBLIC_URL_API;
export const endpoints = {
	cards: {
		getCards: `${url}/cards`,
		getCardsApi: `api/cards/getAll`,
	},
};
