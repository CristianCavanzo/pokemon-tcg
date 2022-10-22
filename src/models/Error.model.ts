export interface ErrorsResponse {
	error: boolean;
	message: string;
}

export enum ERROSMESSAGE {
	API_ERROR = 'Ha ocurrido un error en la API',
	ERROR_SYNTAXIS = 'Ha ocurrido algo inesperado',
}
