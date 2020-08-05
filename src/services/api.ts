import axios from 'axios';

import { PokemonList, PokemonData } from '../utils/types';

const api = axios.create({
	baseURL: 'https://pokeapi.co/api/v2'
});

export function getPokemonList(offset = 20, limit = 20) {
	return api.get<PokemonList>(`/pokemon?offset=${offset}&limit=${limit}`);
}

export function getPokemonData(id: number) {
	return api.get<PokemonData>(`/pokemon/${id}`);
}
