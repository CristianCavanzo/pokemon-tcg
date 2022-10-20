const url = process.env.NEXT_PUBLIC_URL_API;
export const endpoints = {
	cards: {
		getCards: `${url}/v2/cards`,
	},
};
