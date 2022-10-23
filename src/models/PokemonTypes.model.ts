import normalIcon from '/public/icons/normal.svg';
import fightingIcon from '/public/icons/fighting.svg';
import flyingIcon from '/public/icons/flying.svg';
import poisonIcon from '/public/icons/poison.svg';
import groundIcon from '/public/icons/ground.svg';
import rockIcon from '/public/icons/rock.svg';
import bugIcon from '/public/icons/bug.svg';
import ghostIcon from '/public/icons/ghost.svg';
import steelIcon from '/public/icons/steel.svg';
import fireIcon from '/public/icons/fire.svg';
import waterIcon from '/public/icons/water.svg';
import grassIcon from '/public/icons/grass.svg';
import electricIcon from '/public/icons/electric.svg';
import psychicIcon from '/public/icons/psychic.svg';
import iceIcon from '/public/icons/ice.svg';
import dragonIcon from '/public/icons/dragon.svg';
import darkIcon from '/public/icons/dark.svg';
import fairyIcon from '/public/icons/fairy.svg';

type Types =
	| 'Normal'
	| 'Fighting'
	| 'Flying'
	| 'Poison'
	| 'Ground'
	| 'Rock'
	| 'Bug'
	| 'Ghost'
	| 'Steel'
	| 'Fire'
	| 'Water'
	| 'Grass'
	| 'Electric'
	| 'Psychic'
	| 'Ice'
	| 'Dragon'
	| 'Dark'
	| 'Fairy';

export interface TypesPokemon {
	type: Types;
	image: string;
}

export const AllTypes: TypesPokemon[] = [
	{
		type: 'Normal',
		image: normalIcon.src,
	},
	{
		type: 'Fighting',
		image: fightingIcon.src,
	},
	{
		type: 'Flying',
		image: flyingIcon.src,
	},
	{
		type: 'Poison',
		image: poisonIcon.src,
	},
	{
		type: 'Ground',
		image: groundIcon.src,
	},
	{
		type: 'Rock',
		image: rockIcon.src,
	},
	{
		type: 'Bug',
		image: bugIcon.src,
	},
	{
		type: 'Ghost',
		image: ghostIcon.src,
	},
	{
		type: 'Steel',
		image: steelIcon.src,
	},
	{
		type: 'Fire',
		image: fireIcon.src,
	},
	{
		type: 'Water',
		image: waterIcon.src,
	},
	{
		type: 'Grass',
		image: grassIcon.src,
	},
	{
		type: 'Electric',
		image: electricIcon.src,
	},
	{
		type: 'Psychic',
		image: psychicIcon.src,
	},
	{
		type: 'Ice',
		image: iceIcon.src,
	},
	{
		type: 'Dragon',
		image: dragonIcon.src,
	},
	{
		type: 'Dark',
		image: darkIcon.src,
	},
	{
		type: 'Fairy',
		image: fairyIcon.src,
	},
];
