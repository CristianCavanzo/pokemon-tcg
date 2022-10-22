import { Card } from './../../models/Card.model';
import { CardRequest } from '@models/Card.model';
import { endpoints } from './../endpoints/index';
import axios from 'axios';
import { ERROSMESSAGE } from '@models/Error.model';

export const getCardsApi = async (): Promise<CardRequest> => {
	try {
		const { data } = await axios<Card[]>({
			method: 'GET',
			url: endpoints.cards.getCardsApi,
		});
		console.log(data);
		if (!data) {
			throw new Error('Error en la api');
		}
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return { error: true, message: error.response?.data || ERROSMESSAGE.API_ERROR };
		} else {
			return { error: true, message: ERROSMESSAGE.ERROR_SYNTAXIS };
		}
	}
};
