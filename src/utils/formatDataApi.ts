import { PokemonInfo, DataApi } from './types';
import { ucFirst } from './strings';

export default function formatDataApi(results: PokemonInfo[]): DataApi[] {
	const newData: DataApi[] = results.map(pokemon => {
		const id = pokemon.url.replace(
			/https:\/\/pokeapi.co\/api\/v2\/pokemon\/|\//gi,
			''
		);

		return {
			id: id.padStart(3, '0'),
			name: ucFirst(pokemon.name)
		};
	});

	return newData;
}
