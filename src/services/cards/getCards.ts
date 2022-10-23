import { Card } from './../../models/Card.model';
import { CardRequest } from '@models/Card.model';
import { endpoints } from './../endpoints/index';
import axios from 'axios';
import { ERROSMESSAGE } from '@models/Error.model';

export const getCards = async (q?: { name: string }): Promise<CardRequest> => {
	try {
		const {
			data: { data },
		} = await axios<{ data: Card[] }>({
			method: 'GET',
			url: endpoints.cards.getCards,
			params: {
				q,
				pageSize: 1,
			},
		});
		console.log(data);
		if (!data) {
			throw new Error('Error en la api');
		}
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return {
				error: true,
				message: error.response?.data?.error?.message || ERROSMESSAGE.API_ERROR,
			};
		} else {
			return { error: true, message: ERROSMESSAGE.ERROR_SYNTAXIS };
		}
	}
};
