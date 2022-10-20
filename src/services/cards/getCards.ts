import axios from 'axios';

export const getCards = async () => {
	const {
		data: { data },
	} = await axios<{ data: [] }>({
		method: 'GET',
		url: 'https://api.pokemontcg.io/v2/cards',
		params: {
			pageSize: 1,
		},
	});
	return data;
};
