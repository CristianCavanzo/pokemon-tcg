type SEARCHERTYPE = 'select' | 'range';
export interface SearcherInterface {
	name: string;
	type: SEARCHERTYPE;
	options?: string[] | number[];
	images?: string;
}
