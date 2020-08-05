import React, { useState, useEffect, useCallback, FormEvent } from 'react';

import { SearchInput, CardContainer, CardItem, Image, Text } from './styles';

import { getPokemonList } from '../../services/api';

import formatDataApi from '../../utils/formatDataApi';
import { DataApi } from '../../utils/types';
import Loading from '../../components/Loading';

export default function Home() {
	const [search, setSearch] = useState('');
	const [pokemons, setPokemons] = useState<DataApi[]>([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(0);
	const [isLastPage, setIsLastPage] = useState(false);

	const loadMore = useCallback(() => {
		const offset = page * 20;

		if (loading || isLastPage) return;

		setLoading(true);

		getPokemonList(offset).then(response => {
			const { results, next } = response.data;

			const newPokemons = pokemons.concat(formatDataApi(results));

			setPokemons(newPokemons);
			setPage(prevPage => prevPage + 1);
			setLoading(false);
			setIsLastPage(!next);
		});
	}, [isLastPage, loading, page, pokemons]);

	useEffect(() => {
		loadMore();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		console.log('teste');
	}

	window.onscroll = () => {
		const { scrollTop, offsetHeight } = document.documentElement;
		const currentScroll = window.innerHeight + scrollTop + 100;

		if (currentScroll >= offsetHeight) {
			loadMore();
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<SearchInput
					type="text"
					value={search}
					onChange={({ target: { value } }) => setSearch(value)}
					placeholder="Search..."
				/>
			</form>

			<CardContainer>
				{pokemons.map(pokemon => (
					<CardItem key={pokemon.id} to={`/details/${pokemon.id}`}>
						<Image
							src={`https://pokeres.bastionbot.org/images/pokemon/${parseInt(
								pokemon.id
							)}.png`}
							alt={pokemon.name}
						/>
						<Text>#{pokemon.id}</Text>
						<Text>{pokemon.name}</Text>
					</CardItem>
				))}
			</CardContainer>

			{loading && <Loading />}
		</>
	);
}
