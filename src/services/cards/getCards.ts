import axios from 'axios';

export const getCards = async () => {
	try {
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
	} catch (error) {
		return 'Error de servidor';
	}
};
