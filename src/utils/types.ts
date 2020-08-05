export type DataApi = {
	id: string;
	name: string;
};

export type PokemonInfo = {
	name: string;
	url: string;
};

export enum pokeTypes {
	grass,
	fire,
	water,
	bug,
	normal,
	poison,
	electric,
	ground,
	fairy,
	flying,
	psychic,
	rock,
	ghost,
	ice,
	dragon
}

type PokemonTypes = {
	slot: number;
	type: {
		name: pokeTypes;
	};
};

type PokemonStats = {
	base_stat: number;
	stat: {
		name: string;
	};
};

export type PokemonData = {
	name: string;
	height: number;
	weight: number;
	types: PokemonTypes[];
	stats: PokemonStats[];
};

export type PokemonList = {
	next: string | null;
	previous: string | null;
	results: PokemonInfo[];
};
